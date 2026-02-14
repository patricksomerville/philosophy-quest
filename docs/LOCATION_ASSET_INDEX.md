# Philosophy Quest: Location & Asset Index

Complete inventory of every location, required asset, and production status.

---

## LOCATION MASTER LIST

### Format Key
- ✅ **Complete**: Asset exists from July 2025
- 🎨 **Concept**: Design documented, needs creation
- 🔧 **Placeholder**: Temporary asset in use
- 📋 **TBD**: To be determined

---

## ACT 1: THE AWAKENING

### Location 1: The Frat House
**ID**: `frat_house`  
**Status**: ✅ **COMPLETE**  
**Asset**: `background_frat_party.png` (192KB, 1280x720)

#### Description
Opening scene. Messy party aftermath. Red solo cups everywhere, philosophical quotes on walls (misspelled), TV showing Bud Armstrong scandal on loop. Strange green liquid in beaker. Philosophy book on couch.

#### Interactive Objects
| Object | Sprite Needed | Function |
|--------|---------------|----------|
| Green Liquid | 🔧 Placeholder | Death trap (poison) |
| Philosophy Book | ✅ `item_ethics_textbook.png` | Clue source, can take |
| Red Cups | 🔧 Placeholder | Decorative, infinite |
| Phone | 📋 TBD | Triggers voicemail from Dean |
| Couch | No sprite needed | Brad wakes up here |

#### Characters Present
| Character | Sprite | Status |
|-----------|--------|--------|
| Chad | 🎨 Needs creation | `char_chad.png` |
| Trip | 🎨 Needs creation | `char_trip.png` |

#### Exits
- North → Campus Quad
- East → Miller's Office (locked until Act 1 complete)
- Out → Campus Quad

#### Audio
- Background: Distant party sounds, TV murmur
- Music: "Hangover Haze" — muffled, thumping bass

---

### Location 2: Professor Miller's Office
**ID**: `miller_office`  
**Status**: ✅ **COMPLETE**  
**Asset**: `background_prof_millers_office.png` (191KB, 1280x720)

#### Description
Academic chaos. Books everywhere (some in unknown languages), green banker's lamp, philosopher bust, rotary phone, stacks of papers. Smells like old books and regret.

#### Interactive Objects
| Object | Sprite Needed | Function |
|--------|---------------|----------|
| Philosopher Bust | No sprite needed | Decorative, examinable |
| Miller's Desk | No sprite needed | Key items spawn here |
| Desk Key | ✅ `item_desk_key.png` | Quest item, unlocks Cave |
| Whiskey Bottle | 📋 TBD | Miller's coping mechanism |

#### Characters Present
| Character | Sprite | Status |
|-----------|--------|--------|
| Prof. Miller | ✅ `char_prof_miller.png` | Quest giver |

#### Exits
- West → Frat House
- Out → Campus Quad

#### Audio
- Background: Clock ticking, distant campus sounds
- Music: "The Weight of Knowledge" — somber, contemplative

---

### Location 3: Campus Quad
**ID**: `campus_quad`  
**Status**: 🎨 **CONCEPT**  
**Asset**: `background_campus_quad.png` (NEEDED)

#### Description
Central hub. Bustling with students. Philosophy Building north, Gym east, Coffee Shop west. Founder statue with football helmet. Alex sits on bench.

#### Interactive Objects
| Object | Sprite Needed | Function |
|--------|---------------|----------|
| Founder Statue | 🎨 Needs creation | Humorous (football helmet) |
| Bench | 🎨 Needs creation | Alex sits here |
| Fountain | 🎨 Needs creation | Decorative |
| Trees | 🎨 Needs creation | Decorative |

#### Characters Present
| Character | Sprite | Status |
|-----------|--------|--------|
| Alex | 🎨 Needs creation | `char_alex.png` |
| Random Students | 📋 TBD | Background flavor |

#### Exits
- North → Philosophy Building
- East → Gym
- West → Coffee Shop
- South → Frat House
- Down → Plato's Cave (unlocked with key)

#### Audio
- Background: Student chatter, birds, distant bell
- Music: "Campus Life" — upbeat, collegiate

---

## ACT 2: THE FOUR PHILOSOPHERS

### Location 4: Plato's Cave
**ID**: `platos_cave`  
**Status**: 🎨 **CONCEPT**  
**Asset**: `background_platos_cave.png` (NEEDED)

