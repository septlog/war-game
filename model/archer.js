import { Soldier } from './soldier.js';

/**
 * 弓箭手类
 */
export class Archer extends Soldier {
  constructor(x, y) {
    super(x, y);
    this.hp = 1;
    this.defence = 1;
    this.attack = 1;
    this.color = '#0077ff';
  }
  deploy(game, ctx, archer) {
    let size = game.size;
    ctx.fillStyle = this.color;
    if (!game.soldierList.has('x' + this.x + 'y' + this.y)) {
      ctx.fillRect(this.x * size, this.y * size, size, size);
      game.soldierList.add('x' + this.x + 'y' + this.y);
      game.archerList.add(archer);
    } else {
      game.soldierList.delete('x' + this.x + 'y' + this.y);
      ctx.clearRect(this.x * size, this.y * size, size, size);
      game.archerList.delete(archer);
    }
  }

  deployMulti(game, ctx, archer) {
    let size = game.size;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * size, this.y * size, size, size);
    game.soldierList.add('x' + this.x + 'y' + this.y);
    game.archerList.add(archer);
  }

  findEnemy(game) {
    console.log(this.x, this.y);
  }

  move() {}
}
