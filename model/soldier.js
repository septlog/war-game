export class Soldier {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  findEnemy(game) {
    let nearest = Number.MAX_VALUE;
    let nearestPoint;
    game.soldierMap.forEach((value, key) => {
      let [x, y] = key.split(' ');

      let l = Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2);
      if (l < nearest && l !== 0) {
        nearest = l;
        nearestPoint = [x, y];
      }
    });
    return nearestPoint;
  }

  move(game, ctx, size) {
    let nearestPoint = this.findEnemy(game);
    if (nearestPoint) {
      let [x, y] = nearestPoint;
      let l = Math.pow(x - this.x, 2) + Math.pow(y - this.y, 2);
      if (l == 1) {
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

  tryAttack(game, point) {
    let [x, y] = point;
    let size = game.size;
    game.soldierMap.delete(x + ' ' + y);
    game.layerCtx.clearRect(x * size, y * size, size, size);

    game.animateCtx.fillStyle = 'green';
    game.animateCtx.fillRect(x * size, y * size, size, size);
    setTimeout(() => {
      game.animateCtx.clearRect(x * size, y * size, size, size);
    }, 100);
  }
}
