# Philosophy Quest - Game Design Document

## Overview

**Genre**: Point-and-Click Adventure / Text Parser  
**Style**: Sierra Online (King's Quest, Space Quest)  
**Platform**: Web (Canvas/WebGL), PC, Mac  
**Target**: Retro gaming enthusiasts, philosophy students, adventure game fans

## The Story

### Prologue: The Heisman
**The Ceremony** - New York City, December

Bud "The Arm" Armstrong wins the Heisman Trophy. The speech is rambling, emotional, heartfelt. Too heartfelt. The sports reporters notice his pupils. The broadcast cameras catch everything.

**What happens**: 
- Victory party at the hotel
- Someone gives Bud Molly ("just to celebrate")
- He meets **Dana Steele** - ESPN's rising star, covering the ceremony
- The chemistry is instant, the judgment is impaired
- They find a quiet hallway. They think it's quiet.
- **The security camera sees everything.**

**Monday Morning**: The video leaks. Dana's career survives (she was the professional one). Bud's... doesn't. NCAA launches investigation. State University needs a sacrificial lamb to save their bowl eligibility.

**Enter Brock Thunderstone** - Backup quarterback, clean record, suddenly starting the National Championship. Until the NCAA finds his "creative" philosophy credits.

### The Setup
Brock, now thrust into the spotlight, has a problem:
- National Championship game: **Saturday**
- NCAA compliance office watching
- Must prove academic legitimacy
- Must earn a **Master's degree in Philosophy** by game day

The university will do anything to save face after the Bud scandal. Including creating an impossible academic sprint.

### The Weekend
- **Friday**: The ultimatum, meeting roommate Chad, finding the Philosophy Building
- **Saturday**: Crash course through four philosophical systems
- **Sunday**: The oral defense - in the stadium, 50,000 fans watching

## Characters

### Main Character
**Brock Thunderstone**
- Physical: 6'4", muscular, always in football gear or letterman jacket
- Traits: Action-oriented, initially impatient with "thinking"
- Arc: Learns that philosophy IS action - applied wisdom
- Stats: Philosophy (0-100), Stamina (depletes), Karma (choices matter)

### Supporting Cast

**Chad (Roommate)**
- Philosophy grad student, owes Brock for "that thing with the bursar"
- Becomes guide/mentor
- Comic relief: treats everything as a philosophical dilemma

**Coach Williams**
- Secretly has a philosophy degree
- Moonlights as Nietzsche scholar at gym
- Philosophy: "Winning IS morality"

**Dr. Shadows (Plato)**
- Literally lives in library basement
- Hasn't seen sunlight since 1987
- Teaches via shadow puppets on wall

**Socrates (Barista)**
- Works at "The Examined Cup" coffee shop
- Only speaks in questions
- Never gives straight answer about latte price

### The Committee (Final Boss)

**Dr. Kant**
- Absolute deontologist
- Rules lawyer
- Categorical imperative: "You MUST pass to play"

**Dr. Mill**
- Utilitarian
- Wants greatest good for greatest number
- "If you WIN, happiness increases"

**Dr. Nietzsche**
- Übermensch enthusiast
- Coach's academic advisor
- "Become the quarterback who creates his own values"

**Dr. Sartre**
- Existentialist
- "You are condemned to be free... to choose"
- No essence, only existence

## Game Mechanics

### Parser Interface
```
> ASK SOCRATES ABOUT VIRTUE
> USE PROTEIN POWDER ON TA
> GO NORTH
> TAKE FOOTBALL
> LOOK
```

### Inventory System
**Items**:
- Lucky football (emotional anchor)
- Philosophy textbooks (increasing weight metaphor)
- Energy drinks (restore stamina)
- Protein powder (currency for bribes)
- Notes from each philosopher

### Stats
- **Philosophy Knowledge** (0-100): Unlocks dialog options
- **Stamina** (0-100): Depletes, restored by coffee/sleep
- **Karma** (0-100): Affects available endings
- **Team Morale**: Updates via phone from teammates

### Death System (Sierra Style)

**Ways to Die**:
1. Fall asleep during Kant lecture → "Time is a flat circle"
2. Try to wing thesis defense → "The committee was not amused"
3. Stare into abyss too long → "It stared back. You blinked."
4. Run out of stamina → "You need to examine your sleep schedule"
5. Fail trolley problem → "The math was against you"

## Puzzles

### Act I Puzzles

**1. Find the Philosophy Building**
- Hidden behind Humanities wing
- Need to bribe TA with protein powder
- TA gives cryptic directions

**2. Access the Library Basement**
- Door is stuck
- Need to find crowbar OR use strength (depletes stamina)
- Choice affects karma

### Act II Puzzles

**Plato's Cave**
- Escape using shadows on wall
- Sort objects: Forms vs appearances
- Shadows lead to exit
- Wrong path leads back to start

**The Trolley Problem**
- Interactive: Switch tracks or not
- 5 students vs 1
- Real-time decision
- Affects karma meter significantly
- Cannot be undone

**Nietzsche's Gym**
- Lift progressively heavier philosophy books
- Books: Ethics (light) → Being and Time (heavy)
- Philosophy stat increases with each lift
- Coach gives speeches between sets

**Socrates' Coffee Shop**
- Must answer questions with questions
- Can't just order coffee
- Sequence: 
  - "What is coffee?"
  - "What is desire?"
  - "What is caffeine?"
- Successfully ordering gives stamina boost

### Act III Puzzle

**The Defense**
- Real-time thesis defense
- Committee asks questions
- Must pull from learned philosophy
- Quick-time events for counter-arguments
- Use inventory items (notes, quotes)

## Locations

### Campus Map
```
                    [Stadium]
                        |
    [Dorm] — [Quad] — [Library] — [Gym]
                |         |
            [Coffee]  [Basement]
            
    [Philosophy Building] (hidden, north of Humanities)
```

### Detailed Scenes

**The Stadium**
- Trophy on pedestal
- Scoreboard showing countdown
- Crowd noises in background
- Coach pacing

**The Dorm Room**
- Chad's philosophy books everywhere
- Brock's football gear
- Mini-fridge with energy drinks
- Phone (receives teammate updates)

**Plato's Cave (Library Basement)**
- Fire casting shadows
- Chains on wall
- Exit visible but hard to reach
- Dr. Shadows as silhouette

**The Trolley Track**
- Campus transit map
- Switch mechanism
- Visual of 5 vs 1
- Dramatic lighting

## Art Direction

### Visual Style
- 16-bit EGA palette (16 colors)
- 640x480 resolution
- Pixel art characters
- Dithering for gradients
- Sierra-style character portraits during dialog

### Animation
- 4-directional walk cycles
- Simple idle animations
- Parser text typing effect
- Scene transitions: fade or wipe

### UI Design
- Parser at bottom
- Output scrollback
- Inventory icon in corner
- Stats visible on hover

## Audio

### Music
- MIDI format, SoundFont2
- Stadium organ for main theme
- Different track per philosopher
- Tense music for trolley problem
- Triumphant for defense

### Sound Effects
- 8-bit style beeps
- Text typing sounds
- Door opening/closing
- Item pickup chimes
- Death jingle

## Endings

### Golden Ending
- Pass thesis with all committee members impressed
- Win championship
- Get drafted to NFL
- Publish "The Ethics of Competition" (bestseller)
- "You became the philosopher-king"

### Bittersweet Ending
- Pass thesis
- Lose championship (exhausted)
- Become philosophy professor
- Tenure at 35
- "Sometimes wisdom means losing"

### Sports Ending
- Fail thesis
- Win championship anyway (illegal play)
- Successful NFL career
- Haunted by unexamined life
- "You won, but at what cost?"

### Existential Crisis
- Realize both football and philosophy are meaningless
- Open coffee shop "The Absurd Bean"
- Content but confused
- "You created your own meaning"

## Development Priorities

### MVP (Week 1-2)
- Parser working
- 3 scenes (Stadium, Dorm, Cave)
- Basic dialog
- 1 puzzle (Cave)

### v0.5 (Week 3)
- All Act I & II
- 3 puzzles working
- Stats system
- 2 endings

### v1.0 (Week 4)
- Complete game
- All 4 endings
- Audio
- Polish

## Easter Eggs

- Click trophy 50 times → "You have won the championship of clicking"
- "Look under bed" in dorm → Chad's embarrassing thesis on "The Phenomenology of Dating Apps"
- Try to use football on committee → "They are not impressed by your spiral"
- Drink too much coffee → "Your existence is jittery but examined"

## References

- King's Quest (parser, death humor)
- Space Quest (sci-fi humor → sports humor)
- The Good Place (philosophy made accessible)
- Friday Night Lights (sports drama)
- Good Will Hunting (genius janitor → genius quarterback)
