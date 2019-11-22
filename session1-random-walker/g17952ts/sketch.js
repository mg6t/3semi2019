// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 1: Random Walker

var w;

function setup() {//土台
  createCanvas(360, 360);//横×縦。背景のサイズ。
  // Make a Walker object
  w = new Walker();
}

function draw() {//土台
    background(1);//背景の濃さ。小さい方が黑に近づく。
  // Update and display object
  w.update();
  w.display();
}

function Walker() {//Walkerのオブジェクト

  // Start Walker in center
  this.pos = createVector(width / 2, height / 2);

  this.update = function() {
    // Move Walker randomly
    var vel = createVector(random(-5, 5), random(-5, 5));//（最小値、最大値）数を大きくするほど、揺れ
    this.pos.add(vel);
  }

  this.display = function() {
    // Draw Walker as circle
    fill(255);
    ellipse(this.pos.x, this.pos.y, 48, 48);
  }
}