#### Description
Basement of Philosophy Building... which is somehow a real cave? Shadow puppet theater set up. Shadows dance on walls. Mysterious, allegorical atmosphere.

#### Interactive Objects
| Object | Sprite Needed | Function |
|--------|---------------|----------|
| Shadow Wall | 🎨 Needs creation | Shadow sorting puzzle |
| Puppet Theater | 🎨 Needs creation | Plato's manifestation |
| Cave Shadows | 🎨 Needs creation | Puzzle elements |
| Torch/Sconce | 🎨 Needs creation | Light source |

#### Characters Present
| Character | Sprite | Status |
|-----------|--------|--------|
| Plato | 🎨 Needs creation | `char_plato.png` — shadow puppet |

#### Puzzle: Shadow Sorting
Player must organize shadows to reveal "true forms" of philosophical concepts. Tutorial for parser mechanics.

#### Exits
- Up → Campus Quad

#### Audio
- Background: Echoing drips, wind
- Music: "Shadows of Truth" — ethereal, mysterious

---

### Location 5: The Trolley Station
**ID**: `trolley_station`  
**Status**: 🎨 **CONCEPT**  
**Asset**: `background_trolley_station.png` (NEEDED)

#### Description
Campus light rail station. Red trolley car on tracks. Two sets of tracks diverging. Sign: "TO CAMPUS / TO DOWNTOWN." Tense atmosphere.

#### Interactive Objects
| Object | Sprite Needed | Function |
|--------|---------------|----------|
| Red Trolley | 🎨 Needs creation | Central focus |
| Track Lever | 🎨 Needs creation | Moral choice mechanic |
| Tracks (2 sets) | 🎨 Needs creation | Visual puzzle element |
| Sign | 🎨 Needs creation | Decorative |

#### Characters Present
| Character | Sprite | Status |
|-----------|--------|--------|
| John Stuart Mill | 🎨 Needs creation | `char_mill.png` — conductor |

#### Puzzle: The Trolley Problem (Literal)
Runaway trolley approaching. Track A: 5 philosophy majors. Track B: 1 business major who will invent job-destroying AI. Player must pull lever or not.

**Consequences:**
- Pull lever → Business major dies, get "Utilitarian" badge, unlocks Mill's help later
- Don't pull → Philosophers die, get "Deontologist" badge, different help

#### Exits
- North → Campus Quad

#### Audio
- Background: Trolley bell, screeching brakes
- Music: "The Greater Good" — tense, dramatic

---

### Location 6: The Gym (Nietzsche's Domain)
**ID**: `gym`  
**Status**: 🎨 **CONCEPT**  
**Asset**: `background_gym.png` (NEEDED)

#### Description
Athletic facility weight room. Philosophy books used as weights. Smells like determination and locker room spray. Heavy metal music vibe.

#### Interactive Objects
| Object | Sprite Needed | Function |
|--------|---------------|----------|
| Weight Rack | 🎨 Needs creation | Books organized by weight |
| Barbell | 🎨 Needs creation | Heavy lifting puzzle |
| Bench Press | 🎨 Needs creation | Nietzsche's position |
| Locker | 🎨 Needs creation | Potential item storage |
| Mirror | 🎨 Needs creation | Self-reflection (literally) |

#### Characters Present
| Character | Sprite | Status |
|-----------|--------|--------|
| Coach Williams / Nietzsche | 🎨 Needs creation | `char_nietzsche.png` |

#### Puzzle: Heavy Lifting
Organize philosophy books by weight (heaviest ideas = heaviest books). Hegel is heaviest. Nietzsche challenges player to "lift the weight of Western thought."

#### Exits
- West → Campus Quad

#### Audio
- Background: Clanging weights, grunts
- Music: "Will to Power" — heavy, intense

---

### Location 7: The Grounds of Being (Coffee Shop)
**ID**: `coffee_shop`  
**Status**: 🎨 **CONCEPT**  
**Asset**: `background_coffee_shop.png` (NEEDED)

#### Description
Hipster coffee shop. Exposed brick, uncomfortable chairs, pretentious menu. Sartre behind counter. Alex works here sometimes.

#### Interactive Objects
| Object | Sprite Needed | Function |
|--------|---------------|----------|
| Menu Board | 🎨 Needs creation | Existential drink names |
| Espresso Machine | 🎨 Needs creation | Latte art minigame |
| Uncomfortable Chairs | 🎨 Needs creation | Decorative |
| Counter | 🎨 Needs creation | Interaction point |

