/**
 * Philosophy Quest: Canonical Game Content
 * Based on July 2025 original vision + merged expansions
 * 
 * Protagonist: Brad (not Brock)
 * Key Characters: Alex (grad student), Prof Miller, The Dean, Four Philosophers
 */

import { Scene } from '../engine/scene';
import { DialogTree } from '../engine/dialog';
import { InventoryItem } from '../engine/inventory';

// =============================================================================
// CHARACTERS
// =============================================================================

export const CHARACTERS = {
  brad: {
    id: 'brad',
    name: 'Brad',
    description: 'Backup QB, fraternity legend, accidental philosopher. Currently holding a red solo cup and an incomplete thesis from 2021.',
    sprite: 'char_brad.png'
  },
  alex: {
    id: 'alex',
    name: 'Alex Chen',
    description: 'PhD candidate in Philosophy of Sport. Cute, smart, and writing a dissertation on "Ethics in Competitive Athletics." She finds Brad\'s situation hilarious but genuinely wants to help.',
    sprite: 'char_alex.png' // TODO: Create
  },
  profMiller: {
    id: 'profMiller',
    name: 'Professor Reginald Miller',
    description: 'Old-school philosophy professor. Wears tweed, smells like old books, secretly keeps whiskey in his desk. He\'s skeptical but sees potential in Brad.',
    sprite: 'char_prof_miller.png'
  },
  deanThorne: {
    id: 'deanThorne',
    name: 'Dean Harriet Thorne',
    description: 'Dean of Athletics. Former philosophy PhD who "sold out" for sports administration. She wrote the "Ethics for Atheletes" textbook. Antagonist but not villain.',
    sprite: 'char_dean.png' // TODO: Create
  },
  plato: {
    id: 'plato',
    name: 'Plato (The Shadow)',
    description: 'Appears as a shadow puppet on the cave wall. Speaks entirely in allegories that Brad doesn\'t understand.',
    sprite: 'char_plato.png' // TODO: Create
  },
  mill: {
    id: 'mill',
    name: 'John Stuart Mill (The Conductor)',
    description: 'Campus trolley conductor. Obsessed with maximizing happiness. Always carrying a lever.',
    sprite: 'char_mill.png' // TODO: Create
  },
  nietzsche: {
    id: 'nietzsche',
    name: 'Coach Williams / Nietzsche',
    description: 'Football coach for 40 years. Secretly Friedrich Nietzsche in disguise. His pep talks are actually existential philosophy.',
    sprite: 'char_nietzsche.png' // TODO: Create
  },
  sartre: {
    id: 'sartre',
    name: 'Jean-Paul Sartre (The Barista)',
    description: 'Barista at The Grounds of Being. Judges everyone\'s choices while making elaborate latte art.',
    sprite: 'char_sartre.png' // TODO: Create
  },
  chad: {
    id: 'chad',
    name: 'Chad',
    description: 'Frat brother. Muscular, loyal, not bright. Brad\'s best friend since freshman year.',
    sprite: 'char_chad.png' // TODO: Create
  },
  trip: {
    id: 'trip',
    name: 'Trip',
    description: 'Stoner philosopher. Actually understands Hegel but is too high to explain it coherently.',
    sprite: 'char_trip.png' // TODO: Create
  }
};

// =============================================================================
// SCENES
// =============================================================================

