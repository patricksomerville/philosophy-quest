/**
 * Core Game Engine
 * Coordinates all systems
 */

import { Parser } from './parser';
import { SceneManager } from './scene';
import { Inventory } from './inventory';
import { DialogSystem } from './dialog';

export interface GameConfig {
  startScene: string;
  debug?: boolean;
}

export class GameEngine {
  parser: Parser;
  scenes: SceneManager;
  inventory: Inventory;
  dialog: DialogSystem;
  config: GameConfig;

  private flags: Map<string, boolean> = new Map();
  private variables: Map<string, any> = new Map();

  constructor(config: GameConfig) {
    this.config = config;
    this.parser = new Parser();
    this.scenes = new SceneManager();
    this.inventory = new Inventory();
    this.dialog = new DialogSystem();
  }

  // Flag system for game state
  setFlag(key: string, value: boolean) {
    this.flags.set(key, value);
  }

  getFlag(key: string): boolean {
    return this.flags.get(key) || false;
  }

  toggleFlag(key: string) {
    this.flags.set(key, !this.getFlag(key));
  }

  // Variable system
  setVar(key: string, value: any) {
    this.variables.set(key, value);
  }

  getVar(key: string): any {
    return this.variables.get(key);
  }

  // Check conditions
  checkCondition(condition: string): boolean {
    // Parse condition strings like "has:item_id", "flag:flag_name"
    if (condition.startsWith('has:')) {
      const item = condition.slice(4);
      return this.inventory.has(item);
    }
    
    if (condition.startsWith('flag:')) {
      const flag = condition.slice(5);
      return this.getFlag(flag);
    }
    
    return false;
  }
}
