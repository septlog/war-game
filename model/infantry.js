import { Soldier } from './soldier.js';

/**
 * 步兵类
 */
export class Infantry extends Soldier {
  constructor(x, y) {
    super(x, y);
    this.hp = 1;
    this.defence = 1;
    this.attack = 1;
    this.color = 'brown';
    this.cost = 1;
  }
  deploy(game, ctx, infantry) {
    let size = game.size;
    ctx.fillStyle = this.color;
    if (!game.soldierList.has('x' + this.x + 'y' + this.y)) {
      ctx.fillRect(this.x * size, this.y * size, size, size);
      game.soldierList.add('x' + this.x + 'y' + this.y);
      game.infantryList.add(infantry);
    } else {
      game.soldierList.delete('x' + this.x + 'y' + this.y);
      ctx.clearRect(this.x * size, this.y * size, size, size);
      game.infantryList.delete(infantry);
    }
  }
  /**
   * 一次添加多个步兵
   * @param {*} game
   * @param {*} ctx
   * @param {*} infantry
   */
  deployMulti(game, ctx, infantry) {
    if (!game.soldierList.has('x' + this.x + 'y' + this.y)) {
      let size = game.size;
      ctx.fillStyle = this.color;
      ctx.fillRect(this.x * size, this.y * size, size, size);
      game.soldierList.add('x' + this.x + 'y' + this.y);
      game.infantryList.add(infantry);
    }
  }
  findEnemy(game) {
    console.log(this.x, this.y);
  }
}
