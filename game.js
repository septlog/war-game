export class Game {
  constructor(width, height, size, layerCtx, animateCtx) {
    this.width = width;
    this.height = height;
    this.size = size;
    this.layerCtx = layerCtx;
    this.chosen = '骑兵';
    this.zero = 0;
    this.infantrySet = new Set();
    this.cavalrySet = new Set();
    this.archerSet = new Set();
    this.soldierMap = new Map();
    this.animateCtx = animateCtx;
  }
  start() {
    console.log('游戏开始！');
    document
      .getElementById('default-chosen')
      .style.setProperty('background', 'gray');
    this.init();
  }

  init() {
    const buttons = document.getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].onclick = () => {
        // 将按钮背景样式清空
        for (let i = 0; i < buttons.length; i++) {
          buttons[i].style.removeProperty('background-color');
        }
        console.log(`${buttons[i].innerText} is chosen.`);
        this.chosen = buttons[i].innerText;
        buttons[i].style.background = 'gray';
      };
    }
  }

  /**
   *
   * @param {CanvasRenderingContext2D} ctx - ctx
   */
  draw(ctx) {
    for (let i = 1; i < this.height / this.size; i++) {
      ctx.beginPath();
      ctx.lineWidth = 0.5;
      ctx.moveTo(this.zero, i * this.size);
      ctx.lineTo(this.width, i * this.size);
      ctx.stroke();
    }
    for (let i = 1; i < this.width / this.size; i++) {
      ctx.beginPath();
      ctx.moveTo(i * this.size, this.zero);
      ctx.lineTo(i * this.size, this.height);
      ctx.stroke();
    }
  }
  /**
   * 开始打仗
   */
  roll(ctx) {
    let map = new Map();
    this.soldierMap.forEach((value, key) => {
      map.set(key, value);
    });
    map.forEach((value, key) => {
      if (this.soldierMap.has(key)) {
        let point = value.move(this, ctx, this.size);
        if (point) {
          value.tryAttack(this, point);
        }
      }
    });
  }

  getSoldierAtPoint(point) {}
}
