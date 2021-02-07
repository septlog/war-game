import { Game } from './game.js';
import { Player } from './player.js';
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const layer = document.querySelector('#layer');
const layerCtx = layer.getContext('2d');
const width = canvas.width;
const height = canvas.height;
const size = 10;

const game = new Game(width, height, size);
game.start();
game.draw(ctx);

const player = new Player(100000, 10, 10);
player.arrange(game, layerCtx);

document.getElementById('start').addEventListener('click', (e) => {
  game.roll();
});
