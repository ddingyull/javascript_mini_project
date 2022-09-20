let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

let dino = {
  x : 10,
  y : 200,
  width : 50,
  height : 50,
  draw() {
    ctx.fillstyle = 'green';
    ctx.fillRect(this.x,this.y, this.width,this.height);
  }
}
dino.x += 1;
dino.draw();

class Cactus {
  constructor(){
    this.x = 500;
    this.y = 200;
    this.width = 50;
    this.height = 50;
  }
    draw() {
      ctx.fillstyle = 'red';
      ctx.fillRect(this.x,this.y, this.width,this.height);
    }
  }
  let cactus = new Cactus();
  cactus.draw();