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

  move(game, ctx, size) {
    let nearestPoint = this.findEnemy(game);
    if (nearestPoint) {
      let [x, y] = nearestPoint;
      let l = Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2);
      if (l == 2 || l == 4) {
        return [x, y];
      }
      let choice = Math.floor(Math.random() * 2);
      if (choice) {
        if (this.x < x) {
          ctx.clearRect(this.x * size, this.y * size, size, size);
          let soldier = game.soldierMap.get(this.x + ' ' + this.y);
          game.soldierMap.delete(this.x + ' ' + this.y);
          this.x = this.x + 1;
          soldier.x = this.x;
          game.soldierMap.set(this.x + ' ' + this.y, soldier);
          ctx.fillStyle = soldier.color;
          ctx.fillRect(this.x * size, this.y * size, size, size);
        } else if (this.x > x) {
          ctx.clearRect(this.x * size, this.y * size, size, size);
          let soldier = game.soldierMap.get(this.x + ' ' + this.y);
          game.soldierMap.delete(this.x + ' ' + this.y);
          this.x = this.x - 1;
          soldier.x = this.x;
          game.soldierMap.set(this.x + ' ' + this.y, soldier);
          ctx.fillStyle = soldier.color;
          ctx.fillRect(this.x * size, this.y * size, size, size);
        }
      } else {
        if (this.y < y) {
          ctx.clearRect(this.x * size, this.y * size, size, size);
          let soldier = game.soldierMap.get(this.x + ' ' + this.y);
          game.soldierMap.delete(this.x + ' ' + this.y);
          this.y = this.y + 1;
          soldier.y = this.y;
          game.soldierMap.set(this.x + ' ' + this.y, soldier);
          ctx.fillStyle = soldier.color;
          ctx.fillRect(this.x * size, this.y * size, size, size);
        } else if (this.y > y) {
          ctx.clearRect(this.x * size, this.y * size, size, size);
          let soldier = game.soldierMap.get(this.x + ' ' + this.y);
          game.soldierMap.delete(this.x + ' ' + this.y);
          this.y = this.y - 1;
          soldier.y = this.y;
          game.soldierMap.set(this.x + ' ' + this.y, soldier);
          ctx.fillStyle = soldier.color;
          ctx.fillRect(this.x * size, this.y * size, size, size);
        }
      }
    }
  }
}
