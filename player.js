import { Cavalry } from './model/cavalry.js';
import { Infantry } from './model/infantry.js';
import { Archer } from './model/archer.js';
export class Player {
  /**
   *
   * @param {number} money - 金钱
   * @param {number} cavalryNumber - 骑兵
   * @param {number} infantryNumber - 步兵
   * @param {number} archerNumber - 弓箭手
   */
  constructor(money, cavalryNumber, infantryNumber, archerNumber) {
    this.money = money;
    this.cavalryNumber = cavalryNumber;
    this.infantryNumber = infantryNumber;
    this.archerNumber = archerNumber;
  }
  /**
   *
   * @param {number} num - 数量
   */
  buyCavalry(num) {}
  /**
   *
   * @param {number} num - 数量
   */
  buyInfantry(num) {}
  /**
   *
   * @param {number} num - 数量
   */
  buyArcher(num) {}
  /**
   * 排兵布阵
   */
  arrange(game, ctx) {
    canvas.addEventListener('mousedown', (e) => {
      let x = Math.floor(e.offsetX / game.size);
      let y = Math.floor(e.offsetY / game.size);
      switch (game.chosen) {
        case '骑兵':
          let cavalry = new Cavalry(x, y);
          cavalry.deploy(game, ctx, cavalry);
          break;
        case '步兵':
          let infantry = new Infantry(x, y);
          infantry.deploy(game, ctx, infantry);
          break;
        case '弓箭手':
          let archer = new Archer(x, y);
          archer.deploy(game, ctx, archer);
          break;
        default:
          break;
      }
    });

    canvas.addEventListener('mousemove', (e) => {
      if (e.ctrlKey) {
        let x = Math.floor(e.offsetX / game.size);
        let y = Math.floor(e.offsetY / game.size);
        switch (game.chosen) {
          case '骑兵':
            let cavalry = new Cavalry(x, y);
            cavalry.deployMulti(game, ctx, cavalry);
            break;
          case '步兵':
            let infantry = new Infantry(x, y);
            infantry.deployMulti(game, ctx, infantry);
            break;
          case '弓箭手':
            let archer = new Archer(x, y);
            archer.deployMulti(game, ctx, archer);
            break;
          default:
            break;
        }
      }
    });
  }
}
