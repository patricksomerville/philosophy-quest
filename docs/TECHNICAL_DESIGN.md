# Philosophy Quest: Technical Design Document

**Architecture, Systems & Implementation**

---

## TECH STACK

### Core Technologies
```
Engine:       TypeScript (ES2022+)
Renderer:     HTML5 Canvas 2D / PixiJS (optional upgrade)
Audio:        Web Audio API + Howler.js
Parser:       Custom NLP (regex-based with state machine)
Build:        Vite 5.x
Test:         Vitest
Deploy:       GitHub Pages / itch.io
```

### Dependencies
```json
{
  "dependencies": {
    "howler": "^2.2.3",
    "pixi.js": "^7.3.2 (optional)"
  },
  "devDependencies": {
    "typescript": "^5.3",
    "vite": "^5.0",
    "vitest": "^1.0"
  }
}
```

---

## ARCHITECTURE OVERVIEW

### System Diagram
```
┌─────────────────────────────────────────────────────────────┐
│                        GAME ENGINE                          │
├─────────────┬─────────────┬─────────────┬───────────────────┤
│   SCENE     │   PARSER    │  INVENTORY  │     DIALOG        │
│   SYSTEM    │   SYSTEM    │   SYSTEM    │     SYSTEM        │
├─────────────┴─────────────┴─────────────┴───────────────────┤
│                      GAME STATE                             │
│  (current scene, flags, inventory, relationship scores)    │
├─────────────────────────────────────────────────────────────┤
│                     RENDERER                                │
│         (Canvas 2D / PixiJS abstraction)                   │
├─────────────────────────────────────────────────────────────┤
│                      INPUT                                  │
│         (Keyboard, Mouse, Touch, Parser)                   │
├─────────────────────────────────────────────────────────────┤
│                      AUDIO                                  │
│              (Music, SFX, Voice)                           │
└─────────────────────────────────────────────────────────────┘
```

---

## CORE SYSTEMS

### 1. Scene System

**File**: `src/engine/scene.ts`

#### Data Structure
```typescript
interface Scene {
  id: string;
  description: string;
  background?: string;  // Asset key
  objects: SceneObject[];
  actors: SceneActor[];
  exits: Record<string, string>;  // direction -> sceneId
  onEnter?: () => void;
  onExit?: () => void;
}

interface SceneObject {
  id: string;
  description: string;
  state?: string;  // for stateful objects
  synonyms?: string[];
  sprite?: string;
  interactive?: boolean;
  onInteract?: (verb: string) => void;
}

interface SceneActor {
  id: string;
  description: string;
  sprite?: string;
  dialog?: string;  // Dialog tree ID
  position?: { x: number; y: number };
}
```

#### Scene Manager
```typescript
class SceneManager {
  private scenes: Map<string, Scene>;
  private currentScene: string;
  
  loadScene(scene: Scene): void;
  setCurrentScene(sceneId: string): void;
  getCurrentScene(): Scene;
  
  // Navigation
  hasExit(direction: string): boolean;
  getExit(direction: string): string | undefined;
  
  // Object interaction
  findObject(name: string): SceneObject | undefined;
  findActor(name: string): SceneActor | undefined;
  removeObject(objectId: string): void;
  addObject(object: SceneObject): void;
}
```

#### Scene Loading Strategy
- **Eager**: All scenes loaded at start (fast transitions, higher memory)
- **Lazy**: Load on demand (slower transitions, lower memory)
- **Current**: Eager (scenes are small JSON)

---

### 2. Parser System

**File**: `src/engine/parser.ts`

#### Vocabulary
```typescript
const VERBS = {
  // Core
  LOOK: ['look', 'l', 'examine', 'x', 'check'],
  TAKE: ['take', 'get', 'pick up', 'grab'],
  USE: ['use', 'apply'],
  TALK: ['talk', 'speak', 'ask', 'tell'],
  GO: ['go', 'move', 'walk', 'north', 'south', 'east', 'west', 'up', 'down'],
  INVENTORY: ['inventory', 'i', 'inv', 'items'],
  
  // Adventure
  OPEN: ['open', 'unlock'],
  CLOSE: ['close', 'shut'],
  PUSH: ['push', 'press'],
  PULL: ['pull'],
  READ: ['read'],
  GIVE: ['give', 'hand'],
  
  // Philosophy-specific
  PONDER: ['ponder', 'think about', 'consider'],
  DEBATE: ['debate', 'argue'],
  REFUTE: ['refute', 'contradict'],
  ASSERT: ['assert', 'claim'],
  
  // Brad-specific
  CHUG: ['chug', 'drink', 'consume'],
  FLEX: ['flex', 'show off'],
  SPIKE: ['spike', 'throw'],
  HUDDLE: ['huddle', 'team up'],
  
  // Meta
  HELP: ['help', 'hint', 'clue'],
  SAVE: ['save', 'save game'],
  LOAD: ['load', 'load game'],
  QUIT: ['quit', 'exit']
};

const PREPOSITIONS = ['at', 'to', 'with', 'on', 'in', 'from', 'about'];
```

