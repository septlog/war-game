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
}
