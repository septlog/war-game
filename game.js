export class Game {
  constructor(width, height, size) {
    this.width = width;
    this.height = height;
    this.size = size;
    this.soldierList = new Set();
    this.chosen = '骑兵';
    this.zero = 0;
    this.infantryList = new Set();
    this.cavalryList = new Set();
    this.archerList = new Set();
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

  roll() {
    // console.log(this.cavalryList);
    // console.log(this.infantryList);
    // console.log(this.archerList);
    this.cavalryList.forEach((c) => {
      c.findEnemy();
    });
  }
}
