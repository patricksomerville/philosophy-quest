# Philosophy Quest: Screenplay Bible

**Complete Dialogue & Scene Scripts**

---

## ACT 1: THE AWAKENING

---

### Scene 1.1: The Frat House — Opening

**Setting**: `frat_house` — Red cups, chaos, TV showing Bud Armstrong scandal  
**Music**: `music_frat.mp3` — muffled party sounds  
**Player State**: Just woke up, confused, hungover

#### EXAMINE ROOM (First Look)
```
You're in the frat house living room. The aftermath of... something. Red solo cups 
everywhere — on the floor, on the furniture, in places cups shouldn't be. Someone 
drew philosophical quotes on the walls in Sharpie. Most are misspelled. 

Through the haze, the TV glows. SportsCenter is on loop. Bud Armstrong's scandal 
is the lead story — again. You can't escape it.

There's a strange GREEN LIQUID in a beaker on the coffee table. 
Your PHILOSOPHY BOOK sits on the couch where you left it... three years ago.

Chad is doing a keg stand. Trip is staring at the ceiling.
```

#### LOOK AT TV
```
SportsCenter. The hosts are loving this.

"Bud Armstrong — the 'Bud Light' of quarterbacks — caught on camera with not one 
but TWO women. His Heisman is in jeopardy. His reputation? Toast. The university 
needs a scandal-free hero for Saturday's championship..."

You look down at yourself. You're wearing a football jersey. 
Your phone buzzes.
```

#### EXAMINE PHONE (First Voicemail)
```
One new voicemail from "Dean Thorne."

"Mr. Armstrong. This is Dean Harriet Thorne of Athletics. Bud's suspension 
creates... an opportunity. You're starting Saturday. But the NCAA is watching. 
You need 32 credits by Friday. I suggest you check your transcript. And I suggest 
you visit Professor Miller's office. Immediately."

The call ends. You have 72 hours to become a philosopher.
```

---

### Scene 1.2: Chad Conversation — "Double Kant"

**Trigger**: TALK TO CHAD  
**Dialog Tree**: `chad_intro`

#### Node: START
**Chad**: "DUDE! You're finally up! You promised you'd explain Kant to me if I did that keg stand. I did TWO. I want DOUBLE KANT."

**Player Options**:
1. "Kant is... about doing the right thing?"
2. "Later, Chad. Have you seen my phone?"
3. [Drink the green liquid]

#### Path 1: "The Right Thing"
**Chad**: "That's it? Do the right thing? That's BO-RING. I thought there would be more... categorical stuff."

**Brad**: "There is. I'll explain later."

**Chad**: "You better. I did TWO keg stands. That's DOUBLE the Kant. I'm keeping a spreadsheet."

#### Path 2: "The Phone"
**Chad**: "Your phone? Yeah, it's been buzzing like crazy. Someone named DEAN keeps calling. Sounds scary, man. Phone's on the couch."

**Brad**: "Thanks, Chad."

**Chad**: "Anytime, B-rad. Hey, don't drink that green stuff. It's my EXPERIMENTAL PROTEIN SHAKE. I think I put too much... philosophy in it."

#### Path 3: DEATH — "The Green Liquid"
```
DEATH SCENE: ALCHEMY GONE WRONG

You drink the green liquid. It tastes like regret, kale, and something 
chemical-y. You immediately pass out.

You wake up in the hospital. The championship started 4 hours ago. 
Bud Armstrong is back from suspension. You're not even on the team anymore.

Coach doesn't even visit.

GAME OVER

[Try Again] [Hint: Listen to Chad. He said not to drink it.]
```

---

### Scene 1.3: Trip Conversation — "The Football Metaphor"

**Trigger**: TALK TO TRIP  
**Dialog Tree**: `trip_intro`

#### Node: START
**Trip**: "Brad. Brad. BRAD. What if... hear me out... what if the football is just a metaphor? For our souls? Like, we're all just being thrown from person to person, spiraling through the air of existence, never knowing where we'll land, never knowing if we'll be caught or... dropped."

