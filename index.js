import { Game } from './game.js';
import { Player } from './player.js';
const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

const layer = document.querySelector('#layer');
const layerCtx = layer.getContext('2d');

const animate = document.querySelector('#animate');
const animateCtx = animate.getContext('2d');

const width = canvas.width;
const height = canvas.height;
const size = 10;

const game = new Game(width, height, size, layerCtx, animateCtx);
game.start();
game.draw(ctx);

const player = new Player(game, layerCtx);
player.arrange(game, layerCtx);

document.getElementById('start').addEventListener('click', (e) => {
  setInterval(() => {
    game.roll(layerCtx);
  }, 300);
});
