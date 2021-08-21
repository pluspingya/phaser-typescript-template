import Phaser from 'phaser';
import MainScene  from '../Scenes/MainScene';

export default class PreloadScene extends Phaser.Scene {
  static readonly key = 'PreloadScene';

  constructor() {
    super({ key: PreloadScene.key });
  }

  preload(): void {
    //TODO: Preload assets in here
    this.load.image('cube', 'assets/images/cube.png');
  }

  create(): void {
    this.scene.start(MainScene.key);
  }
}