export const SCENES: Scene[] = [
  {
    id: 'frat_house',
    description: `The frat house is chaos. Red solo cups everywhere. Someone drew philosophical quotes on the walls in Sharpie (mostly misspelled). Through the haze, you can see the TV showing SportsCenter on loop. Bud Armstrong's scandal is the lead story. There's a strange GREEN LIQUID in a beaker on the coffee table. The PHILOSOPHY BOOK is still sitting on the couch where you left it... three years ago.`,
    background: 'background_frat_party.png',
    objects: [
      {
        id: 'green_liquid',
        description: 'A mysterious green liquid in a beaker. Chad claims it\'s "experimental protein shake."',
        synonyms: ['beaker', 'liquid', 'protein']
      },
      {
        id: 'philosophy_book',
        description: 'Your old philosophy textbook, "Ethics for Atheletes." You never returned it. There\'s a coffee stain shaped like Florida on chapter 7.',
        synonyms: ['book', 'textbook', 'ethics']
      },
      {
        id: 'red_cup',
        description: 'The standard red solo cup. There are approximately 200 of these in the room.',
        synonyms: ['cup', 'solo', 'beer']
      },
      {
        id: 'phone',
        description: 'Your phone is buzzing. It\'s a voicemail from someone named "Dean Thorne."',
        synonyms: ['cell', 'mobile']
      }
    ],
    actors: [
      {
        id: 'chad',
        description: 'Chad is doing a keg stand. He\'s been upside down for an impressively long time.',
        dialog: 'chad_intro'
      },
      {
        id: 'trip',
        description: 'Trip is staring at the ceiling. He looks deep in thought. Or just deep in something.',
        dialog: 'trip_intro'
      }
    ],
    exits: {
      north: 'campus_quad',
      east: 'miller_office',
      out: 'campus_quad'
    }
  },
  {
    id: 'miller_office',
    description: `Professor Miller's office is a monument to academic chaos. Books stacked everywhere — some in languages you can't read. A green banker's lamp casts dramatic shadows. There's a PHILOSOPHER BUST on the desk (you think it's Socrates but you're not sure). The air smells like old paper and regret. Miller sits behind his desk, arms crossed, looking at you like you're a particularly disappointing thesis proposal.`,
    background: 'background_prof_millers_office.png',
    objects: [
      {
        id: 'philosopher_bust',
        description: 'A marble bust of... someone important. Greek probably.',
        synonyms: ['bust', 'statue', 'socrates']
      },
      {
        id: 'miller_desk',
        description: 'Cluttered with papers, a rotary phone, and what looks like a very old bottle of scotch.',
        synonyms: ['desk']
      },
      {
        id: 'key',
        description: 'A golden key with a philosopher bust keychain. Engraved with "Investor." Miller\'s joke about your dad.',
        synonyms: ['desk_key', 'keychain']
      }
    ],
    actors: [
      {
        id: 'profMiller',
        description: 'Professor Miller adjusts his glasses and sighs. He expected better from you. He expected anything from you.',
        dialog: 'miller_intro'
      }
    ],
    exits: {
      west: 'frat_house',
      out: 'campus_quad'
    }
  },
  {
    id: 'campus_quad',
    description: 'The campus quad is buzzing with students. You can see the PHILOSOPHY BUILDING to the north, the GYM to the east, and the COFFEE SHOP to the west. Somewhere in the distance, you hear a trolley bell.',
    objects: [
      {
        id: 'statue',
        description: 'A statue of the university founder. Someone put a football helmet on it.',
        synonyms: ['founder', 'monument']
      }
    ],
    actors: [
      {
        id: 'alex',
        description: 'A cute grad student is sitting on a bench, reading something heavy and philosophical. She looks up as you approach.',
        dialog: 'alex_intro'
      }
    ],
    exits: {
      north: 'philosophy_building',
      east: 'gym',
      west: 'coffee_shop',
      south: 'frat_house',
      down: 'platos_cave'
    }
  },
  {
    id: 'platos_cave',
    description: 'The basement of the Philosophy Building is actually... a cave? Shadows dance on the walls. You feel like you\'re about to learn something profound or just get really confused.',
    objects: [
      {
        id: 'shadows',
        description: 'Shadows on the wall seem to be moving in patterns.',
        synonyms: ['wall', 'shadow']
      },
      {
        id: 'puppet',
        description: 'A shadow puppet theater is set up. Someone\'s been using it.',
        synonyms: ['theater', 'puppets']
      }
    ],
    actors: [
      {
        id: 'plato',
        description: 'A shadow on the wall appears to be wearing a toga. It gestures dramatically.',
        dialog: 'plato_intro'
      }
    ],
    exits: {
      up: 'campus_quad'
    }
  },
  {
    id: 'trolley_station',
    description: 'The campus trolley station. A red trolley sits on the tracks. A MAN IN A CONDUCTOR UNIFORM stands nearby, holding a lever and looking concerned.',
    objects: [
      {
        id: 'trolley',
        description: 'A classic red trolley car. The sign says "TO CAMPUS / TO DOWNTOWN."',
        synonyms: ['train', 'tram']
      },
      {
        id: 'lever',
        description: 'A track switching lever. It controls which track the trolley takes.',
        synonyms: ['switch']
      },
      {
        id: 'tracks',
        description: 'Two sets of tracks. One goes left, one goes right.',
        synonyms: ['track', 'rail']
      }
    ],
    actors: [
      {
        id: 'mill',
        description: 'The conductor looks distressed. He keeps muttering about "the greater good."',
        dialog: 'mill_intro'
      }
    ],
    exits: {
      north: 'campus_quad'
    }
  },
  {
    id: 'gym',
    description: 'The athletic facility. Weight room smells like determination and locker room spray. COACH WILLIAMS is bench-pressing what appears to be the entire Western canon.',
    objects: [
      {
        id: 'weights',
        description: 'The weights are labeled with philosophical concepts. "NIETZSCHE" is the heaviest.',
        synonyms: ['dumbbells', 'barbell']
      },
      {
        id: 'bookshelf',
        description: 'A bookshelf of philosophy texts, organized by weight instead of subject.',
        synonyms: ['books', 'shelf']
      }
    ],
    actors: [
      {
        id: 'nietzsche',
        description: 'Coach Williams racks the barbell and looks at you with intense, slightly unsettling focus.',
        dialog: 'nietzsche_intro'
      }
    ],
    exits: {
      west: 'campus_quad'
    }
  },
  {
    id: 'coffee_shop',
    description: 'The Grounds of Being. Hipster coffee shop with exposed brick and uncomfortable chairs. SARTRE is behind the counter, judging your order before you make it.',
    objects: [
      {
        id: 'menu',
        description: 'The menu has drinks like "The Existential Dread Latte" and "Categorical Imperative Cold Brew."',
        synonyms: ['menu_board']
      },
      {
        id: 'espresso_machine',
        description: 'A gleaming espresso machine that looks like it could power a small village.',
        synonyms: ['machine']
      }
    ],
    actors: [
      {
        id: 'sartre',
        description: 'Sartre wipes a cup slowly. He\'s been judging you since you walked in.',
        dialog: 'sartre_intro'
      },
      {
        id: 'alex',
        description: 'Alex is here, working on her laptop. She smiles when she sees you.',
        dialog: 'alex_coffee'
      }
    ],
    exits: {
      east: 'campus_quad'
    }
  }
];