#### Characters Present
| Character | Sprite | Status |
|-----------|--------|--------|
| Sartre | 🎨 Needs creation | `char_sartre.png` — barista |
| Alex (sometimes) | 🎨 Needs creation | Coffee shop encounter |

#### Puzzle: Existential Latte Art
Minigame: Draw shapes in foam. Sartre judges based on how well they represent existential concepts.

**Examples:**
- Draw a swan → "Bad faith! You're trying to be a swan!"
- Draw chaos → "Authentic! You accept the absurdity!"

#### Exits
- East → Campus Quad

#### Audio
- Background: Espresso machine, quiet chatter
- Music: "Bad Faith Blues" — jazz, contemplative

---

## ACT 3: THE CONFRONTATION

### Location 8: The Philosophy Building (Hallway)
**ID**: `philosophy_building`  
**Status**: 📋 **TBD**  
**Asset**: `background_philosophy_building.png` (NEEDED)

#### Description
Grand hallway with portraits of dead philosophers. Doors to various offices. Atmosphere of academic gravitas.

#### Interactive Objects
| Object | Sprite Needed | Function |
|--------|---------------|----------|
| Portraits | 🎨 Needs creation | Clickable philosophy facts |
| Trophy Case | 🎨 Needs creation | University achievements |
| Elevator | 🎨 Needs creation | Transport to Dean's office |

#### Exits
- South → Campus Quad
- Up → Dean's Office
- In → Thesis Committee Room (final scene)

---

### Location 9: Dean's Office
**ID**: `dean_office`  
**Status**: 🎨 **CONCEPT**  
**Asset**: `background_dean_office.png` (NEEDED)

#### Description
Modern, sterile office. Sports memorabilia mixed with philosophy books. Large desk. Dean Thorne's domain. Power and conflict.

#### Interactive Objects
| Object | Sprite Needed | Function |
|--------|---------------|----------|
| Dean's Desk | 🎨 Needs creation | Confrontation point |
| Trophy Shelf | 🎨 Needs creation | University priorities |
| "Ethics for Atheletes" | 🎨 Needs creation | Framed on wall |
| Window | 🎨 Needs creation | View of stadium |

#### Characters Present
| Character | Sprite | Status |
|-----------|--------|--------|
| Dean Harriet Thorne | 🎨 Needs creation | `char_dean.png` |

#### Major Scene: The Confrontation
Dean tests Brad's growth. Can be convinced to support him or remains antagonist. Key dialogue about her past as philosophy PhD.

#### Exits
- Down → Philosophy Building

---

### Location 10: Thesis Committee Room
**ID**: `thesis_committee_room`  
**Status**: 🎨 **CONCEPT**  
**Asset**: `background_committee_room.png` (NEEDED)

#### Description
Conference room. Long table. Three professors at one end (Shadows, Harding, Chen). Ominous, tribunal-like atmosphere.

#### Interactive Objects
| Object | Sprite Needed | Function |
|--------|---------------|----------|
| Conference Table | 🎨 Needs creation | Boss battle arena |
| Whiteboard | 🎨 Needs creation | Philosophical diagrams |
| Water Pitcher | 🎨 Needs creation | Brad's nervous prop |
| Brad's Thesis | 🎨 Needs creation | Final version |

#### Characters Present
| Character | Sprite | Status |
|-----------|--------|--------|
| Dr. Shadows | 🎨 Needs creation | Metaphysics attacker |
| Prof. Harding | 🎨 Needs creation | Epistemology attacker |
| Dr. Chen | 🎨 Needs creation | Ethics (sympathetic) |

#### Boss Battle: Thesis Defense
Keyword matching system. Professors attack with philosophical positions. Brad counters using concepts learned from Four Philosophers.

**Example Exchange:**
- Shadows: "But is the championship real, or just a social construct?"
- Brad (if learned from Plato): "The game is a shadow, but the effort is real."

#### Exits
- Victory → Stadium
- Failure → Game Over

---

### Location 11: The Stadium
**ID**: `stadium`  
**Status**: 🎨 **CONCEPT**  
**Asset**: `background_stadium.png` (NEEDED)

#### Description
Final scene. Locker room or field depending on ending. Championship atmosphere. Crowd noise. Everything at stake.

