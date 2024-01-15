

const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

function resize() {
  if (innerHeight > 750 && innerHeight < 1200) {
    canvas.height = innerHeight;
    canvas.width = innerWidth;
  } else if (innerHeight >= 1500) {
    canvas.height = 1200;
    canvas.width = innerWidth;
  } else {
    canvas.height = 750;
    canvas.width = innerWidth; 
  }
}
addEventListener('resize', () => {
  
});
class Circle {
  constructor(x,y,radius,color, blur, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.blur = blur;
    this.dx = dx;
    this.dy = dy;
  }
  draw() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    if (this.radius > 2) {c.filter = `blur(${canvas.width/5}px)`} else {c.filter = 'none'}
    c.fill();
    c.closePath();
  }
  update() {
    this.draw();
    
    if (this.x < 0 || this.x > canvas.width) {
      this.dx = -this.dx;
    }
    if (this.y < 0 || this.y > canvas.height) {
      this.dy = -this.dy;
    }
    this.x+=this.dx;
    this.y+=this.dy;
    
  }
}
let circles;
function init() {
  circles = [];
  
  for (let i = 0; i<5; i++) {
    const downOffset = canvas.height > 750 ? 750 : 0;
    circles.push(new Circle(Math.random()*canvas.width,Math.random()*canvas.height + downOffset, (Math.random()*canvas.width/3)+canvas.width/5, `rgba(${Math.random()*150},${Math.random()*150},${(Math.random()*150)+100},0.2)`,true, (Math.random()-0.5)*canvas.width /30, (Math.random()-0.5)*canvas.width /30))
  }
  for (let i = 0; i<innerWidth /50; i++) {
    circles.push(new Circle(Math.random()*canvas.width,Math.random()*canvas.height, Math.random() *2, 'white', false, (Math.random()-0.5)*canvas.width /100, (Math.random()-0.5)*canvas.width /100,));
  }
  for (let i = 0; i<circles.length; i++) {
       circles[i].update();
  }
  
  
}
function animation() {
  
  setInterval(() => {
     c.clearRect(0,0,canvas.width, canvas.height)
     for (let i = 0; i<circles.length; i++) {
       circles[i].update();
     }
  },150)
  
}
animation()
resize();
init();
