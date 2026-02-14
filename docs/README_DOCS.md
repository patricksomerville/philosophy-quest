# Philosophy Quest: Documentation Master Index

**Your Complete Guide to the Documentation**

---

## 📚 DOCUMENTATION STRUCTURE

### 1. Core Design Documents

| Document | Purpose | Size |
|----------|---------|------|
| `AUTHORITATIVE_GDD.md` | **Merged game design bible** — canonical story, mechanics, scope | 13KB |
| `MERGED_DESIGN_STATUS.md` | Status tracker — what's done, what's needed | 4KB |
| `COMPLETE_GDD.md` | Original Feb 2026 GDD (reference only) | 45KB |

**Start here**: `AUTHORITATIVE_GDD.md` contains the merged vision.

---

### 2. Character & Story

| Document | Purpose | Size |
|----------|---------|------|
| `CHARACTER_PROFILES.md` | **Complete character arcs & relationships** | 17KB |
| `SCREENPLAY_BIBLE.md` | **Full dialogue & scene scripts** | 27KB |

**What's inside:**
- Character profiles (Brad, Alex, Miller, Dean, Four Philosophers, supporting cast)
- 3-act character arcs
- Romance track progression
- Every major conversation written
- All four endings scripted
- Easter egg dialogue
- Tecmo Bowl epilogue

---

### 3. Mechanics & Systems

| Document | Purpose | Size |
|----------|---------|------|
| `PUZZLE_DESIGN.md` | **All puzzles with solutions** | 15KB |
| `LOCATION_ASSET_INDEX.md` | **Location specs & asset inventory** | 19KB |

**What's inside:**
- 8 major puzzles with step-by-step solutions
- Difficulty progression
- Hint systems
- Failure states
- Consequences & branching
- Complete asset inventory (characters, backgrounds, items, audio)
- Production priorities
- File naming conventions

---

### 4. Technical & Art

| Document | Purpose | Size |
|----------|---------|------|
| `TECHNICAL_DESIGN.md` | **Architecture, systems, implementation** | 18KB |
| `ART_STYLE_GUIDE.md` | **Visual bible for consistent art** | 14KB |

**What's inside:**
- TypeScript architecture
- Parser system design
- Scene, inventory, dialog systems
- Audio implementation
- Save system
- Asset pipeline
- Color palette (Teal, Magenta, Mustard)
- Character design specs
- Animation guidelines

---

### 5. Code Documentation

| File | Purpose |
|------|---------|
| `src/content/gameContent.ts` | **Canonical game content** — scenes, characters, dialogue trees, items (24KB) |
| `src/engine/*.ts` | Working engine systems (parser, scenes, inventory, dialog) |
| `README.md` | Project overview, quick start |

---

## 🗂️ TOTAL DOCUMENTATION

**12 documents, ~147KB of design**

| Category | Count | Total Size |
|----------|-------|------------|
| Design Docs | 3 | 62KB |
| Narrative | 2 | 44KB |
| Mechanics | 2 | 34KB |
| Technical | 2 | 32KB |
| Code | 5+ | 50KB+ |
| **TOTAL** | **14+** | **~222KB** |

---

## 🎯 QUICK REFERENCE

### Finding What You Need

**"What's the story?"**
→ `AUTHORITATIVE_GDD.md` — merged narrative summary

**"What does Alex say?"**
→ `SCREENPLAY_BIBLE.md` — all dialogue

**"How does the trolley puzzle work?"**
→ `PUZZLE_DESIGN.md` — Puzzle 2.2

**"What color should Alex's cardigan be?"**
→ `ART_STYLE_GUIDE.md` — Character Design section

**"How do I implement the parser?"**
→ `TECHNICAL_DESIGN.md` — Parser System section

**"What assets do I need to create?"**
→ `LOCATION_ASSET_INDEX.md` — Asset Inventory

**"What's Brad's arc?"**
→ `CHARACTER_PROFILES.md` — Brad section

---

## 📊 ASSET STATUS AT A GLANCE

