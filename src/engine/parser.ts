/**
 * Text Parser
 * Sierra-style parser for adventure game commands
 */

export interface ParsedCommand {
  verb: string;
  noun?: string;
  target?: string;
  preposition?: string;
  full: string;
}

export class Parser {
  private verbs: string[] = [
    'go', 'walk', 'run', 'move',
    'look', 'examine', 'inspect', 'check', 'l',
    'take', 'get', 'pick', 'grab',
    'use', 'activate', 'operate',
    'talk', 'ask', 'speak', 'tell',
    'give', 'show', 'hand',
    'open', 'close', 'push', 'pull',
    'inventory', 'i',
    'help', 'h'
  ];

  private prepositions: string[] = [
    'to', 'from', 'with', 'at', 'on', 'in', 'under', 'behind'
  ];

  private synonyms: Record<string, string> = {
    'n': 'go', 'north': 'go',
    's': 'go', 'south': 'go',
    'e': 'go', 'east': 'go',
    'w': 'go', 'west': 'go',
    'l': 'look',
    'i': 'inventory',
    'h': 'help'
  };

  parse(input: string): ParsedCommand {
    const words = input.toLowerCase().trim().split(/\s+/);
    
    if (words.length === 0) {
      return { verb: '', full: input };
    }

    // Handle direction shortcuts
    const firstWord = words[0];
    if (['n', 's', 'e', 'w', 'north', 'south', 'east', 'west'].includes(firstWord)) {
      return {
        verb: 'go',
        noun: this.normalizeDirection(firstWord),
        full: input
      };
    }

    // Get verb
    let verb = this.synonyms[firstWord] || firstWord;
    
    // Check if it's a valid verb
    if (!this.verbs.includes(verb)) {
      verb = firstWord; // Keep original if not in list
    }

    // Parse rest of command
    const rest = words.slice(1);
    let noun: string | undefined;
    let target: string | undefined;
    let preposition: string | undefined;

    // Look for preposition
    const prepIndex = rest.findIndex(w => this.prepositions.includes(w));
    
    if (prepIndex >= 0) {
      preposition = rest[prepIndex];
      noun = rest.slice(0, prepIndex).join(' ');
      target = rest.slice(prepIndex + 1).join(' ');
    } else {
      noun = rest.join(' ');
    }

    return {
      verb,
      noun: noun || undefined,
      target: target || undefined,
      preposition,
      full: input
    };
  }

  private normalizeDirection(dir: string): string {
    const map: Record<string, string> = {
      'n': 'north', 'north': 'north',
      's': 'south', 'south': 'south',
      'e': 'east', 'east': 'east',
      'w': 'west', 'west': 'west'
    };
    return map[dir] || dir;
  }

  // Add vocabulary from game scripts
  addVocabulary(nouns: string[], verbs: string[]) {
    this.verbs.push(...verbs.filter(v => !this.verbs.includes(v)));
  }
}
