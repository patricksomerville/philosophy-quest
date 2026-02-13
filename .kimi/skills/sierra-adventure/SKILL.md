---
name: sierra-adventure
description: Sierra Online adventure game patterns for Philosophy Quest - parser interface, death scenes, dialog trees, inventory puzzles, and retro game aesthetics. Use when implementing Sierra-style adventure mechanics, writing parser responses, designing death scenes, or creating 80s/90s PC game atmosphere.
---

# Sierra Adventure Game Patterns

## Parser Interface Design

### Command Structure
```
> [VERB] [NOUN] [PREPOSITION] [TARGET]

Examples:
> LOOK
> TAKE FOOTBALL
> USE KEY ON DOOR
> ASK COACH ABOUT THESIS
> GIVE PROTEIN TO TA
```

### Response Style
**Good**:
```
> LOOK
The State University Stadium towers above you. Championship banners flutter in the wind. To the north, you see the locker room entrance.

You see: a trophy, your lucky football
Exits: NORTH
```

**Bad** (too terse):
```
> LOOK
Stadium. North.
```

### Error Messages (Informative + Character)
```typescript
// Object not present
"You don't see that here. Have you been drinking energy drinks again?"

// Can't take
"That's bolted to the floor. And to your destiny."

// Wrong verb
"You can't do that. Yet. Philosophy teaches patience."

// Locked door
"It's locked. Like your understanding of Hegel."
```

## Death Scenes

### Structure
1. **What happened** - Clear description
2. **Why** - The mistake
3. **GAME OVER** - Dramatic
4. **Hint** - How to avoid next time

### Example Deaths
```typescript
deathKantLecture() {
  this.print('You fell asleep during Dr. Kant\'s lecture on categorical imperatives.');
  this.print('In your dream, time became a flat circle. You are still sleeping.');
  this.print('You will always be sleeping. The lecture never ends.');
  this.print('');
  this.print('*** GAME OVER ***', 'death');
  this.print('');
  this.print('Hint: Energy drinks are in your dorm room mini-fridge.');
}

deathTrolleyProblem() {
  this.print('You hesitated too long at the trolley switch.');
  this.print('The trolley chose for you. Utilitarian math is unforgiving.');
  this.print('');
  this.print('*** GAME OVER ***', 'death');
  this.print('');
  this.print('Hint: Sometimes the best choice is the one you make quickly.');
}

deathAbyss() {
  this.print('You stared into the abyss.');
  this.print('The abyss stared back.');
  this.print('You blinked.');
  this.print('');
  this.print('*** GAME OVER ***', 'death');
  this.print('');
  this.print('Hint: Nietzsche warned you about this.');
}
```

## Dialog Trees

### Socratic Method (Coffee Shop)
```typescript
const socratesDialog: DialogTree = {
  id: 'socrates-coffee',
  actor: 'socrates',
  root: 'order',
  nodes: {
    'order': {
      id: 'order',
      text: 'Welcome to The Examined Cup. What brings you here?',
      choices: [
        { text: 'I want a coffee.', next: 'what-is-want' },
        { text: 'I need caffeine.', next: 'what-is-need' },
        { text: 'Just give me coffee!', next: 'impatience' }
      ]
    },
    'what-is-want': {
      id: 'what-is-want',
      text: 'What is "want"? Is it desire? Is it lack? Before you want coffee, you must understand wanting.',
      choices: [
        { text: 'I... want to understand?', next: 'progress' },
        { text: 'Just the coffee please.', next: 'order' }
      ]
    },
    'progress': {
      id: 'progress',
      text: 'Ah! Now you approach wisdom. What size would you like your wisdom?',
      choices: [
        { text: 'Small?', next: 'small-wisdom' },
        { text: 'Wait, you mean coffee?', next: 'finally' }
      ]
    },
    'finally': {
      id: 'finally',
      text: 'One large coffee. That will be $4.50.',
      choices: [
        { text: 'Finally!', next: 'end', action: 'give:energy-drink' }
      ]
    }
  }
};
```

## Inventory Puzzles

### Multi-Step Puzzle Example (Plato's Cave)
```typescript
// Step 1: Find torch
// Step 2: Light torch (at fire)
// Step 3: Use torch on wall shadows
// Step 4: Shadows reveal hidden exit

puzzleSolution: {
  check: (inventory, scene) => {
    if (inventory.has('lit-torch')) {
      scene.revealExit('secret-passage');
      return 'The torchlight reveals the shadows are merely projections. Behind them: an exit!';
    }
    return null;
  }
}
```

### Item Combinations
```typescript
// Combine protein-powder + water-bottle = energy-shake
combine(item1: 'protein-powder', item2: 'water-bottle') {
  return {
    id: 'energy-shake',
    name: 'Energy Shake',
    description: 'For philosophers who lift. And think.',
    effect: () => { player.stamina += 20; }
  };
}
```

## Visual Aesthetics

### EGA Color Usage
```
Backgrounds: Dark colors (black, dark blue, dark green)
Characters: Bright primaries (red, blue, green, yellow)
UI: White text on black
Highlights: Yellow for important
Danger: Red for death, warnings
```

### Screen Layout
```
┌─────────────────────────────┐
│                             │
│    [SCENE VISUAL]           │
│    640x360                   │
│                             │
├─────────────────────────────┤
│ > parser input              │  <- Green text
│                             │
│ Game output text...         │  <- Green on black
│ Exits: NORTH, SOUTH         │
│                             │
└─────────────────────────────┘
```

## Parser Synonyms

Always support multiple wordings:
```typescript
synonyms: {
  'go': ['walk', 'run', 'move', 'head'],
  'take': ['get', 'grab', 'pick up', 'collect'],
  'look': ['examine', 'inspect', 'check', 'l'],
  'talk': ['ask', 'speak', 'chat', 'converse']
}
```

## Easter Eggs

### Hidden Interactions
```typescript
// Click trophy 50 times
if (trophyClicks === 50) {
  this.print('You have won the Championship of Clicking!');
  this.print('Your finger is now stronger than your philosophy.');
  this.addToInventory('carpal-tunnel-brace');
}

// Look under bed in dorm
if (command === 'look under bed') {
  this.print('You find Chad\'s embarrassing thesis draft:');
  this.print('"The Phenomenology of Dating Apps: A Husserlian Analysis of Swiping"');
}

// Use football on committee
if (command === 'use football on committee') {
  this.print('You throw a perfect spiral at Dr. Kant.');
  this.print('He catches it. His categorical imperative does not include football.');
  this.print('The committee is not impressed.');
}
```

## Testing Adventure Games

1. **Try every verb on every object**
2. **Test all exit directions**
3. **Check inventory combinations**
4. **Verify dialog paths**
5. **Trigger all deaths**
6. **Find soft locks** (unwinnable states)

## Sierra Homages

### King's Quest
- Fairytale logic applies
- Death is frequent but educational
- Puns everywhere

### Space Quest
- Sci-fi death messages
- Fourth-wall breaking
- Pop culture references

### Police Quest
- Procedure matters
- Documentation required
- Realism + absurdity

### Leisure Suit Larry
- Adult humor ( Philosophy Quest: philosophical humor )
- Social awkwardness
- Inventory-based seduction attempts ( Philosophy Quest: knowledge-based persuasion )
