// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 1: Walker accelerating towards mouse

var w;
var tw;
var bw;
var fw;

function setup() {
  createCanvas(1240, 800); //ウィンドウサイズ
  // Make a Walker object
    w = new Walker();
    tw = new TWalker();
    bw = new BWalker();
    fw = new FWalker();
}

function draw() {
    background(215,230,200); //背景
    
    // Update and display object
  
     w.update();
     w.display();

    tw.update();
    tw.display();

	
    bw.update();
    bw.display();

    for(var i = 0;i < 3;i++){
	fw.update();
	fw.display();
    }
 

    

}

function Walker() { //赤のオブジェクト

   
    
  // Start Walker in center
  this.pos = createVector(width / 2, height/2); //初期位置(320,120)
  // Start with 0 velocity
  this.vel = createVector(0, 0); //速度

  this.update = function() {
    // Vector at mouse location
    var mouse = createVector(mouseX, mouseY); //マウスの位置
    // Vector pointing from Walker to mouse
    this.acc = p5.Vector.sub(mouse, this.pos); //mouse - 位置
    // Setting the magnitude of that vector
      this.acc.setMag(0.03); //距離
      

    // Physics engine algorithm
    this.vel.add(this.acc);
      this.pos.add(this.vel);

  }

  this.display = function() {
    // Draw Walker as circle
      fill(255,0,0); ///色
      ellipse(this.pos.x, this.pos.y, 48, 48); //円
      
  }
}

function TWalker() { //緑のオブジェクト

  // Start Walker in center
  this.pos = createVector(width / 4, height/4); //初期位置
  // Start with 0 velocity
  this.vel = createVector(0, 0); //速度

  this.update = function() {
    // Vector at mouse location
    var mouse = createVector(mouseX, mouseY); //マウスの位置
    // Vector pointing from Walker to mouse
    this.acc = p5.Vector.sub(mouse, this.pos); //mouse - 位置
    // Setting the magnitude of that vector
    this.acc.setMag(2); //距離・大きさ

    // Physics engine algorithm
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    // Draw Walker as circle
      fill(0,255,0); ///色
     ellipse(this.pos.x, this.pos.y, 48, 48); //円
      
  }
}

function BWalker() { //青いオブジェクト

  // Start Walker in center
  this.pos = createVector(0, 0); //初期位置
  // Start with 0 velocity
  this.vel = createVector(0, 0); //速度

  this.update = function() {
    // Vector at mouse location
    var mouse = createVector(mouseX, mouseY); //マウスの位置
    // Vector pointing from Walker to mouse
    this.acc = p5.Vector.sub(mouse, this.pos); //mouse - 位置
    // Setting the magnitude of that vector
    this.acc.setMag(0.5); //距離

    // Physics engine algorithm
    this.vel.add(this.acc);
    this.pos.add(this.vel);
  }

  this.display = function() {
    // Draw Walker as circle
      fill(0,0,255); ///色
     ellipse(this.pos.x, this.pos.y, 48, 48); //円
      
  }
}

function FWalker() { //紫のオブジェクト

    
  // Start Walker in center
  this.pos = createVector(width / 2, height/2); //初期位置(320,120)
  // Start with 0 velocity
  this.vel = createVector(0, 0); //速度

  this.update = function() {
    // Vector at mouse location
    var mouse = createVector(mouseX, mouseY); //マウスの位置
    // Vector pointing from Walker to mouse
    this.acc = p5.Vector.sub(mouse, this.pos); //mouse - 位置
    // Setting the magnitude of that vector
      this.acc.setMag(0.03); //距離
      

    // Physics engine algorithm
    this.vel.add(this.acc);
      this.pos.add(this.vel);

  }

  this.display = function() {
    // Draw Walker as circle
      fill(200,160,250); ///色
      ellipse(this.pos.x, this.pos.y, 48, 48); //円
      
  }
}