#### Parser Pipeline
```
Raw Input → Tokenize → Classify → Validate → Execute
    ↓           ↓          ↓          ↓         ↓
"look book"  [LOOK,  Verb:    Context:   Action:
             BOOK]   LOOK     Book in    showDesc()
                                scene?
```

#### Parser Implementation
```typescript
class Parser {
  private vocabulary: Vocabulary;
  private context: GameContext;
  
  parse(input: string): Command {
    const tokens = this.tokenize(input.toLowerCase());
    const verb = this.identifyVerb(tokens);
    const nouns = this.identifyNouns(tokens);
    const preposition = this.identifyPreposition(tokens);
    
    return {
      verb,
      subject: nouns[0],
      object: nouns[1],
      preposition,
      raw: input
    };
  }
  
  execute(command: Command): string {
    // Validate
    if (!this.isValid(command)) {
      return this.getRandomResponse('unknown');
    }
    
    // Execute via handler
    const handler = this.getHandler(command.verb);
    return handler(command);
  }
  
  // Smart suggestions for incomplete commands
  getSuggestions(partial: string): string[];
}
```

#### Command Handlers
```typescript
const handlers: Record<Verb, CommandHandler> = {
  LOOK: (cmd) => {
    if (!cmd.subject) return sceneManager.getCurrentScene().description;
    const obj = sceneManager.findObject(cmd.subject);
    return obj?.description || "You don't see that here.";
  },
  
  TAKE: (cmd) => {
    const obj = sceneManager.findObject(cmd.subject);
    if (!obj) return "You can't take that.";
    if (obj.interactive === false) return "You can't take that.";
    
    inventory.add({ id: obj.id, name: obj.id, description: obj.description });
    sceneManager.removeObject(obj.id);
    return `You take the ${obj.id}.`;
  },
  
  TALK: (cmd) => {
    const actor = sceneManager.findActor(cmd.subject);
    if (!actor) return "There's no one here by that name.";
    if (!actor.dialog) return "They don't seem interested in talking.";
    
    dialogSystem.startDialog(actor.dialog);
    return null; // Dialog system takes over
  },
  
  // ... etc
};
```

---

### 3. Inventory System

**File**: `src/engine/inventory.ts`

```typescript
interface InventoryItem {
  id: string;
  name: string;
  description: string;
  quantity?: number;
  usable?: boolean;
  combinable?: boolean;
  sprite?: string;
}

class Inventory {
  private items: Map<string, InventoryItem>;
  
  add(item: InventoryItem): boolean;
  remove(itemId: string): boolean;
  has(itemId: string): boolean;
  get(itemId: string): InventoryItem | undefined;
  getAll(): InventoryItem[];
  
  use(itemId: string, target?: string): boolean;
  combine(item1: string, item2: string): InventoryItem | null;
  
  // Serialization for save/load
  serialize(): string;
  deserialize(data: string): void;
}
```

---

### 4. Dialog System

**File**: `src/engine/dialog.ts`

```typescript
interface DialogChoice {
  text: string;
  next: string;
  condition?: string;  // Flag check
  action?: string;     // Set flag, modify inventory, etc.
  romancePoints?: number;
}

interface DialogNode {
  id: string;
  text: string;
  choices: DialogChoice[];
  sprite?: string;  // Character expression
  sound?: string;   // Voice line or SFX
}

interface DialogTree {
  id: string;
  actor: string;
  root: string;
  nodes: Record<string, DialogNode>;
}

class DialogSystem {
  private trees: Map<string, DialogTree>;
  private currentTree: string | null;
  private currentNode: string | null;
  private history: string[];
  
  loadDialog(tree: DialogTree): void;
  startDialog(treeId: string): DialogNode | null;
  choose(choiceIndex: number): DialogNode | null;
  getCurrentNode(): DialogNode | null;
  endDialog(): void;
  
  // For parser integration
  isDialogActive(): boolean;
  getPrompt(): string;  // "What do you say?"
}
```

---

### 5. Game State

**File**: `src/engine/state.ts`

