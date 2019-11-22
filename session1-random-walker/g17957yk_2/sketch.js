// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 1: Walker accelerating towards mouse

var w = [];

function setup() {
  createCanvas(1240, 800); //ウィンドウサイズ
  // Make a Walker object
  w[0] = new Walker(width / 2, height/2, 0.03, color(255, 0, 0));
  w[1] = new Walker(width / 4, height/4, 2, color(0, 255, 0));
  w[2] = new Walker(0, 0, 0.5, color(0, 0, 255));
  w[3] = new Walker(width / 2, height/2, 0.03, color(200, 160, 250));
}

function draw() {
  background(215, 230, 200); //背景

  // Update and display object
  for (var i = 0; i < 3; i++) {
    w[i].update();
    w[i].display(); 
  }
  for (var i = 0; i < 3; i++) {
	  w[3].update();
	  w[3].display();
  }
}

function Walker(initx, inity, mag, color) { //赤のオブジェクト
  // Start Walker in center
  this.pos = createVector(initx, inity); //初期位置(320,120)
  // Start with 0 velocity
  this.vel = createVector(0, 0); //速度
  this.color = color;
  this.mag = mag;

  this.update = function() {
    // Vector at mouse location
    var mouse = createVector(mouseX, mouseY); //マウスの位置
    // Vector pointing from Walker to mouse
    this.acc = p5.Vector.sub(mouse, this.pos); //mouse - 位置
    // Setting the magnitude of that vector
    this.acc.setMag(this.mag); //距離

    // Physics engine algorithm
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    // Draw Walker as circle
    fill(this.color); ///色
    ellipse(this.pos.x, this.pos.y, 48, 48); //円  
  }
}