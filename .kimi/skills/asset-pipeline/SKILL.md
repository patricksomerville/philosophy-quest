---
name: asset-pipeline
description: Asset pipelines for Philosophy Quest - sprite packing, scene building, audio compression, and script compilation. Use when processing game assets, converting art to EGA palette, building sprite atlases, or compiling dialog scripts.
---

# Asset Pipelines for Philosophy Quest

## Sprite Pipeline (`tools/sprite-packer/`)

### Input
Place PNG files in `assets/sprites/{category}/`:
```
assets/sprites/
├── characters/
│   ├── brock-idle.png
│   ├── brock-walk.png
│   └── coach-williams.png
├── items/
│   ├── trophy.png
│   ├── football.png
│   └── philosophy-book.png
└── ui/
    ├── parser-bg.png
    └── button.png
```

### Processing
```bash
npm run build:sprites
```

**What it does**:
1. Converts to indexed color (16 colors)
2. Applies EGA palette optimization
3. Generates sprite manifest JSON
4. Outputs to `build/sprites/`

### Output
```json
// build/sprites/sprites.json
{
  "version": "1.0",
  "sprites": [
    {
      "name": "brock-idle",
      "category": "characters",
      "width": 64,
      "height": 128,
      "path": "sprites/characters/brock-idle.png"
    }
  ]
}
```

## Scene Pipeline (`tools/scene-editor/`)

### Input
Backgrounds in `assets/scenes/`:
- Resolution: 640x480
- Format: PNG with EGA palette
- Naming: `{scene-id}-bg.png`

### Build
```bash
npm run build:scenes
```

## Audio Pipeline (`tools/audio-compress/`)

### Music
```
assets/audio/music/
├── main-theme.mid
├── stadium-organ.mid
├── plato-cave.mid
├── trolley-problem.mid
└── thesis-defense.mid
```

### SFX
```
assets/audio/sfx/
├── pickup.wav
├── error.wav
├── death.wav
├── dialog-advance.wav
└── scene-transition.wav
```

### Build
```bash
npm run build:audio
```

**Converts**: MIDI + SoundFont2, WAV → OGG

## Script Pipeline (`tools/script-compiler/`)

### Script DSL (.pq files)
Create in `src/scripts/`:

```pq
# stadium.pq

SCENE: stadium "The State University Stadium"
OBJECT: trophy "The National Championship trophy. Heavy."
OBJECT: football "Your lucky football."
ACTOR: coach "Coach Williams. He has news."
EXIT: north -> locker_room

DIALOG: coach
NODE: start "Brock, we have a problem. NCAA says your philosophy credits are... creative."
CHOICE: "I'll study hard!" -> study
CHOICE: "Can I wing it?" -> death

NODE: study "Good. The Philosophy Building is behind Humanities. Talk to Dr. Shadows."
CHOICE: "Got it, Coach." -> end

NODE: death "You can't wing a philosophy degree, Brock."
ACTION: die:thesis-wing-it
```

### Build
```bash
npm run build:scripts
```

### Output
```json
// build/scripts/stadium.json
{
  "scenes": [...],
  "dialogs": [...],
  "vocabulary": {
    "nouns": ["trophy", "football", "coach"],
    "verbs": ["go", "look", "take"]
  }
}
```

## EGA Palette Reference

```css
:root {
  --ega-black: #000000;
  --ega-blue: #0000aa;
  --ega-green: #00aa00;
  --ega-cyan: #00aaaa;
  --ega-red: #aa0000;
  --ega-magenta: #aa00aa;
  --ega-brown: #aa5500;
  --ega-light-gray: #aaaaaa;
  --ega-dark-gray: #555555;
  --ega-light-blue: #5555ff;
  --ega-light-green: #55ff55;
  --ega-light-cyan: #55ffff;
  --ega-light-red: #ff5555;
  --ega-light-magenta: #ff55ff;
  --ega-yellow: #ffff55;
  --ega-white: #ffffff;
}
```

## Full Build

```bash
npm run build
```

This runs all pipelines in sequence:
1. `build:sprites`
2. `build:scenes`
3. `build:audio`
4. `build:scripts`
5. Vite build

## Watch Mode

For development:
```bash
npm run dev:full
```

Watches assets and rebuilds automatically.

## Adding New Assets

1. **Add source file** to appropriate `assets/` directory
2. **Run pipeline** (`npm run build:{type}`)
3. **Reference in code** via `build/` output path
4. **Test in game**

## Common Issues

**Sprite colors look wrong**:
- Source image not using EGA palette
- Run through pipeline to quantize

**Script compilation fails**:
- Check syntax: `SCENE: id "Description"`
- Verify all quotes closed
- Check indentation (not required but helpful)

**Audio not playing**:
- Verify OGG format in browser
- Check Howler.js initialization
- Ensure CORS headers for web