```typescript
interface GameState {
  // Progress
  currentScene: string;
  flags: Record<string, boolean>;
  
  // Stats
  philosophyScore: number;  // Understanding level
  romanceScore: number;     // Alex relationship
  respectScore: number;     // Miller's opinion
  
  // Choices
  trolleyChoice?: 'lever' | 'no_lever' | 'brake';
  badges: string[];  // Utilitarian, Deontologist, etc.
  
  // Inventory
  inventory: InventoryItem[];
  
  // Death count (for fun)
  deaths: number;
  
  // Timestamp
  startTime: number;
  playTime: number;
}

class StateManager {
  private state: GameState;
  private autosaveInterval: number;
  
  setFlag(key: string, value: boolean): void;
  getFlag(key: string): boolean;
  
  addScore(type: 'philosophy' | 'romance' | 'respect', amount: number): void;
  
  save(slot?: number): string;
  load(data: string): boolean;
  autosave(): void;
  
  // For Tecmo Bowl epilogue
  getCompletionStats(): CompletionStats;
}
```

---

## RENDERING

### Canvas 2D Approach (Current)

```typescript
class Renderer {
  private canvas: HTMLCanvasElement;
  private ctx: CanvasRenderingContext2D;
  
  // Layering
  private layers = {
    background: new Layer(),
    objects: new Layer(),
    actors: new Layer(),
    ui: new Layer()
  };
  
  render(scene: Scene): void {
    // Clear
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
    
    // Background
    this.drawBackground(scene.background);
    
    // Objects
    scene.objects.forEach(obj => this.drawObject(obj));
    
    // Actors
    scene.actors.forEach(actor => this.drawActor(actor));
    
    // UI (parser input, inventory button)
    this.drawUI();
  }
  
  drawBackground(assetKey: string): void {
    const img = this.assetLoader.getImage(assetKey);
    this.ctx.drawImage(img, 0, 0, this.canvas.width, this.canvas.height);
  }
  
  drawObject(obj: SceneObject): void {
    if (!obj.sprite) return;
    const img = this.assetLoader.getImage(obj.sprite);
    // Draw with highlight if interactive and hovered
  }
}
```

### Optional PixiJS Upgrade

For better performance, particle effects, shaders:
```typescript
// Future upgrade path
import { Application, Sprite, Container } from 'pixi.js';

class PixiRenderer {
  private app: Application;
  private sceneContainer: Container;
  
  // Better performance for:
  // - Particle effects (coffee steam, shadow flicker)
  // - Shaders (cave lighting, flashbacks)
  // - Smooth animations
}
```

---

## AUDIO SYSTEM

### Audio Manager

```typescript
class AudioManager {
  private music: Howl;
  private sfx: Record<string, Howl>;
  private currentTrack: string;
  
  loadMusic(trackId: string, url: string): void;
  playMusic(trackId: string, fadeDuration?: number): void;
  stopMusic(fadeDuration?: number): void;
  
  loadSfx(sfxId: string, url: string): void;
  playSfx(sfxId: string): void;
  
  setMusicVolume(volume: number): void;
  setSfxVolume(volume: number): void;
  
  // Ambient layers
  playAmbient(ambientId: string): void;
  stopAmbient(): void;
}
```

### Music Triggers
```typescript
// Scene-based
sceneManager.on('sceneChange', (scene) => {
  audioManager.playMusic(scene.musicTrack);
});

// Event-based
dialogSystem.on('nodeChange', (node) => {
  if (node.sound) {
    audioManager.playSfx(node.sound);
  }
});

// Death scenes
game.on('death', () => {
  audioManager.playSfx('sfx_death');
  audioManager.stopMusic(0);  // Immediate
});
```

---

## INPUT HANDLING

### Input Manager

```typescript
class InputManager {
  private modes = ['parser', 'dialog', 'menu'];
  private currentMode: string;
  
  // Keyboard (parser focus)
  onKeyDown(callback: (key: string) => void): void;
  
  // Mouse (point-and-click fallback)
  onClick(callback: (x, y) => void): void;
  onHover(callback: (x, y) => void): void;
  
  // Touch (mobile)
  onTouch(callback: (x, y) => void): void;
  
  // Mode switching
  setMode(mode: 'parser' | 'dialog' | 'menu'): void;
}
```

### Parser Input
```typescript
class ParserInput {
  private inputElement: HTMLInputElement;
  private history: string[];
  private historyIndex: number;
  
  // Submit on Enter
  onSubmit(callback: (input: string) => void): void;
  
  // Arrow key history navigation
  onHistoryUp(): string;
  onHistoryDown(): string;
  
  // Tab completion
  getSuggestions(partial: string): string[];
}
```

---

## SAVE SYSTEM

### Save Data Format