**Player Options**:
1. "Trip, are you okay?"
2. "That's... actually not terrible philosophy."
3. [Back away slowly]

#### Path 1: "Are You Okay?"
**Trip**: "I'm BETTER than okay, my friend. I just read the ENTIRE Phenomenology of Spirit. In one sitting. I understand everything now. EVERYTHING. Ask me anything."

**Brad**: "What's the meaning of life?"

**Trip**: "42. Wait, no. That's not right. That's a different book. The meaning of life is... um... give me a second..."

[Trip stares into space for 30 seconds of silence]

**Trip**: "It's coming back to me. Something about... overcoming? Or was it acceptance? Or maybe it was... no, wait, that's pizza."

#### Path 2: "Not Terrible"
**Trip**: "NOT TERRIBLE? Brad, that's the nicest thing you've ever said to me. You're growing, man. You're becoming... philosophical. Soon you'll be reading Hegel. Soon you'll be questioning the nature of reality. Soon you'll be... me."

**Brad**: "Thanks, Trip."

**Trip**: "Anytime, philosopher-king."

#### Path 3: Exit
**Trip**: "Hey Brad? If you see the universe, tell it I said hi."

---

### Scene 1.4: Taking the Philosophy Book

**Trigger**: TAKE BOOK / TAKE PHILOSOPHY BOOK

```
You pick up "Ethics for Atheletes." The cover is sticky. There's a coffee stain 
shaped like Florida on Chapter 7. 

Someone — probably you, three years ago — highlighted passages:

Yellow highlight: "Character is what you do when no one is watching."
Pink highlight: "The unexamined athletic program is not worth funding."
Green highlight: "Wait, what?" (This appears to be your handwriting)

You acquire: ETHICS TEXTBOOK
```

---

### Scene 1.5: Professor Miller's Office — The Revelation

**Setting**: `miller_office` — Books, chaos, philosopher bust  
**Music**: `music_miller.mp3` — somber, contemplative  
**Prerequisite**: Heard Dean's voicemail

#### ENTERING THE OFFICE
```
You knock. A voice says "Enter," sounding like it regrets every decision 
that led to this moment.

Professor Miller's office is a monument to academic chaos. Books everywhere — 
some in languages you can't read. A green banker's lamp casts dramatic shadows. 
There's a PHILOSOPHER BUST on the desk (you think it's Socrates but you're not 
sure). 

The air smells like old paper and whiskey... and regret.

Miller sits behind his desk, arms crossed, looking at you like you're a 
particularly disappointing thesis proposal.
```

#### Node: START
**Miller**: "Brad Armstrong. In my office. Three days before graduation. This is either a prank or a tragedy. Let me guess — you've finally remembered that you have an incomplete from my 2021 seminar?"

**Player Options**:
1. "I'm starting in the championship, but I need 32 credits."
2. "It's about my thesis..."
3. "Can you just pass me?"

#### Path 1: The Championship
**Miller**: "The championship? Oh my. And they're making you earn the credits first? How... surprisingly ethical of the NCAA."

[Adjusts glasses]

**Miller**: "72 hours to complete a Master's degree. It's... theoretically possible. I've seen students do impossible things when properly motivated. Usually fear of their parents. In your case, fear of... what? Disappointing the boosters?"

**Brad**: "Something like that."

**Miller**: "How do you propose to do it?"

#### Path 2: The Thesis
**Miller**: "Your thesis. Yes. 'Ethics and Athletics: A Philosophical Analysis.' Three pages. One of which is just a drawing of a football with a smiley face."

**Brad**: "I can do better."

**Miller**: "Can you? Can you actually do better, or do you just want me to believe you can do better? There's a difference, Brad. A philosophical difference."

**Brad**: "I want to actually do better."

**Miller**: [Long pause] "Then prove it."

#### Path 3: The Shortcut
**Miller**: [Laughs, then stops] "Absolutely not. I have my integrity. Also, the Dean is watching this department like a hawk after the Bud Armstrong scandal. No free passes. Not for Heisman winners, not for backup quarterbacks, not for anyone."

