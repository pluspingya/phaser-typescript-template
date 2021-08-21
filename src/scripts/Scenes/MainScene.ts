import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  static readonly key = 'MainScene';

  constructor() {
    super({ key: MainScene.key });
  }

  create(): void {
    //TODO: Create game objects in here
    const sprite = new Phaser.GameObjects.Sprite(this, this.cameras.main.centerX, this.cameras.main.centerY , 'cube');
    this.add.existing(sprite);
  }

  update(): void {
    //TODO: Update game objects in here
  }
}
