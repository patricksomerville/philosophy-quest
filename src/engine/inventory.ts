/**
 * Inventory System
 * Manages player inventory with item interactions
 */

export interface InventoryItem {
  id: string;
  name: string;
  description: string;
  quantity?: number;
  usable?: boolean;
  combinable?: boolean;
}

export class Inventory {
  private items: Map<string, InventoryItem> = new Map();

  add(item: InventoryItem): boolean {
    if (this.items.has(item.id)) {
      // Stack if possible
      const existing = this.items.get(item.id)!;
      if (existing.quantity !== undefined) {
        existing.quantity = (existing.quantity || 1) + (item.quantity || 1);
        return true;
      }
      return false; // Can't stack unique items
    }
    
    this.items.set(item.id, item);
    return true;
  }

  remove(itemId: string): boolean {
    const item = this.items.get(itemId);
    if (item) {
      if (item.quantity && item.quantity > 1) {
        item.quantity--;
        return true;
      }
      return this.items.delete(itemId);
    }
    return false;
  }

  has(itemId: string): boolean {
    return this.items.has(itemId);
  }

  get(itemId: string): InventoryItem | undefined {
    return this.items.get(itemId);
  }

  getAll(): InventoryItem[] {
    return Array.from(this.items.values());
  }

  getItems(): string[] {
    return Array.from(this.items.keys());
  }

  use(itemId: string, target?: string): boolean {
    const item = this.items.get(itemId);
    if (!item || !item.usable) {
      return false;
    }
    
    // TODO: Implement use logic with targets
    
    // Consume if single use
    if (!item.quantity || item.quantity <= 1) {
      this.remove(itemId);
    } else {
      item.quantity!--;
    }
    
    return true;
  }

  combine(item1: string, item2: string): InventoryItem | null {
    // TODO: Implement crafting/combining system
    return null;
  }

  clear() {
    this.items.clear();
  }
}
