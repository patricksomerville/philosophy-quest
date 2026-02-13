---
name: game-dev
description: Game development workflows for Philosophy Quest - includes scene building, puzzle design, parser integration, and Sierra Online style adventure game patterns. Use when building adventure games, implementing parser commands, designing puzzles, or creating game scenes.
---

# Game Development for Philosophy Quest

Build Sierra Online style adventure games with parser interface.

## Core Patterns

### Parser Commands
Implement these verbs:
- `LOOK/L` - Describe current scene
- `GO [direction]` / `NORTH/SOUTH/EAST/WEST` - Move between scenes
- `TAKE/GET [item]` - Add to inventory
- `USE [item]` - Interact with object
- `TALK/ASK [person] [topic]` - Dialog system
- `INVENTORY/I` - Show carried items
- `HELP` - Show available commands

### Scene Structure
Each scene needs:
```typescript
interface Scene {
  id: string;
  description: string;      // Parser output
  background?: string;      // Visual background
  objects: SceneObject[];   // Interactable items
  actors: SceneActor[];     // NPCs
  exits: Record<string, string>; // direction -> sceneId
}
```

### Puzzle Design
**Good puzzles**:
1. Logical within game world
2. Multiple solutions (or clever single solution)
3. Death possible but fair
4. Hint system available

**Death scenes** (Sierra style):
- Humorous tone
- "GAME OVER" screen
- Player learns from failure
- Retry from nearby checkpoint

## Implementation Workflow

### 1. Create Scene
```typescript
// In src/game/scenes/stadium.ts
export const stadiumScene: Scene = {
  id: 'stadium',
  description: 'The State University Stadium towers above you. The Championship trophy glitters on a pedestal. Coach Williams paces nearby, looking concerned. Exits: NORTH to locker room.',
  objects: [
    { id: 'trophy', description: 'The National Championship trophy. Heavy.' },
    { id: 'football', description: 'Your lucky football.' }
  ],
  actors: [
    { id: 'coach', description: 'Coach Williams. He has news.' }
  ],
  exits: { north: 'locker_room' }
};
```

### 2. Add Parser Vocabulary
Add nouns and verbs to `src/engine/parser.ts`:
```typescript
this.vocabulary.nouns.push('trophy', 'football', 'coach');
```

### 3. Implement Interaction
In scene handler:
```typescript
if (parsed.verb === 'talk' && parsed.noun === 'coach') {
  this.print('Coach says: "Brock, we have a problem..."');
  this.startDialog('coach-intro');
}
```

### 4. Test Scene
Run dev server: `npm run dev`
Test commands:
```
> look
> take football
> talk coach
> go north
```

## Dialog Trees

```typescript
interface DialogNode {
  id: string;
  text: string;
  choices: {
    text: string;
    next: string;
    condition?: string;  // e.g., "has:item"
    action?: string;     // e.g., "setFlag:agreed"
  }[];
}
```

## Death System

**Example death**:
```typescript
death(id: 'thesis-wing-it') {
  this.print('You tried to wing the thesis defense.');
  this.print('Dr. Kant was not impressed by your categorical imperative ignorance.');
  this.print('');
  this.print('GAME OVER', 'death');
  this.print('');
  this.print('Tip: Study your notes before the defense.');
  this.showRetryButton();
}
```

## Asset Integration

### Sprites
Place in `assets/sprites/{category}/`:
```
assets/sprites/characters/brock-idle.png
assets/sprites/characters/coach-williams.png
assets/sprites/items/trophy.png
```

Build: `npm run build:sprites`

### Scenes
Place in `assets/scenes/`:
```
assets/scenes/stadium-bg.png
assets/scenes/dorm-bg.png
assets/scenes/cave-bg.png
```

Requirements:
- 640x480 resolution
- EGA palette (16 colors)
- Indexed PNG

## Testing

Use `develop-web-game` skill for automated testing:
```bash
node "$WEB_GAME_CLIENT" --url http://localhost:5173 \
  --actions '{"steps":[{"keys":"look"},{"keys":"take football"}]}'
```

## Common Issues

1. **Parser not recognizing command**
   - Check vocabulary array
   - Verify noun matches object ID
   - Check synonyms

2. **Scene transition not working**
   - Verify exit direction matches
   - Check scene ID exists
   - Ensure SceneManager loaded scene

3. **Dialog not starting**
   - Verify dialog tree loaded
   - Check actor ID matches
   - Ensure dialog system initialized
