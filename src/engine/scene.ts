/**
 * Scene Manager
 * Handles scene loading, transitions, and rendering
 */

export interface SceneObject {
  id: string;
  description: string;
  state?: string;
  synonyms?: string[];
}

export interface SceneActor {
  id: string;
  description: string;
  dialog?: string;
}

export interface Scene {
  id: string;
  description: string;
  background?: string;
  objects: SceneObject[];
  actors: SceneActor[];
  exits: Record<string, string>;
}

export class SceneManager {
  private scenes: Map<string, Scene> = new Map();
  private currentScene: string = '';

  loadScene(scene: Scene) {
    this.scenes.set(scene.id, scene);
  }

  loadScenes(scenes: Scene[]) {
    scenes.forEach(s => this.loadScene(s));
  }

  setCurrentScene(sceneId: string) {
    if (this.scenes.has(sceneId)) {
      this.currentScene = sceneId;
    }
  }

  getCurrentScene(): Scene | undefined {
    return this.scenes.get(this.currentScene);
  }

  getScene(id: string): Scene | undefined {
    return this.scenes.get(id);
  }

  hasExit(direction: string): boolean {
    const scene = this.getCurrentScene();
    return scene ? direction in scene.exits : false;
  }

  getExit(direction: string): string | undefined {
    const scene = this.getCurrentScene();
    return scene?.exits[direction];
  }

  findObject(name: string): SceneObject | undefined {
    const scene = this.getCurrentScene();
    return scene?.objects.find(o => 
      o.id === name || o.synonyms?.includes(name)
    );
  }

  findActor(name: string): SceneActor | undefined {
    const scene = this.getCurrentScene();
    return scene?.actors.find(a => a.id === name);
  }

  removeObject(objectId: string) {
    const scene = this.getCurrentScene();
    if (scene) {
      scene.objects = scene.objects.filter(o => o.id !== objectId);
    }
  }

  addObject(object: SceneObject) {
    const scene = this.getCurrentScene();
    if (scene) {
      scene.objects.push(object);
    }
  }
}