**Miller**: "But... if you want to do this legitimately, I can help. Not because I think you can do it, but because... well, it would make a hell of a story."

#### The Plan
**Miller**: "Here's what you need to do: Complete your thesis. Pass an oral exam. Survive the Thesis Committee. And along the way, you'll need to meet with... certain philosophers who haunt this campus."

**Brad**: "Philosophers?"

**Miller**: "Plato in the basement. Mill at the trolley. Nietzsche in the gym — though he calls himself Coach Williams. And Sartre at the coffee shop. Each will teach you what you need."

[Miller opens his desk drawer]

**Miller**: "Take this key. It opens the Philosophy Building archives. And take this — your old textbook. Maybe you'll actually read it this time."

[You receive: DESK KEY and ETHICS TEXTBOOK]

**Miller**: "Also — look for Alex Chen. Graduate student, Philosophy of Sport. She's usually in the quad or at the coffee shop. She's... much smarter than you, Brad. Listen to her."

#### EXIT
**Miller**: "And Brad? I'm rooting for you. Not because I think you can do it, but because... well, it would make a hell of a story."

---

### Scene 1.6: Campus Quad — Meeting Alex

**Setting**: `campus_quad` — Bustling, founder statue with football helmet  
**Music**: `music_quad.mp3` — upbeat, collegiate  
**Prerequisite**: Talked to Miller

#### Alex on the Bench
```
A grad student sits on a bench, surrounded by stacks of books. She's cute, 
wearing glasses, clearly deep in something heavy and philosophical. 

She looks up as you approach. Her expression shifts from concentration to...
amusement?
```

#### Node: START
**Alex**: "You're Brad Armstrong. The backup QB who's suddenly starting in the championship. And you need to write a philosophy thesis in 72 hours."

[She smiles]

**Alex**: "I heard. Everyone's heard. It's kind of hilarious."

**Player Options**:
1. "Can you help me?"
2. "It's not that funny."
3. "You're cute when you're judgmental."

#### Path 1: "Can You Help Me?"
**Alex**: "I can. I'm Alex Chen — PhD candidate, Philosophy of Sport. I'm literally writing about ethics in athletics. Your situation is... a perfect case study."

**Brad**: "So you'll help?"

**Alex**: "I'll guide you through this, but I won't compromise my academic integrity. You need to actually learn this stuff. Meet me at The Grounds of Being later — I'll buy you your first existential crisis."

#### Path 2: "Not That Funny"
**Alex**: "It's VERY funny. You're a Division I quarterback trying to become a philosopher in three days. It's like a bad movie. But... I'm interested in bad movies."

**Brad**: "Will you help me?"

**Alex**: "I'll help. But I'm writing about you. For my dissertation. Fair warning."

#### Path 3: "Cute When Judgmental"
**Alex**: [Laughs] "And you're... exactly what I expected. Charming, slightly desperate, running out of time."

[She closes her book]

**Alex**: "I like you, Brad. That's why I'm going to help you. Also, you're literally my research now, so I kind of have to."

#### The Warning
**Alex**: "One more thing — avoid the Dean. Harriet Thorne is... not a fan of shortcuts. Or football players. Or fun. She wrote 'Ethics for Atheletes' as a joke, and when everyone took it seriously, she got bitter."

**Brad**: "She wrote that?"

**Alex**: "Note the spelling. 'Atheletes.' She was making a point. No one got it."

---

## ACT 2: THE FOUR PHILOSOPHERS

---

### Scene 2.1: Plato's Cave — Shadow Tutorial

**Setting**: `platos_cave` — Dark, shadow puppets on wall  
**Music**: `music_cave.mp3` — ethereal, mysterious  
**Prerequisite**: Have DESK KEY

#### Entering the Cave
```
The basement of the Philosophy Building is... actually a cave? 

Shadows dance on the walls. There's a shadow puppet theater set up, 
though you don't see anyone operating it. The shadows move on their own.

A toga-clad SHADOW on the wall gestures at you.
```

#### Node: START
**Plato**: "Welcome, seeker. You who have lived your life watching shadows on the wall. You who mistake the game for the True."

