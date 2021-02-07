import { Soldier } from './soldier.js';

/**
 * 骑兵类
 */
export class Cavalry extends Soldier {
  constructor(x, y) {
    super(x, y);
    this.hp = 1;
    this.defence = 1;
    this.attack = 1;
    this.color = 'gold';
    this.cost = 1;
  }
  deploy(game, ctx, cavalry) {
    let size = game.size;
    ctx.fillStyle = this.color;
    if (!game.soldierList.has('x' + this.x + 'y' + this.y)) {
      ctx.fillRect(this.x * size, this.y * size, size, size);
      game.soldierList.add('x' + this.x + 'y' + this.y);
      game.cavalryList.add(cavalry);
    } else {
      game.soldierList.delete('x' + this.x + 'y' + this.y);
      ctx.clearRect(this.x * size, this.y * size, size, size);
      game.cavalryList.add(cavalry);
    }
  }
  deployMulti(game, ctx, cavalry) {
    let size = game.size;
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x * size, this.y * size, size, size);
    game.soldierList.add('x' + this.x + 'y' + this.y);
    game.cavalryList.add(cavalry);
  }

  findEnemy(game) {
    console.log(this.x, this.y);
  }
}