### ✅ Complete (From July 2025)
- `char_brad.png`
- `char_prof_miller.png`
- `background_frat_party.png`
- `background_prof_millers_office.png`
- `item_desk_key.png`
- `item_ethics_textbook.png`

### 🎨 High Priority (Create First)
1. `char_alex.png` — Cute grad student, glasses, cardigan
2. `char_dean.png` — Power suit, gray streak
3. `background_campus_quad.png` — Central hub
4. `background_platos_cave.png` — Shadow puppet theater

### 🎨 Medium Priority
- Four Philosophers (Plato, Mill, Nietzsche, Sartre)
- Supporting cast (Chad, Trip)
- Remaining backgrounds (Trolley, Gym, Coffee, Dean's Office, etc.)

### 📋 Not Started
- UI elements (parser box, inventory, dialog)
- Audio (11 music tracks, 8 SFX)
- Additional items

---

## 🚀 DEVELOPMENT ROADMAP

### Phase 1: Core (Playable Demo)
- [x] Engine scaffold
- [x] Frat House scene
- [x] Miller's Office scene
- [ ] Alex character art
- [ ] Campus Quad background
- [ ] Parser UI
- [ ] Audio (basic)

### Phase 2: Four Philosophers
- [ ] Plato's Cave + puzzle
- [ ] Trolley Station + puzzle
- [ ] Gym + puzzle
- [ ] Coffee Shop + puzzle

### Phase 3: Finale
- [ ] Dean's Office
- [ ] Thesis Defense boss battle
- [ ] All 4 endings
- [ ] Tecmo Bowl epilogue

### Phase 4: Polish
- [ ] Full audio
- [ ] Animation
- [ ] Death scenes
- [ ] Easter eggs
- [ ] Testing

---

## 🎮 KEY DESIGN DECISIONS

| Decision | Status | Document |
|----------|--------|----------|
| Protagonist: Brad (not Brock) | ✅ Canon | `AUTHORITATIVE_GDD.md` |
| Alex: Romance option | ✅ Canon | `CHARACTER_PROFILES.md` |
| Dean: Former philosopher | ✅ Canon | `CHARACTER_PROFILES.md` |
| Tecmo Bowl epilogue | ✅ Canon | `AUTHORITATIVE_GDD.md` |
| Parser interface | ✅ Canon | `TECHNICAL_DESIGN.md` |
| Sierra-style deaths | ✅ Canon | `PUZZLE_DESIGN.md` |
| 4 Endings + secret | ✅ Canon | `SCREENPLAY_BIBLE.md` |
| Comic book art style | ✅ Canon | `ART_STYLE_GUIDE.md` |

---

## 🔍 DOCUMENT NAVIGATION

### By Role

**Game Designer**
→ Start: `AUTHORITATIVE_GDD.md`
→ Deep dive: `PUZZLE_DESIGN.md`, `CHARACTER_PROFILES.md`

**Writer**
→ Start: `SCREENPLAY_BIBLE.md`
→ Reference: `CHARACTER_PROFILES.md`

**Artist**
→ Start: `ART_STYLE_GUIDE.md`
→ Assets: `LOCATION_ASSET_INDEX.md`

**Programmer**
→ Start: `TECHNICAL_DESIGN.md`
→ Content: `src/content/gameContent.ts`

**Producer**
→ Start: `MERGED_DESIGN_STATUS.md`
→ Planning: `LOCATION_ASSET_INDEX.md` (production priorities)

---

## 📁 FILE ORGANIZATION

```
philosophy-quest/
├── docs/
│   ├── README_DOCS.md              ← You are here
│   ├── AUTHORITATIVE_GDD.md        ← Start here
│   ├── MERGED_DESIGN_STATUS.md     ← Status tracker
│   ├── CHARACTER_PROFILES.md       ← Characters & arcs
│   ├── SCREENPLAY_BIBLE.md         ← Dialogue & scenes
│   ├── PUZZLE_DESIGN.md            ← All puzzles
│   ├── LOCATION_ASSET_INDEX.md     ← Locations & assets
│   ├── ART_STYLE_GUIDE.md          ← Visual bible
│   └── TECHNICAL_DESIGN.md         ← Architecture
│
├── src/
│   ├── content/
│   │   └── gameContent.ts          ← Canonical content (24KB)
│   ├── engine/
│   │   ├── scene.ts                ← Scene system
│   │   ├── parser.ts               ← Parser system
│   │   ├── inventory.ts            ← Inventory system
│   │   └── dialog.ts               ← Dialog system
│   └── main.ts                     ← Entry point
│
├── assets/
│   └── original_july2025/          ← Your July 2025 assets
│       ├── char_brad.png
│       ├── char_prof_miller.png
│       ├── background_frat_party.png
│       ├── background_prof_millers_office.png
│       ├── item_desk_key.png
│       └── item_ethics_textbook.png
│
└── README.md                       ← Project overview
```

---

## 💡 TIPS FOR USING THESE DOCS

1. **The GDD is canonical** — Everything else expands on it
2. **Screenplay is complete** — All major dialogue is written
3. **Puzzles have solutions** — Implementation guide included
4. **Art style is defined** — Color palette, examples, specs
5. **Tech is scaffolded** — Working engine, just needs content

---

## 📞 QUESTIONS?

**"I need the exact dialogue for Scene 3.2"**
→ `SCREENPLAY_BIBLE.md` — Scene 3.2

**"How do I draw Alex?"**
→ `ART_STYLE_GUIDE.md` — Alex section

**"What's the parser vocabulary?"**
→ `TECHNICAL_DESIGN.md` — Parser System

**"How many backgrounds do I need?"**
→ `LOCATION_ASSET_INDEX.md` — Background list

---

*"The docs are complete. The game awaits."*

---

## 🆕 NEW DOCUMENTATION (Phase 2)

### The Philosophy Playbook System

| Document | Purpose | Size |
|----------|---------|------|
| `PHILOSOPHY_PLAYBOOK_SYSTEM.md` | **The playbook translation mechanic** — how philosophy becomes football | 17KB |
| `CHARACTER_DJ_JONES.md` | **The Brad Translator** — DJ's full profile | 13KB |
| `SCENE_PLAYBOOK_REVEAL.md` | **The pivotal scene** — when everything changes | 14KB |

### What's New

**THE CORE INNOVATION**: Philosophy translated into football terminology

- **Real philosophy MA/PhD requirements** researched and incorporated
- **The "Brad Translator"** character: DJ Jones, former linebacker turned philosophy PhD
- **The Playbook System**: Western canon translated into formation calls, route trees, coverage reads
- **The Pivotal Scene**: Brad's breakthrough moment

### The Philosophy Curriculum (Real + Game)

**Real PhD Comprehensive Reading List** (from actual programs):
- **Ancient**: Plato (Republic, Phaedo), Aristotle (Ethics, Metaphysics)
- **Modern**: Descartes (Meditations), Locke, Leibniz, Hume, Kant (Critique)
- **Contemporary**: Mill, Nietzsche, Husserl, Heidegger, Wittgenstein, Sartre

**Brad's Compressed Version**:
- Same texts, different format
- 4 philosopher "packages" instead of 10 courses
- Playbook notation instead of academic prose
- 72-hour cram session instead of 2 years

### The Three-Person Dynamic

| Role | Character | Function |
|------|-----------|----------|
| **The Student** | Brad | Learns via playbook format |
| **The Content Expert** | Alex | Provides philosophical rigor |
| **The Translator** | DJ | Converts to football terminology |

### Key Scenes Added

1. **The Playbook Reveal** — Brad's breakthrough in the library
2. **The All-Nighter** — Creating the Big Book
3. **Study Sessions** — Brad learning via playbook method
4. **The Defense** — Brad using playbook notation in thesis defense

---

*Updated: Phase 2 Complete — The Playbook System*
