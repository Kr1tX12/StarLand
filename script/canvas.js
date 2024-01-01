const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

function resize() {
  canvas.height = innerHeight;
  canvas.width = innerWidth;
}
addEventListener('resize', () => {
  
});
class Circle {
  constructor(x,y,radius,color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x:(Math.random()-0.5)*20,
      y:(Math.random()-0.5)*20,
    }
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.filter = `blur(${canvas.width/5}px)`
    c.fill();
    c.closePath();
  }
  update() {
    this.draw();
    
    if (this.x < 0 || this.x > canvas.width) {
      this.velocity.x = -this.velocity.x;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.velocity.y = -this.velocity.y;
    }
    this.x+=this.velocity.y;
    this.y+=this.velocity.y;
    
  }
}
let circles;
function init() {
  circles = [];
  
  
  for (let i = 0; i<5; i++) {
    circles.push(new Circle(Math.random()*canvas.width,Math.random()*canvas.height, (Math.random()*canvas.width/3)+canvas.width/5, `rgba(${Math.random()*150},${Math.random()*150},${(Math.random()*150)+100},0.2)`))
  }
  
  for (let i = 0; i<circles.length; i++) {
       circles[i].update();
     }
}
function animation() {
  
  /*setInterval(() => {
     c.clearRect(0,0,canvas.width, canvas.height)
     for (let i = 0; i<circles.length; i++) {
       circles[i].update();
     }
  },100)*/
  
}
resize();
init();