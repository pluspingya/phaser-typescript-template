import Phaser from 'phaser';

import PreloadScene from './scripts/Scenes/PreloadScene';
import MainScene from './scripts/Scenes/MainScene';

const config = {
  type: Phaser.AUTO,
  width: window.innerWidth,
  height: window.innerHeight,
  scene: [PreloadScene, MainScene],
};

window.addEventListener('load', () => {
  const game = new Phaser.Game(config);
  game.scale.scaleMode = Phaser.Scale.ScaleModes.FIT;
});