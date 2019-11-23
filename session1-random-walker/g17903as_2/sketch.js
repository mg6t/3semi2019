// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 1: Random Walker

var w;
var z;

function setup() {
    createCanvas(640, 360);
    // Make a Walker object
    w = new Walker(color(102,0,153), 5); //紫
    z = new Walker(color(204,255,104), 3); //黄緑
}

function draw() {
    background(153, 102, 51);
    // Update and display object
    w.update();
    z.update();
    w.display();
    z.display();
}

function Walker(color, random_size) {

    this.color = color;
    this.random_size = random_size;

    // Start Walker in center
    this.pos = createVector(width / 2, height / 2);
    this.ver = createVector(0, 0);
    

    this.update = function() {
	    // Move Walker randomly
	    var vel = createVector(random(-this.random_size, this.random_size), random(-this.random_size, this.random_size));
	    this.pos.add(vel);
    }

    this.display = function() {
	    // Draw Walker as circle
	    fill(color);
	    ellipse(this.pos.x, this.pos.y, 48, 48);
    }
}