// =============================================================================
// DIALOG TREES
// =============================================================================

export const DIALOG_TREES: DialogTree[] = [
  {
    id: 'chad_intro',
    actor: 'chad',
    root: 'start',
    nodes: {
      start: {
        id: 'start',
        text: '"DUDE! You\'re finally up! You promised you\'d explain Kant to me if I did that keg stand. I did TWO. I want DOUBLE KANT."',
        choices: [
          { text: '"Kant is... about doing the right thing?"', next: 'chad_kant_bad' },
          { text: '"Later, Chad. Have you seen my phone?"', next: 'chad_phone' },
          { text: 'Drink the green liquid', next: 'death_green_liquid' }
        ]
      },
      chad_kant_bad: {
        id: 'chad_kant_bad',
        text: '"That\'s it? Do the right thing? That\'s BO-RING. I thought there would be more... categorical stuff." Chad looks disappointed.',
        choices: [
          { text: '"There is. I\'ll explain later."', next: 'chad_end' }
        ]
      },
      chad_phone: {
        id: 'chad_phone',
        text: '"Your phone? Yeah, it\'s been buzzing like crazy. Someone named DEAN keeps calling. Sounds scary, man. Phone\'s on the couch."',
        choices: [
          { text: '"Thanks, Chad."', next: 'chad_end' }
        ]
      },
      chad_end: {
        id: 'chad_end',
        text: '"Anytime, B-rad. Hey, don\'t drink that green stuff. It\'s my EXPERIMENTAL PROTEIN SHAKE. I think I put too much... philosophy in it."',
        choices: [
          { text: '[End conversation]', next: 'end' }
        ]
      },
      death_green_liquid: {
        id: 'death_green_liquid',
        text: 'DEATH SCENE: You drink the green liquid. It tastes like regret and kale. You immediately pass out.\n\nYou wake up in the hospital. The championship started 4 hours ago. Bud Armstrong is back from suspension. You\'re not even on the team anymore.\n\nGAME OVER.\n\n(Hint: Chad said not to drink it.)',
        choices: [
          { text: '[Try again]', next: 'start' }
        ]
      },
      end: {
        id: 'end',
        text: '',
        choices: []
      }
    }
  },
  {
    id: 'trip_intro',
    actor: 'trip',
    root: 'start',
    nodes: {
      start: {
        id: 'start',
        text: '"Brad. Brad. BRAD. What if... hear me out... what if the football is just a metaphor? For our souls? Like, we\'re all just being thrown from person to person, spiraling through the air of existence..."',
        choices: [
          { text: '"Trip, are you okay?"', next: 'trip_okay' },
          { text: '"That\'s... actually not terrible philosophy."', next: 'trip_suprised' },
          { text: 'Back away slowly', next: 'trip_end' }
        ]
      },
      trip_okay: {
        id: 'trip_okay',
        text: '"I\'m BETTER than okay, my friend. I just read the ENTIRE Phenomenology of Spirit. In one sitting. I understand everything now. EVERYTHING. Ask me anything."',
        choices: [
          { text: '"What\'s the meaning of life?"', next: 'trip_meaning' }
        ]
      },
      trip_meaning: {
        id: 'trip_meaning',
        text: '"42. Wait, no. That\'s not right. That\'s a different book. The meaning of life is... um... give me a second..." Trip stares into space for a very long time.',
        choices: [
          { text: '"I\'ll come back later."', next: 'trip_end' }
        ]
      },
      trip_suprised: {
        id: 'trip_suprised',
        text: '"NOT TERRIBLE? Brad, that\'s the nicest thing you\'ve ever said to me. You\'re growing, man. You\'re becoming... philosophical."',
        choices: [
          { text: '"Thanks, Trip."', next: 'trip_end' }
        ]
      },
      trip_end: {
        id: 'trip_end',
        text: '"Hey Brad? If you see the universe, tell it I said hi."',
        choices: [
          { text: '[End conversation]', next: 'end' }
        ]
      },
      end: {
        id: 'end',
        text: '',
        choices: []
      }
    }
  },
  {
    id: 'miller_intro',
    actor: 'profMiller',
    root: 'start',
    nodes: {
      start: {
        id: 'start',
        text: '"Brad Armstrong. In my office. Three days before graduation. This is either a prank or a tragedy. Let me guess — you\'ve finally remembered that you have an incomplete from my 2021 seminar?"',
        choices: [
          { text: '"I\'m starting in the championship, but I need 32 credits."', next: 'miller_championship' },
          { text: '"It\'s about my thesis..."', next: 'miller_thesis' },
          { text: '"Can you just pass me?"', next: 'miller_nopass' }
        ]
      },
      miller_championship: {
        id: 'miller_championship',
        text: '"The championship? Oh my. And they\'re making you earn the credits first? How... surprisingly ethical of the NCAA." He adjusts his glasses. "72 hours to complete a Master\'s degree. It\'s theoretically possible."',
        choices: [
          { text: '"How?"', next: 'miller_how' }
        ]
      },
      miller_thesis: {
        id: 'miller_thesis',
        text: '"Your thesis. Yes. "Ethics and Athletics: A Philosophical Analysis." Three pages. One of which is just a drawing of a football with a smiley face."',
        choices: [
          { text: '"I can do better."', next: 'miller_proveit' }
        ]
      },
      miller_nopass: {
        id: 'miller_nopass',
        text: '"Absolutely not. I have my integrity. Also, the Dean is watching this department like a hawk after the Bud Armstrong scandal. No free passes."',
        choices: [
          { text: '"Then help me do it legitimately."', next: 'miller_how' }
        ]
      },
      miller_how: {
        id: 'miller_how',
        text: '"You need to: complete your thesis, pass an oral exam, and survive the Thesis Committee. Along the way, you\'ll need to meet with... certain philosophers who haunt this campus."',
        choices: [
          { text: '"Philosophers?"', next: 'miller_philosophers' }
        ]
      },
      miller_philosophers: {
        id: 'miller_philosophers',
        text: '"Plato in the basement. Mill at the trolley. Nietzsche in the gym — though he calls himself Coach Williams. And Sartre at the coffee shop. Each will teach you what you need."',
        choices: [
          { text: '"Where do I start?"', next: 'miller_start' }
        ]
      },
      miller_proveit: {
        id: 'miller_proveit',
        text: '"Then prove it. Take this key. It opens the Philosophy Building archives. And take this — your old textbook. Maybe you\'ll actually read it this time."',
        choices: [
          { text: '[Take key and textbook]', next: 'miller_items' }
        ]
      },
      miller_items: {
        id: 'miller_items',
        text: 'You received the DESK KEY (engraved "Investor" — Miller\'s joke about your father\'s donations) and the ETHICS TEXTBOOK.',
        choices: [
          { text: '"Who can help me with this?"', next: 'miller_alex' }
        ]
      },
      miller_alex: {
        id: 'miller_alex',
        text: '"Look for Alex Chen. Graduate student, Philosophy of Sport. She\'s usually in the quad or at the coffee shop. She\'s... much smarter than you, Brad. Listen to her."',
        choices: [
          { text: '"Thanks, Professor."', next: 'miller_end' }
        ]
      },
      miller_start: {
        id: 'miller_start',
        text: '"Talk to Alex Chen first. She\'s in the quad. Then visit the philosophers. Return to me when you have something resembling a thesis."',
        choices: [
          { text: '"Will do."', next: 'miller_end' }
        ]
      },
      miller_end: {
        id: 'miller_end',
        text: '"And Brad? I\'m rooting for you. Not because I think you can do it, but because... well, it would make a hell of a story."',
        choices: [
          { text: '[End conversation]', next: 'end' }
        ]
      },
      end: {
        id: 'end',
        text: '',
        choices: []
      }
    }
  },
  {
    id: 'alex_intro',
    actor: 'alex',
    root: 'start',
    nodes: {
      start: {
        id: 'start',
        text: '"You\'re Brad Armstrong. The backup QB who\'s suddenly starting in the championship. And you need to write a philosophy thesis in 72 hours." She smiles. "I heard. Everyone\'s heard. It\'s kind of hilarious."',
        choices: [
          { text: '"Can you help me?"', next: 'alex_help' },
          { text: '"It\'s not that funny."', next: 'alex_funny' },
          { text: '"You\'re cute when you\'re judgmental."', next: 'alex_flirt' }
        ]
      },
      alex_help: {
        id: 'alex_help',
        text: '"I can. I\'m Alex Chen — PhD candidate, Philosophy of Sport. I\'m literally writing about ethics in athletics. Your situation is... a perfect case study."',
        choices: [
          { text: '"So you\'ll help?"', next: 'alex_yes' }
        ]
      },
      alex_funny: {
        id: 'alex_funny',
        text: '"It\'s VERY funny. You\'re a Division I quarterback trying to become a philosopher in three days. It\'s like a bad movie. But... I\'m interested in bad movies."',
        choices: [
          { text: '"Will you help me?"', next: 'alex_yes' }
        ]
      },
      alex_flirt: {
        id: 'alex_flirt',
        text: '"And you\'re... exactly what I expected. Charming, slightly desperate, running out of time." She laughs. "I like you, Brad. That\'s why I\'m going to help you."',
        choices: [
          { text: '"Thanks, Alex."', next: 'alex_yes' }
        ]
      },
      alex_yes: {
        id: 'alex_yes',
        text: '"Here\'s the deal: I\'ll guide you through this, but I won\'t compromise my academic integrity. You need to actually learn this stuff. Meet me at the coffee shop later — I\'ll buy you your first existential crisis."',
        choices: [
          { text: '"See you there."', next: 'alex_end' }
        ]
      },
      alex_end: {
        id: 'alex_end',
        text: '"One more thing — avoid the Dean. Harriet Thorne is... not a fan of shortcuts. Or football players. Or fun. Good luck, Brad."',
        choices: [
          { text: '[End conversation]', next: 'end' }
        ]
      },
      end: {
        id: 'end',
        text: '',
        choices: []
      }
    }
  }
];