**Brad**: "Um... hello?"

**Plato**: "I am Plato. Or rather, I am the shadow of Plato. Or rather, you are seeing only the shadow of my teaching, which itself is but a shadow of the True Form of Understanding."

**Brad**: "...What?"

**Plato**: "Let me demonstrate. Look at the wall."

[Shadow Puzzle Begins]

#### The Shadow Sorting Puzzle
**Plato**: "These shadows represent concepts as you understand them — confused, partial, imperfect. You must arrange them to reveal their True Forms."

**Player Task**: Sort shadows by dragging them into correct positions

**Solution**: Arrange shadows from most abstract (Justice, Virtue) to most concrete (Ball, Game, Touchdown)

**On Success**:
**Plato**: "You begin to see. The True Football exists in the realm of Forms. The ball you throw is but a shadow. But the IDEA of the ball — that is eternal."

**Brad**: "So... I can't actually throw the perfect ball?"

**Plato**: "You can only approximate it. This is the tragedy and beauty of existence."

**Brad**: "...Coach is gonna hate this."

---

### Scene 2.2: The Trolley Station — Mill's Dilemma

**Setting**: `trolley_station` — Red trolley, two tracks, lever  
**Music**: `music_trolley.mp3` — tense, dramatic  
**Prerequisite**: Alex mentioned trolley

#### The Setup
```
The campus trolley sits on the tracks. A MAN IN A CONDUCTOR UNIFORM 
stands nearby, holding a lever, looking distressed.

He's muttering to himself. "The greater good... but what IS the good?"
```

#### Node: START
**Mill**: "Oh! A student. Finally. I've been waiting for someone to help me with this... situation."

**Brad**: "What situation?"

**Mill**: "The trolley. It's... it's about to move. On Track A, there are five philosophy majors who can't find jobs. On Track B, there is one business major who will invent job-destroying AI."

[He holds up the lever]

**Mill**: "If I do nothing, the trolley hits the five. If I pull the lever, it hits the one. The mathematics is simple: five versus one. But the QUALITY of those lives... the contribution to happiness..."

**Brad**: "This is the trolley problem. This is an ACTUAL trolley problem."

**Mill**: "They're all actual, my boy. Every choice is a trolley, and we are all conductors."

