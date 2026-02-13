# Philosophy Quest

> A Sierra Online Style Adventure Game

![Philosophy Quest](docs/images/title-screen.png)

## The Pitch

**Brock Thunderstone**, star quarterback for the Fighting Philosophers, has a problem:
- National Championship game: **Saturday**
- NCAA discovered his philosophy credits are "creative"
- Must earn a **Master's degree in Philosophy** by game day

A weekend crash course through Plato's Cave, the Trolley Problem, and Nietzsche's Gym.

## Game Style

- **Parser Interface**: "Ask Socrates about virtue"
- **16-bit EGA Aesthetic**: Retro pixel art
- **Point & Click**: Sierra-style interaction
- **Branching Narrative**: 4 endings based on choices

## Tech Stack

```
Engine: Custom JavaScript (Canvas/WebGL)
Renderer: PixiJS or Three.js (2.5D scenes)
Audio: Web Audio API + MIDI.js
Parser: Custom NLP (simple pattern matching)
Build: Vite + TypeScript
Deploy: GitHub Pages / itch.io
```

## Asset Pipelines

### 1. Sprite Pipeline (`assets/sprites/`)
```
Source: Aseprite / Photoshop
Format: PNG (indexed color, 16-64 colors)
Size: 32x32 to 128x128 per sprite
Animation: Aseprite tag export → JSON
Build: `npm run build:sprites`
```

### 2. Background Pipeline (`assets/scenes/`)
```
Source: Photoshop / Procreate
Format: PNG (640x480, EGA palette)
Parallax: Layered PSD → separate PNGs
Build: `npm run build:scenes`
```

### 3. Audio Pipeline (`assets/audio/`)
```
Music: Logic Pro / Ableton → MIDI → SoundFont2
SFX: Bfxr / sfxr → WAV → OGG
Voice: ElevenLabs (optional)
Build: `npm run build:audio`
```

### 4. Script Pipeline (`src/scripts/`)
```
Source: Custom DSL (.pq files)
Parser: PEG.js grammar
Build: `npm run build:scripts`
```

## Project Structure

```
philosophy-quest/
├── assets/
│   ├── sprites/          # Character sprites, animations
│   ├── scenes/           # Backgrounds, parallax layers
│   ├── audio/
│   │   ├── music/        # MIDI + SoundFont2
│   │   └── sfx/          # Sound effects
│   └── fonts/            # EGA/VGA bitmap fonts
├── src/
│   ├── engine/           # Core game engine
│   │   ├── parser.ts     # Text parser
│   │   ├── scene.ts      # Scene manager
│   │   ├── inventory.ts  # Inventory system
│   │   └── dialog.ts     # Dialog tree
│   ├── game/
│   │   ├── acts/         # Act I, II, III
│   │   ├── characters/   # Character definitions
│   │   ├── items/        # Inventory items
│   │   └── puzzles/      # Puzzle logic
│   └── main.ts
├── docs/
│   ├── GDD.md            # Full game design
│   ├── screenplay.md     # Dialog script
│   └── art-bible.md      # Visual style guide
├── tools/
│   ├── sprite-packer/    # Sprite atlas generator
│   ├── script-compiler/  # DSL → JSON compiler
│   └── scene-editor/     # Visual scene editor
├── build/
└── dist/                 # Deployable game
```

## Quick Start

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build

# Deploy to GitHub Pages
npm run deploy
```

## Development Roadmap

### Milestone 1: Engine (Week 1-2)
- [ ] Parser working (nouns, verbs, prepositions)
- [ ] Scene transitions
- [ ] Inventory system
- [ ] Dialog trees

### Milestone 2: Act I (Week 3)
- [ ] Stadium intro
- [ ] Dorm room
- [ ] Campus open world
- [ ] Find Philosophy Building puzzle

### Milestone 3: Act II (Week 4-5)
- [ ] Plato's Cave
- [ ] Trolley Problem
- [ ] Nietzsche's Gym
- [ ] Socrates Coffee Shop

### Milestone 4: Act III (Week 6)
- [ ] Thesis defense
- [ ] All 4 endings
- [ ] Death scenes

### Milestone 5: Polish (Week 7)
- [ ] Music & SFX
- [ ] Animation polish
- [ ] Parser synonyms
- [ ] Easter eggs

## License

MIT - Because philosophy should be free.

---

*"The unexamined game is not worth playing."* — Socrates, probably
