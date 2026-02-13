/**
 * Dialog System
 * Manages conversation trees and NPC interactions
 */

export interface DialogChoice {
  text: string;
  next: string;
  condition?: string;
  action?: string;
}

export interface DialogNode {
  id: string;
  text: string;
  choices: DialogChoice[];
  condition?: string;
  action?: string;
}

export interface DialogTree {
  id: string;
  actor: string;
  root: string;
  nodes: Record<string, DialogNode>;
}

export class DialogSystem {
  private trees: Map<string, DialogTree> = new Map();
  private currentTree: string | null = null;
  private currentNode: string | null = null;
  private history: string[] = [];

  loadDialog(tree: DialogTree) {
    this.trees.set(tree.id, tree);
  }

  startDialog(treeId: string): DialogNode | null {
    const tree = this.trees.get(treeId);
    if (tree) {
      this.currentTree = treeId;
      this.currentNode = tree.root;
      this.history = [tree.root];
      return tree.nodes[tree.root];
    }
    return null;
  }

  choose(choiceIndex: number): DialogNode | null {
    const tree = this.currentTree ? this.trees.get(this.currentTree) : null;
    if (!tree || !this.currentNode) return null;

    const node = tree.nodes[this.currentNode];
    const choice = node.choices[choiceIndex];
    
    if (choice) {
      this.currentNode = choice.next;
      this.history.push(choice.next);
      return tree.nodes[choice.next];
    }
    
    return null;
  }

  getCurrentNode(): DialogNode | null {
    const tree = this.currentTree ? this.trees.get(this.currentTree) : null;
    if (tree && this.currentNode) {
      return tree.nodes[this.currentNode];
    }
    return null;
  }

  getAvailableChoices(): DialogChoice[] {
    const node = this.getCurrentNode();
    return node?.choices || [];
  }

  isDialogActive(): boolean {
    return this.currentTree !== null;
  }

  endDialog() {
    this.currentTree = null;
    this.currentNode = null;
  }

  getHistory(): string[] {
    return [...this.history];
  }
}
