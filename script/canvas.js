

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
  constructor(x,y,radius,color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;
    this.velocity = {
      x:(Math.random()-0.5)*canvas.width /30,
      y:(Math.random()-0.5)*canvas.width /30,
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
    const downOffset = canvas.height > 750 ? 750 : 0;
    circles.push(new Circle(Math.random()*canvas.width,Math.random()*canvas.height + downOffset, (Math.random()*canvas.width/3)+canvas.width/5, `rgba(${Math.random()*150},${Math.random()*150},${(Math.random()*150)+100},0.2)`))
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



function drawStar(cx,cy,spikes,outerRadius,innerRadius){
  var rot=Math.PI/2*3;
  var x=cx;
  var y=cy;
  var step=Math.PI/spikes;

  c.beginPath();
  c.moveTo(cx,cy-outerRadius)
  for(i=0;i<spikes;i++){
    x=cx+Math.cos(rot)*outerRadius;
    y=cy+Math.sin(rot)*outerRadius;
    c.lineTo(x,y)
    rot+=step

    x=cx+Math.cos(rot)*innerRadius;
    y=cy+Math.sin(rot)*innerRadius;
    c.lineTo(x,y)
    rot+=step
  }
  c.lineTo(cx,cy-outerRadius);
  c.closePath();
  c.lineWidth=5;
  c.strokeStyle='blue';
  c.stroke();
  c.fillStyle='skyblue';
  c.fill();
}

drawStar(100,100,5,30,15);