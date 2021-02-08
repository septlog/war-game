import { Soldier } from './soldier.js';

/**
 * 骑兵类
 */
export class Cavalry extends Soldier {
  constructor(x, y) {
    super(x, y);
    this.hp = 100;
    this.defence = 1;
    this.attack = 1;
    this.color = 'gold';
    this.cost = 1;
  }
}
