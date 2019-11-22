// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 1: Random Walker

var w;
//var xoff = 0;

function setup() {
    createCanvas(640, 360);
    // Make a Walker object
    w = new Walker();
}

function draw() {
    background(51);
    // Update and display object
    w.update();
    w.display();
    //w.walk();
    //var xoff = noise(xoff) * width;
}

function Walker() {

    // Start Walker in center
    this.pos = createVector(width / 2, height / 2);
    this.vel = createVector(0, 0);
    //this.acc = p5.Vector.fromAngle(random(0, TWO_PI));
    //this.acc.setMag(0.2);

    this.update = function() {
	// Move Walker randomly
	this.acc = createVector(random(-1, 1), random(-1, 1));
	//this.acc = p5.Vector.fromAngle(random(0, TWO_PI));
	//this.acc.mult(5);

	//var mouse = createVector(mouseX, mouseY);
	//this.acc = p5.Vector.sub(mouse, this.pos);
	//this.acc.normalize();
	this.acc.mult(random(-1, 1)); 
	//this.acc.setMag(2);
	this.acc.rotate(0.5);
	this.vel.add(this.acc);
	this.pos.add(this.vel);
    }

    this.walk = function(){
	this.pos.x = this.pos.x + random(-1, 1);
	this.pos.y = this.pos.y + random(-1, 1);
    }

    this.display = function() {
	// Draw Walker as circle
	fill(255);
	ellipse(this.pos.x, this.pos.y, 48, 48);
    }
}