// =============================================================================
// INVENTORY ITEMS
// =============================================================================

export const STARTING_ITEMS: InventoryItem[] = [
  {
    id: 'red_solo_cup',
    name: 'Red Solo Cup',
    description: 'Standard party cup. Functionally useless but emotionally significant.',
    quantity: 1,
    usable: false,
    combinable: false
  }
];

export const KEY_ITEMS: InventoryItem[] = [
  {
    id: 'desk_key',
    name: 'Desk Key',
    description: 'A golden key with a philosopher bust keychain. Engraved "Investor" — Miller\'s joke about your dad\'s donations. Opens the Philosophy Building archives.',
    quantity: 1,
    usable: true,
    combinable: false
  },
  {
    id: 'ethics_textbook',
    name: '"Ethics for Atheletes"',
    description: 'A 1987 textbook on sports ethics. Note the intentional misspelling. Someone highlighted passages about "character building" and "the spirit of competition."',
    quantity: 1,
    usable: true,
    combinable: false
  }
];

// =============================================================================
// PARSER DEFAULTS
// =============================================================================

export const PARSER_DEFAULTS = {
  unknown: [
    "You can't do that... yet.",
    "The abyss stares back. (Try something else.)",
    "That's not very philosophical.",
    "Your brain hurts just thinking about it.",
    "Maybe try something Brad would actually do?",
    "The universe doesn't understand that command either."
  ],
  cantSee: [
    "You don't see that here.",
    "Where? You don't see that.",
    "Not in this dimension, buddy."
  ],
  cantTake: [
    "You can't take that.",
    "That's not yours to take.",
    "The universe resists your greed."
  ]
};

// =============================================================================
// DEATH MESSAGES
// =============================================================================

export const DEATHS = {
  green_liquid: {
    title: 'ALCHEMY GONE WRONG',
    message: 'You drank Chad\'s "experimental protein shake." It contained protein, creatine, and what appears to be a significant amount of drain cleaner. You wake up in the hospital. The championship started 4 hours ago. Bud Armstrong is back from suspension. You\'re not even on the team anymore.',
    hint: 'Listen to Chad. He said not to drink it.'
  },
  trolley: {
    title: 'ETHICAL DILEMMA SOLVED YOU',
    message: 'You stood on the trolley tracks too long, thinking about the moral implications. The trolley did not share your hesitation.',
    hint: 'Sometimes you need to pull the lever.'
  },
  existential_crisis: {
    title: 'THE VOID CLAIMS ALL',
    message: 'You pondered the meaning of existence for too long without caffeine. Sartre warned you about this.',
    hint: 'Get coffee before questioning reality.'
  }
};
