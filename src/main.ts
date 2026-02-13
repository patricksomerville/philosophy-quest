/**
 * Philosophy Quest - Main Entry Point
 */

import { GameEngine } from './engine/engine';
import { Parser } from './engine/parser';
import { SceneManager } from './engine/scene';
import { Inventory } from './engine/inventory';
import { DialogSystem } from './engine/dialog';
import './styles/game.css';

// Game state
interface GameState {
  currentScene: string;
  inventory: string[];
  flags: Record<string, boolean>;
  karma: number;
  philosophy: number;
  stamina: number;
}

class PhilosophyQuest {
  private engine: GameEngine;
  private parser: Parser;
  private sceneManager: SceneManager;
  private inventory: Inventory;
  private dialog: DialogSystem;
  private state: GameState;
  private output: HTMLElement;
  private input: HTMLInputElement;

  constructor() {
    this.state = {
      currentScene: 'stadium',
      inventory: [],
      flags: {},
      karma: 50,
      philosophy: 0,
      stamina: 100
    };

    this.engine = new GameEngine();
    this.parser = new Parser();
    this.sceneManager = new SceneManager();
    this.inventory = new Inventory();
    this.dialog = new DialogSystem();

    this.output = document.getElementById('output-text')!;
    this.input = document.getElementById('parser-input') as HTMLInputElement;

    this.init();
  }

  private async init() {
    // Hide loading screen
    const loading = document.getElementById('loading');
    
    try {
      // Load game data
      await this.loadGameData();
      
      // Set up event listeners
      this.input.addEventListener('keydown', (e) => this.handleInput(e));
      
      // Show initial scene
      this.look();
      
      // Hide loading
      loading?.classList.add('hidden');
      this.input.focus();
      
    } catch (e) {
      console.error('Failed to initialize:', e);
      if (loading) {
        loading.innerHTML = `<h1>ERROR</h1><p>Failed to load game: ${e}</p>`;
      }
    }
  }

  private async loadGameData() {
    // Load compiled scripts
    try {
      const response = await fetch('/philosophy-quest/build/scripts/manifest.json');
      if (response.ok) {
        const manifest = await response.json();
        console.log('Loaded scripts:', manifest);
        // TODO: Load individual script files
      }
    } catch (e) {
      console.warn('No compiled scripts found, using fallback');
      this.loadFallbackData();
    }
  }

  private loadFallbackData() {
    // Fallback scenes until scripts are compiled
    this.sceneManager.loadScene({
      id: 'stadium',
      description: 'You are in the State University Stadium. The Championship trophy glitters on a pedestal. Coach Williams stands nearby, looking concerned. Exits: NORTH to locker room.',
      objects: [
        { id: 'trophy', description: 'The National Championship trophy. Heavy.' },
        { id: 'football', description: 'Your lucky football.' }
      ],
      actors: [
        { id: 'coach', description: 'Coach Williams. He has news.' }
      ],
      exits: { north: 'locker_room' }
    });
  }

  private handleInput(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      const command = this.input.value.trim();
      if (command) {
        this.processCommand(command);
        this.input.value = '';
      }
    }
  }

  private processCommand(command: string) {
    // Echo command
    this.print(`> ${command}`, 'player');

    // Parse command
    const parsed = this.parser.parse(command);
    
    // Execute
    switch (parsed.verb) {
      case 'look':
      case 'l':
        this.look();
        break;
      case 'go':
      case 'walk':
        this.go(parsed.noun);
        break;
      case 'take':
      case 'get':
        this.take(parsed.noun);
        break;
      case 'use':
        this.use(parsed.noun, parsed.target);
        break;
      case 'talk':
      case 'ask':
        this.talk(parsed.noun, parsed.target);
        break;
      case 'inventory':
      case 'i':
        this.showInventory();
        break;
      case 'help':
        this.showHelp();
        break;
      default:
        this.print("I don't understand that command. Try: LOOK, GO, TAKE, USE, TALK, INVENTORY");
    }
  }

  private look() {
    const scene = this.sceneManager.getCurrentScene();
    if (scene) {
      this.print(scene.description);
      
      if (scene.objects.length > 0) {
        this.print(`You see: ${scene.objects.map(o => o.id).join(', ')}`);
      }
      
      if (scene.actors.length > 0) {
        this.print(`Here: ${scene.actors.map(a => a.description).join(', ')}`);
      }
      
      if (Object.keys(scene.exits).length > 0) {
        this.print(`Exits: ${Object.keys(scene.exits).join(', ').toUpperCase()}`);
      }
    }
  }

  private go(direction: string) {
    const scene = this.sceneManager.getCurrentScene();
    if (scene && scene.exits[direction]) {
      this.state.currentScene = scene.exits[direction];
      this.sceneManager.setCurrentScene(this.state.currentScene);
      this.print(`You go ${direction}.`);
      this.look();
    } else {
      this.print("You can't go that way.");
    }
  }

  private take(item: string) {
    const scene = this.sceneManager.getCurrentScene();
    const obj = scene?.objects.find(o => o.id === item);
    
    if (obj) {
      this.state.inventory.push(item);
      this.print(`You take the ${item}.`);
    } else {
      this.print(`There's no ${item} here.`);
    }
  }

  private use(item: string, target?: string) {
    if (this.state.inventory.includes(item) || this.isInScene(item)) {
      this.print(`You use the ${item}${target ? ` on ${target}` : ''}.`);
      // TODO: Implement use logic
    } else {
      this.print(`You don't have ${item}.`);
    }
  }

  private talk(actor: string, topic?: string) {
    const scene = this.sceneManager.getCurrentScene();
    const person = scene?.actors.find(a => a.id === actor);
    
    if (person) {
      if (actor === 'coach' && !topic) {
        this.print('Coach Williams says: "Brock, we have a problem. NCAA says your philosophy credits are... creative. You need to pass Philosophy 501 by Saturday or you\'re benched for the championship."');
        this.print('He continues: "The Philosophy Building is behind the Humanities wing. Talk to Dr. Shadows in the basement. And Brock? Study hard."');
      } else {
        this.print(`${actor} doesn't have much to say about that.`);
      }
    } else {
      this.print(`There's no ${actor} here to talk to.`);
    }
  }

  private showInventory() {
    if (this.state.inventory.length === 0) {
      this.print('You are carrying nothing.');
    } else {
      this.print('You are carrying: ' + this.state.inventory.join(', '));
    }
  }

  private showHelp() {
    this.print('Commands: LOOK, GO [direction], TAKE [item], USE [item], TALK [person], INVENTORY');
    this.print('Example: GO NORTH, TAKE FOOTBALL, TALK COACH');
  }

  private isInScene(item: string): boolean {
    const scene = this.sceneManager.getCurrentScene();
    return scene?.objects.some(o => o.id === item) || false;
  }

  private print(text: string, type: 'game' | 'player' = 'game') {
    const div = document.createElement('div');
    div.textContent = text;
    div.style.marginBottom = '5px';
    
    if (type === 'player') {
      div.style.color = '#87ceeb';
    }
    
    this.output.appendChild(div);
    this.output.scrollTop = this.output.scrollHeight;
  }
}

// Start game
new PhilosophyQuest();