#### Variations by Ending
| Ending | Scene Description |
|--------|-------------------|
| Championship Ending | On the field, crowd roaring |
| Academic Ending | Empty stadium, contemplative |
| Bud Light Ending | Locker room, watching Bud play |
| Alex Ending | Tunnel, Alex waiting |

#### Characters Present
- Varies by ending
- Possible: Alex, Miller, Dean, Bud Armstrong (cameo)

---

## SPECIAL LOCATIONS

### Location 12: Death Screen
**ID**: `death_screen`  
**Status**: 🎨 **CONCEPT**

Sierra-style death screen with:
- Dramatic music sting
- Humorous epitaph
- "Try Again" button
- Hint about what went wrong

### Location 13: Tecmo Bowl Epilogue
**ID**: `tecmo_epilogue`  
**Status**: 🎨 **CONCEPT**

8-bit retro graphics showing:
- Brad sprite in football uniform
- Stats: PHILOSOPHY MA: COMPLETE, TOUCHDOWNS: 3, EXISTENTIAL CRISES: 7
- Key choices made
- Relationship status
- Final grade

---

## ASSET INVENTORY

### CHARACTER SPRITES (11 Total)

| Character | File | Status | Priority |
|-----------|------|--------|----------|
| Brad | `char_brad.png` | ✅ Complete | — |
| Prof. Miller | `char_prof_miller.png` | ✅ Complete | — |
| Alex | `char_alex.png` | 🎨 Needed | HIGH |
| Dean Thorne | `char_dean.png` | 🎨 Needed | HIGH |
| Plato | `char_plato.png` | 🎨 Needed | MEDIUM |
| Mill | `char_mill.png` | 🎨 Needed | MEDIUM |
| Nietzsche/Coach | `char_nietzsche.png` | 🎨 Needed | MEDIUM |
| Sartre | `char_sartre.png` | 🎨 Needed | MEDIUM |
| Chad | `char_chad.png` | 🎨 Needed | LOW |
| Trip | `char_trip.png` | 🎨 Needed | LOW |
| Dr. Shadows | `char_shadows.png` | 🎨 Needed | LOW |

**Format**: PNG, 832x1248px (character), transparent background  
**Style**: Comic book illustration, bold outlines, vibrant colors (teal/magenta/yellow palette)

---

### BACKGROUNDS (11 Total)

| Location | File | Status | Priority |
|----------|------|--------|----------|
| Frat House | `background_frat_party.png` | ✅ Complete | — |
| Miller's Office | `background_prof_millers_office.png` | ✅ Complete | — |
| Campus Quad | `background_campus_quad.png` | 🎨 Needed | HIGH |
| Plato's Cave | `background_platos_cave.png` | 🎨 Needed | HIGH |
| Trolley Station | `background_trolley_station.png` | 🎨 Needed | MEDIUM |
| Gym | `background_gym.png` | 🎨 Needed | MEDIUM |
| Coffee Shop | `background_coffee_shop.png` | 🎨 Needed | MEDIUM |
| Philosophy Building | `background_philosophy_building.png` | 🎨 Needed | LOW |
| Dean's Office | `background_dean_office.png` | 🎨 Needed | LOW |
| Committee Room | `background_committee_room.png` | 🎨 Needed | LOW |
| Stadium | `background_stadium.png` | 🎨 Needed | LOW |

**Format**: PNG, 1280x720px  
**Style**: Comic book illustration, detailed but not cluttered

---

### ITEM SPRITES (8+ Total)

| Item | File | Status | Priority |
|------|------|--------|----------|
| Desk Key | `item_desk_key.png` | ✅ Complete | — |
| Ethics Textbook | `item_ethics_textbook.png` | ✅ Complete | — |
| Red Solo Cup | `item_red_cup.png` | 🎨 Needed | HIGH |
| Plato's Shadow Puppet | `item_shadow_puppet.png` | 🎨 Needed | MEDIUM |
| Trolley Lever | `item_trolley_lever.png` | 🎨 Needed | MEDIUM |
| Philosophy Books | `item_philosophy_books.png` | 🎨 Needed | MEDIUM |
| Latte Art | `item_latte_art.png` | 🎨 Needed | LOW |
| Thesis Drafts | `item_thesis_drafts.png` | 🎨 Needed | LOW |

**Format**: PNG, 1024x1024px, transparent background

---

### UI ASSETS

