#!/usr/bin/env node
/**
 * Script Compiler Pipeline
 * Compiles .pq (Philosophy Quest) script files to JSON
 * Handles dialog trees, scene descriptions, and parser vocabulary
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.join(__dirname, '../..');

const SCRIPTS_DIR = path.join(ROOT, 'src/scripts');
const OUTPUT_DIR = path.join(ROOT, 'build/scripts');

// Simple parser for .pq files
function parseScript(content, filename) {
  const lines = content.split('\n');
  const script = {
    filename,
    scenes: [],
    dialogs: [],
    vocabulary: {
      nouns: new Set(),
      verbs: new Set(),
      adjectives: new Set()
    }
  };
  
  let currentScene = null;
  let currentDialog = null;
  let lineNum = 0;
  
  for (const line of lines) {
    lineNum++;
    const trimmed = line.trim();
    
    // Skip empty lines and comments
    if (!trimmed || trimmed.startsWith('#')) continue;
    
    // Scene definition: SCENE: scene_name "Description"
    const sceneMatch = trimmed.match(/^SCENE:\s+(\w+)\s+"(.+)"$/);
    if (sceneMatch) {
      currentScene = {
        id: sceneMatch[1],
        description: sceneMatch[2],
        objects: [],
        exits: {},
        actors: []
      };
      script.scenes.push(currentScene);
      continue;
    }
    
    // Object definition: OBJECT: name "description" [interactable]
    const objectMatch = trimmed.match(/^OBJECT:\s+(\w+)\s+"(.+)"(?:\s*\[(\w+)\])?$/);
    if (objectMatch && currentScene) {
      currentScene.objects.push({
        id: objectMatch[1],
        description: objectMatch[2],
        state: objectMatch[3] || 'static',
        synonyms: []
      });
      script.vocabulary.nouns.add(objectMatch[1]);
      continue;
    }
    
    // Exit definition: EXIT: direction -> scene_id
    const exitMatch = trimmed.match(/^EXIT:\s+(\w+)\s*->\s*(\w+)$/);
    if (exitMatch && currentScene) {
      currentScene.exits[exitMatch[1]] = exitMatch[2];
      continue;
    }
    
    // Actor definition: ACTOR: name "description"
    const actorMatch = trimmed.match(/^ACTOR:\s+(\w+)\s+"(.+)"$/);
    if (actorMatch && currentScene) {
      currentScene.actors.push({
        id: actorMatch[1],
        description: actorMatch[2],
        dialog: null
      });
      script.vocabulary.nouns.add(actorMatch[1]);
      continue;
    }
    
    // Dialog tree: DIALOG: actor_name
    const dialogMatch = trimmed.match(/^DIALOG:\s+(\w+)$/);
    if (dialogMatch) {
      currentDialog = {
        actor: dialogMatch[1],
        root: null,
        nodes: {}
      };
      script.dialogs.push(currentDialog);
      continue;
    }
    
    // Dialog node: NODE: node_id "text" [condition]
    const nodeMatch = trimmed.match(/^NODE:\s+(\w+)\s+"(.+)"(?:\s*\[(\w+)\])?$/);
    if (nodeMatch && currentDialog) {
      const node = {
        id: nodeMatch[1],
        text: nodeMatch[2],
        condition: nodeMatch[3] || null,
        choices: []
      };
      currentDialog.nodes[nodeMatch[1]] = node;
      if (!currentDialog.root) currentDialog.root = nodeMatch[1];
      continue;
    }
    
    // Choice: CHOICE: "text" -> node_id [condition]
    const choiceMatch = trimmed.match(/^CHOICE:\s+"(.+)"\s*->\s*(\w+)(?:\s*\[(\w+)\])?$/);
    if (choiceMatch && currentDialog) {
      const currentNode = Object.values(currentDialog.nodes).pop();
      if (currentNode) {
        currentNode.choices.push({
          text: choiceMatch[1],
          next: choiceMatch[2],
          condition: choiceMatch[3] || null
        });
      }
      continue;
    }
  }
  
  // Convert Sets to Arrays for JSON
  script.vocabulary.nouns = Array.from(script.vocabulary.nouns);
  script.vocabulary.verbs = ['go', 'look', 'take', 'use', 'talk', 'ask', 'give', 'open', 'close', 'push', 'pull'];
  script.vocabulary.adjectives = ['big', 'small', 'red', 'old', 'heavy'];
  
  return script;
}

async function findScripts() {
  const scripts = [];
  
  try {
    const files = await fs.readdir(SCRIPTS_DIR);
    return files.filter(f => f.endsWith('.pq'));
  } catch (e) {
    console.log('No scripts directory yet, creating...');
    await fs.mkdir(SCRIPTS_DIR, { recursive: true });
    return [];
  }
}

async function main() {
  console.log('📜 Philosophy Quest - Script Compiler\n');
  
  const scriptFiles = await findScripts();
  
  if (scriptFiles.length === 0) {
    console.log('No .pq scripts found. Add script files to src/scripts/');
    console.log('\nExample script.pq:');
    console.log(`
SCENE: stadium "The State University Stadium"
OBJECT: trophy "National Championship Trophy" [static]
OBJECT: football "Lucky Football" [inventory]
ACTOR: coach "Coach Williams"
EXIT: north -> locker_room

DIALOG: coach
NODE: start "You need to pass Philosophy 501 or you're benched."
CHOICE: "I'll study hard!" -> study
CHOICE: "Can I just wing it?" -> death
    `);
    return;
  }
  
  console.log(`Found ${scriptFiles.length} script(s)\n`);
  
  const compiled = [];
  
  for (const file of scriptFiles) {
    console.log(`Compiling: ${file}`);
    const content = await fs.readFile(path.join(SCRIPTS_DIR, file), 'utf8');
    const script = parseScript(content, file);
    compiled.push(script);
  }
  
  await fs.mkdir(OUTPUT_DIR, { recursive: true });
  
  // Write individual files
  for (const script of compiled) {
    const outputName = script.filename.replace('.pq', '.json');
    await fs.writeFile(
      path.join(OUTPUT_DIR, outputName),
      JSON.stringify(script, null, 2)
    );
  }
  
  // Write master manifest
  const manifest = {
    version: '1.0',
    generated: new Date().toISOString(),
    scripts: compiled.map(s => ({
      filename: s.filename,
      scenes: s.scenes.length,
      dialogs: s.dialogs.length
    }))
  };
  
  await fs.writeFile(
    path.join(OUTPUT_DIR, 'manifest.json'),
    JSON.stringify(manifest, null, 2)
  );
  
  console.log(`\n✅ Compiled ${compiled.length} scripts`);
  console.log(`📄 Output: build/scripts/`);
}

main().catch(console.error);