#### The Choice
**Player Options**:
1. [Pull the lever] — Business major dies
2. [Don't pull] — Philosophy majors die
3. "Can't we just stop the trolley?"

#### Path 1: Pull the Lever (Utilitarian)
**Mill**: "The many over the few. The mathematics of happiness. You have chosen... utilitarianism."

[You receive: UTILITARIAN BADGE]

**Mill**: "Remember this: you chose the greater good. But remember too — you chose. The weight is yours."

#### Path 2: Don't Pull (Deontological)
**Mill**: "You refused to play God. You let events unfold as they would. You have chosen... a different path."

[You receive: DEONTOLOGIST BADGE]

**Mill**: "Inaction is also action. You are still responsible. Never forget."

#### Path 3: Stop the Trolley
**Mill**: "Stop it? But... but the experiment requires..."

[Brad finds an emergency brake]

**Mill**: "You've... you've broken the paradigm. No one has ever... I need to sit down."

[You receive: PRAGMATIST BADGE]

---

### Scene 2.3: The Gym — Nietzsche's Training

**Setting**: `gym` — Weights, books as weights, intensity  
**Music**: `music_gym.mp3` — heavy, intense  
**Prerequisite**: Tried to enter gym

#### Coach Williams
```
Coach Williams — 40-year veteran of the program — is bench-pressing 
what appears to be the entire Western canon. Hegel is the heaviest.

He racks the barbell with a CLANG and looks at you with intense, 
unsettling focus.
```

#### Node: START
**Coach/Nietzsche**: "Armstrong. The backup. The one who never had to try."

**Brad**: "Coach, I need to—"

**Coach/Nietzsche**: "Need? NEED is for the weak. The slave morality. You do not NEED. You WILL. Or you do not will. There is no need."

**Brad**: "...What happened to 'drop and give me twenty'?"

**Coach/Nietzsche**: "Drop and give me twenty... pages of Hegel. The Phenomenology of Spirit. You will lift the weight of Western thought, Armstrong. You will become the Übermensch of this team."

#### The Heavy Lifting Puzzle
**Coach/Nietzsche**: "These books — they are organized wrong. By subject. Philosophy should be organized by WEIGHT. By the heaviness of the ideas."

**Player Task**: Arrange books from lightest to heaviest

**Correct Order**:
1. Aesthetics (lightest)
2. Logic
3. Ethics
4. Metaphysics
5. Hegel (heaviest)

**On Success**:
**Coach/Nietzsche**: "You feel it now. The will to power. Not power OVER others — power over YOURSELF. Self-overcoming. You are becoming, Armstrong. You are becoming."

**Brad**: "Coach... are you... Nietzsche?"

[Long pause]

**Coach/Nietzsche**: "...I've been waiting forty years for someone to notice."

---

### Scene 2.4: The Grounds of Being — Sartre's Judgment

**Setting**: `coffee_shop` — Hipster, exposed brick, Sartre judging  
**Music**: `music_coffee.mp3` — jazz, contemplative  
**Prerequisite**: Alex mentioned meeting here

#### Entering the Coffee Shop
```
The Grounds of Being. Exposed brick, uncomfortable chairs, pretentious menu.

"The Existential Dread Latte" — $6.50
"Categorical Imperative Cold Brew" — $5.00  
"Bad Faith Biscotti" — $3.00

SARTRE stands behind the counter, wiping a cup slowly. He's been 
judging you since you walked in.
```

#### Node: START
**Sartre**: "You. The quarterback. The one who thinks he can become a philosopher in three days."

**Brad**: "I—"

**Sartre**: "You are condemned to be free, quarterback. Condemned. Every choice is yours. Even choosing not to choose. Now — what will you have?"

**Player Options**:
1. "Just a regular coffee."
2. "The Existential Dread Latte."
3. "What do you recommend?"

#### Path 1: Regular Coffee
**Sartre**: "Regular. Safe. Conventional. You choose the path of least resistance. Bad faith, quarterback. You pretend you have no choice, but you chose this."

#### Path 2: Existential Dread
**Sartre**: "Ah. You embrace the absurdity. You acknowledge the void and order it anyway. This... this is authentic."

#### The Latte Art Minigame
**Sartre**: "Now — the art. What will you create in the foam?"

**Player Task**: Draw shape in foam (mouse/touch drag)

**Options**:
- Swan → "Bad faith! You try to be a swan when you are clearly just... foam."
- Heart → "Romantic. Predictable. You define yourself through others."
- Chaos/scribble → "Authentic! You accept that there is no meaning in the foam!"
- Football → [Sartre pauses] "...Surprisingly apt. The game is absurd. You play anyway."

**On Success**:
**Sartre**: "You are still absurd, quarterback. But... less absurd than most."

---

## ACT 3: THE CONFRONTATION

---

### Scene 3.1: The Dean's Office — The Truth

**Setting**: `dean_office` — Power, sports memorabilia, framed "Ethics for Atheletes"  
**Music**: `music_dean.mp3` — power, conflict  
**Prerequisite**: Met all Four Philosophers

#### Entering
```
Dean Harriet Thorne's office is modern, sterile, and intimidating. 
Sports trophies on one wall. Philosophy books on another. 
A framed copy of "Ethics for Atheletes" hangs prominently.

She doesn't look up from her tablet.
```

#### Node: START
**Dean**: "Mr. Armstrong. I wondered when you'd work up the courage."

**Brad**: "Dean Thorne, I—"

**Dean**: "You think a few days of cramming makes you a philosopher? I spent six years on my dissertation. Six years of research, writing, revising. You want to do it in three days because you have a football game?"

[She finally looks up]

**Dean**: "Do you know why I wrote 'Ethics for Atheletes'?"

**Player Options**:
1. "To help athletes?"
2. "As a joke?"
3. "I don't know."

#### The Revelation
**Dean**: "I spelled it 'Atheletes' intentionally. I was making a point. Athletes who don't think. Programs that prioritize winning over education. I thought the misspelling was obvious. I thought people would get it."

[She laughs, bitter]

**Dean**: "No one got it. They published it anyway. It became a bestseller. I made money off the very system I was criticizing. And I kept climbing. Dean of this, VP of that. Now I'm everything I hated."

**Brad**: "Dean Thorne... I don't want a shortcut. I want to understand."

[She studies him]

**Dean**: "You met the Four?"

**Brad**: "Yes."

**Dean**: "And?"

**Brad**: "And... I still don't understand most of it. But I'm trying. Isn't that worth something?"

[Long pause]

**Dean**: "The Thesis Committee meets tomorrow. At noon. If you have a thesis, present it. If you don't..."

[She turns back to her tablet]

**Dean**: "And Brad? I hope you have something. I really do."

---

### Scene 3.2: Thesis Defense — The Boss Battle

**Setting**: `committee_room` — Tribunal atmosphere, three professors  
**Music**: `music_battle.mp3` — epic, orchestral  
**Prerequisite**: Dean gave permission

#### The Setup
```
The Thesis Committee Room. Three professors at a long table. 

DR. SHADOWS (Metaphysics) — hard to look at directly
PROF. HARDING (Epistemology) — sharp, piercing gaze  
DR. CHEN (Ethics) — kindly, sympathetic (not related to Alex)

Alex slips in the back. She gives you a thumbs up.

This is it.
```

#### Battle System: Keyword Matching
Each professor attacks with a philosophical challenge. Brad counters using concepts learned.

**Round 1: Dr. Shadows (Metaphysics)**
**Shadows**: "Mr. Armstrong. Tell me — is the championship game real? Or is it merely a social construct? A collective hallucination we agree to call 'football'?"

**Player Options**:
1. "It's real. We all see it." → [Weak] Shadows: "But do you? Do you really?"
2. "It's a construct, but that doesn't make it less meaningful." → [Good] Shadows: "Interesting..."
3. "The game is a shadow, but the effort is real." → [Perfect] Shadows: "Plato would be proud."

**Round 2: Prof. Harding (Epistemology)**
**Harding**: "How do you KNOW you're a quarterback? Define 'quarterback' for me."

**Player Options**:
1. "I throw the ball." → [Weak] Harding: "But how do you KNOW you throw?"
2. "The team calls me one." → [Good] Harding: "Social verification..."
3. "I know because I choose to be one, every play." → [Perfect] Harding: "Sartre would approve."

**Round 3: Dr. Chen (Ethics)**
**Chen**: "A simple question: Should you be playing in this game?"

**Player Options**:
1. "I earned it." → [Acceptable]
2. "I don't know." → [Acceptable]
3. "I don't know, but I'm going to try to deserve it." → [Perfect] Chen: "That's all any of us can do."

#### Victory
```
The Committee confers in whispers.

Dr. Chen: "Mr. Armstrong... we have reached a decision. Your thesis — 
'Ethics and Athletics: A Philosophical Analysis of Backup Quarterbacks' — 
is... acceptable."

"You have passed."

[Alex cheers from the back]

Dr. Shadows: "But know this — philosophy is not a destination. It is a 
journey. You have begun. Do not stop."

Prof. Harding: "And work on your definition of knowledge."
```

---

## ENDINGS

### Ending A: The Championship (Best)
**Condition**: Passed thesis, high relationship with Alex

**Scene**: Stadium, crowd roaring

```
The game is tied. Fourth quarter. 30 seconds left.

You look to the stands. Alex is there. Miller is there, wearing your 
jersey under his tweed jacket. The Dean is there — she almost smiles.

The snap. The pocket collapses. You see your receiver —

TOUCHDOWN.

In the post-game interview:

"Brad, what were you thinking on that final play?"

You smile. "Nietzsche said 'What does not kill me makes me stronger.' 
But Coach — real Coach, not Nietzsche — he taught me something else. 
He taught me that a team is only as strong as its weakest link, and 
that means we have to lift each other up. That's not just football. 
That's... philosophy."

[Cut to Tecmo Bowl epilogue]
```

### Ending B: The Academic
**Condition**: Passed thesis, chose to study more

```
You don't play in the championship. Bud Armstrong's suspension is 
overturned. He plays. He wins. He doesn't mention you in his speech.

Two years later, you graduate with a real Master's degree. Your thesis — 
now 200 pages — is published. "Ethics and Athletics" becomes required 
reading in sports management programs.

You open a bar: "Brad's Sports Bar & Philosophy Salon." 

The sign outside: "The Unexamined Beer Is Not Worth Drinking."

Miller comes every Thursday. Alex runs the philosophy nights. 
Sometimes, you even understand what Trip is saying.

It's good.
```

### Ending C: The Bud Light
**Condition**: Failed thesis or chose easy path

```
You fail the defense. It's not even close.

But Bud Armstrong's suspension is overturned on a technicality. 
He plays. He wins. The scandal is forgotten.

You go back to being the backup. Nothing learned. Nothing changed.

The cycle continues.

[Game Over — try again?]
```

### Ending D: The Alex (Secret)
**Condition**: Max romance with Alex, passed thesis

```
You pass. You play. You win.

But the real victory is after, in the tunnel, when Alex is waiting.

"I deleted my notes on you," she says. "You're not a case study anymore."

"What am I?"

She smiles. "Complicated. Confusing. Still using football metaphors 
for everything."

"So... what happens now?"

"Now?" She takes your hand. "Now we see if you can learn Heidegger. 
Spoiler: you can't. But I'll enjoy watching you try."

[Tecmo Bowl epilogue shows: RELATIONSHIP STATUS: COMPLICATED]
```

---

## TECMO BOWL EPILOGUE (All Endings)

**Visual**: 8-bit retro graphics, NES-style sprites

```
╔══════════════════════════════════════╗
║     PHILOSOPHY QUEST COMPLETE        ║
║                                      ║
║  PLAYER: BRAD ARMSTRONG              ║
║                                      ║
║  PHILOSOPHY MA: [COMPLETE/FAILED]    ║
║  THESIS GRADE: [A/B/C/F]             ║
║  TOUCHDOWNS: [#]                     ║
║  EXISTENTIAL CRISES: 7               ║
║                                      ║
║  KEY CHOICES:                        ║
║  • Trolley: [Lever/No Lever]         ║
║  • Latte Art: [Shape]                ║
║  • Dean: [Impressed/Not]             ║
║                                      ║
║  RELATIONSHIP STATUS:                ║
║  • Alex: [FRIEND/ROMANCE/STRANGER]   ║
║  • Miller: [RESPECT/DISAPPOINTED]    ║
║                                      ║
║  THANKS FOR PLAYING!                 ║
║  "The unexamined game is not worth    ║
║   playing." — Socrates, probably     ║
╚══════════════════════════════════════╝

[Secret Code for New Game+ displayed if 100% completion]
```

---

## EASTER EGG DIALOGUE

### Looking at Self (Various Locations)

**Frat House**: "You're wearing a football jersey and cargo shorts. Your hair looks like you slept in a dryer. You smell like regret."

**Miller's Office**: "You don't belong here. Yet here you are."

**Plato's Cave**: "Just a shadow of your former self."

**Gym**: "Getting stronger. Philosophically and physically."

**Thesis Defense**: "You're not sure who you are anymore. But that's okay. That's philosophy."

### X-Files References (Looking at Shadows)
**Plato's Cave**: "The truth is out there. In the realm of Forms."

### Philosophy Jokes (Parser Easter Eggs)
**LOOK AT NOTHING**: "The abyss stares back."

**THINK**: "You are. Therefore... you're confused."

**WHY**: "Because. [This is not a sufficient answer in philosophy.]"

**DESCARTES**: "He thinks. Therefore he is. You... you're not so sure."

---

*"All dialogue subject to player choices and parser chaos."*
