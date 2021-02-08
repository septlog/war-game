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
  constructor(game, ctx, money, cavalryNumber, infantryNumber, archerNumber) {
    this.game = game;
    this.ctx = ctx;
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
  arrange() {
    canvas.addEventListener('mousedown', (e) => {
      let x = Math.floor(e.offsetX / this.game.size);
      let y = Math.floor(e.offsetY / this.game.size);
      switch (this.game.chosen) {
        case '骑兵':
          let cavalry = new Cavalry(x, y);
          this.deploy(cavalry);
          break;
        case '步兵':
          let infantry = new Infantry(x, y);
          this.deploy(infantry);
          break;
        case '弓箭手':
          let archer = new Archer(x, y);
          this.deploy(archer);
          break;
        default:
          break;
      }
    });

    canvas.addEventListener('mousemove', (e) => {
      if (e.ctrlKey) {
        let x = Math.floor(e.offsetX / this.game.size);
        let y = Math.floor(e.offsetY / this.game.size);
        switch (this.game.chosen) {
          case '骑兵':
            let cavalry = new Cavalry(x, y);
            this.deployMulti(cavalry);
            break;
          case '步兵':
            let infantry = new Infantry(x, y);
            this.deployMulti(infantry);
            break;
          case '弓箭手':
            let archer = new Archer(x, y);
            this.deployMulti(archer);
            break;
          default:
            break;
        }
      }
    });
  }

  deploy(soldier) {
    if (this.soldierExist(soldier)) {
      this.deleteSoldier(soldier);
    } else {
      this.addSoldier(soldier);
    }
  }

  deployMulti(soldier) {
    if (!this.soldierExist(soldier)) {
      this.addSoldier(soldier);
    }
  }

  addSoldier(soldier) {
    let size = this.game.size;
    this.ctx.fillStyle = soldier.color;
    this.ctx.fillRect(soldier.x * size, soldier.y * size, size, size);
    this.game.soldierMap.set(soldier.x + ' ' + soldier.y, soldier);
  }

  deleteSoldier(soldier) {
    let size = this.game.size;
    this.game.soldierMap.delete(soldier.x + ' ' + soldier.y);
    this.ctx.clearRect(soldier.x * size, soldier.y * size, size, size);
  }
  /**
   * 士兵是否存在
   * @param {Soldier} soidler - 士兵
   */
  soldierExist(soidler) {
    return this.game.soldierMap.has(soidler.x + ' ' + soidler.y);
  }
}