| Element | File | Status |
|---------|------|--------|
| Parser Input Box | `ui_input.png` | 📋 TBD |
| Inventory Panel | `ui_inventory.png` | 📋 TBD |
| Dialog Box | `ui_dialog.png` | 📋 TBD |
| Death Screen Frame | `ui_death.png` | 📋 TBD |
| Cursor (Default) | `cursor_default.png` | 📋 TBD |
| Cursor (Examine) | `cursor_examine.png` | 📋 TBD |
| Cursor (Talk) | `cursor_talk.png` | 📋 TBD |
| Cursor (Take) | `cursor_take.png` | 📋 TBD |

---

### AUDIO ASSETS

#### Music (11 Tracks)
| Track | Location | Mood |
|-------|----------|------|
| `music_title.mp3` | Title Screen | Epic, orchestral |
| `music_frat.mp3` | Frat House | Muffled party |
| `music_miller.mp3` | Miller's Office | Somber, contemplative |
| `music_quad.mp3` | Campus Quad | Upbeat, collegiate |
| `music_cave.mp3` | Plato's Cave | Mysterious, ethereal |
| `music_trolley.mp3` | Trolley Station | Tense, dramatic |
| `music_gym.mp3` | Gym | Heavy, intense |
| `music_coffee.mp3` | Coffee Shop | Jazz, chill |
| `music_dean.mp3` | Dean's Office | Power, conflict |
| `music_battle.mp3` | Thesis Defense | Epic, orchestral |
| `music_epilogue.mp3` | Tecmo Bowl | 8-bit chiptune |

#### SFX
| Sound | File | Usage |
|-------|------|-------|
| Death Sting | `sfx_death.mp3` | Death screen |
| Item Pickup | `sfx_pickup.mp3` | Taking items |
| Dialog Advance | `sfx_dialog.mp3` | Next dialog line |
| Parser Error | `sfx_error.mp3` | Invalid command |
| Success | `sfx_success.mp3` | Puzzle solved |
| Trolley Bell | `sfx_trolley.mp3` | Trolley station |
| Espresso Machine | `sfx_espresso.mp3` | Coffee shop |
| Whistle | `sfx_whistle.mp3` | Gym |

---

## PRODUCTION PRIORITIES

### Phase 1: Core Experience (MVP)
1. ✅ Frat House background
2. ✅ Miller's Office background
3. ✅ Brad character art
4. ✅ Miller character art
5. ✅ Desk key item
6. ✅ Ethics textbook item
7. 🎨 Alex character art
8. 🎨 Campus Quad background
9. 🎨 Red solo cup item
10. 🎨 Parser UI

### Phase 2: Four Philosophers
1. 🎨 Plato's Cave background
2. 🎨 Plato character art (shadow)
3. 🎨 Trolley Station background
4. 🎨 Mill character art
5. 🎨 Gym background
6. 🎨 Nietzsche character art
7. 🎨 Coffee Shop background
8. 🎨 Sartre character art

### Phase 3: Finale
1. 🎨 Dean character art
2. 🎨 Dean's Office background
3. 🎨 Committee Room background
4. 🎨 Committee member sprites
5. 🎨 Stadium background
6. 🎨 Tecmo Bowl sprites

### Phase 4: Polish
1. 📋 All UI elements
2. 📋 All SFX
3. 📋 All music
4. 📋 Death screen graphics
5. 📋 Additional items

---

## FILE NAMING CONVENTION

```
Assets/
├── characters/
│   ├── char_brad.png
│   ├── char_alex.png
│   └── ...
├── backgrounds/
│   ├── background_frat_party.png
│   ├── background_miller_office.png
│   └── ...
├── items/
│   ├── item_desk_key.png
│   ├── item_ethics_textbook.png
│   └── ...
├── ui/
│   ├── ui_input.png
│   ├── ui_inventory.png
│   └── ...
├── audio/
│   ├── music/
│   │   ├── music_title.mp3
│   │   └── ...
│   └── sfx/
│       ├── sfx_death.mp3
│       └── ...
└── fonts/
    └── font_ega.png
```

---

## NOTES

- All assets should maintain consistent comic book art style
- Color palette: Teal (#00CED1), Magenta (#FF00FF), Yellow (#FFD700), Black, White
- Character art: 832x1248px for standing poses, transparent background
- Backgrounds: 1280x720px, fully illustrated
- Items: 1024x1024px, centered, transparent background
- UI: Flexible sizing, pixel-perfect

---

*"Every asset tells a story."*