```typescript
interface SaveData {
  version: string;  // For migration
  timestamp: number;
  
  // State
  state: GameState;
  
  // Current position
  currentScene: string;
  currentDialog?: {
    treeId: string;
    nodeId: string;
  };
  
  // Play time
  totalPlayTime: number;
}

class SaveManager {
  // LocalStorage for web
  save(slot: number, data: SaveData): void;
  load(slot: number): SaveData | null;
  delete(slot: number): void;
  list(): SaveMetadata[];
  
  // Export/Import for sharing
  exportToString(data: SaveData): string;
  importFromString(str: string): SaveData | null;
  
  // Autosave
  enableAutosave(intervalMs: number): void;
  disableAutosave(): void;
}
```

---

## ASSET PIPELINE

### Asset Loading

```typescript
class AssetLoader {
  private images: Map<string, HTMLImageElement>;
  private audio: Map<string, Howl>;
  private json: Map<string, any>;
  
  // Loading with progress
  async loadManifest(manifest: AssetManifest): Promise<void>;
  
  // Individual loading
  loadImage(key: string, url: string): Promise<HTMLImageElement>;
  loadAudio(key: string, url: string): Promise<Howl>;
  loadJson(key: string, url: string): Promise<any>;
  
  // Retrieval
  getImage(key: string): HTMLImageElement;
  getAudio(key: string): Howl;
  getJson(key: string): any;
  
  // Preloading scenes
  preloadScene(sceneId: string): Promise<void>;
}
```

### Asset Manifest Example
```json
{
  "images": {
    "char_brad": "assets/characters/char_brad.png",
    "background_frat": "assets/backgrounds/background_frat_party.png"
  },
  "audio": {
    "music_title": "assets/audio/music/title.mp3",
    "sfx_death": "assets/audio/sfx/death.mp3"
  },
  "data": {
    "scenes": "assets/data/scenes.json",
    "dialogs": "assets/data/dialogs.json"
  }
}
```

---

## DEBUGGING TOOLS

### Dev Mode Features
```typescript
if (import.meta.env.DEV) {
  // Scene teleport
  window.teleport = (sceneId: string) => sceneManager.setCurrentScene(sceneId);
  
  // Give items
  window.give = (itemId: string) => inventory.add({ id: itemId, name: itemId, description: '' });
  
  // Set flags
  window.flag = (key: string, value: boolean) => stateManager.setFlag(key, value);
  
  // Instant endings
  window.ending = (type: string) => game.jumpToEnding(type);
}
```

### Debug Overlay
- FPS counter
- Current scene ID
- Active flags
- Inventory contents
- Dialog node

---

## PERFORMANCE TARGETS

### Metrics
- **Load Time**: < 3 seconds to title screen
- **Scene Transition**: < 500ms
- **Parser Response**: < 50ms
- **Frame Rate**: 60 FPS (Canvas 2D)
- **Memory**: < 100MB heap

### Optimizations
- Texture atlases for sprites
- Lazy loading for backgrounds
- Audio compression (OGG/WebM)
- JSON minification
- Tree-shaking unused code

---

## DEPLOYMENT

### Build Configuration
```javascript
// vite.config.ts
export default {
  build: {
    target: 'es2022',
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'engine': ['./src/engine/index.ts'],
          'content': ['./src/content/gameContent.ts']
        }
      }
    }
  }
}
```

### GitHub Pages
```yaml
# .github/workflows/deploy.yml
name: Deploy to GitHub Pages
on:
  push:
    branches: [main]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
      - run: npm ci
      - run: npm run build
      - uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

---

## TESTING STRATEGY

### Unit Tests (Vitest)
```typescript
// Parser tests
describe('Parser', () => {
  it('should parse LOOK command', () => {
    const result = parser.parse('look book');
    expect(result.verb).toBe('LOOK');
    expect(result.subject).toBe('book');
  });
  
  it('should handle synonyms', () => {
    const result1 = parser.parse('take book');
    const result2 = parser.parse('get book');
    expect(result1.verb).toBe(result2.verb);
  });
});

// Inventory tests
describe('Inventory', () => {
  it('should stack items with quantity', () => {
    inventory.add({ id: 'cup', name: 'Cup', quantity: 1 });
    inventory.add({ id: 'cup', name: 'Cup', quantity: 1 });
    expect(inventory.get('cup')?.quantity).toBe(2);
  });
});
```

### Integration Tests
- Scene transitions
- Dialog trees
- Puzzle solutions
- Save/load cycle

### E2E Tests (Playwright)
- Complete playthrough
- All endings
- Parser edge cases
- Mobile responsiveness

---

## SECURITY

### Considerations
- No server-side state (all client-side)
- Save data validation on load
- No sensitive data in saves
- XSS prevention (innerHTML vs textContent)

---

*"Good code is like good philosophy: clear, logical, and elegant."*
