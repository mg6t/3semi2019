// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 1: Random Walker

var w;
var z;

function setup() {
    createCanvas(640, 360);
    // Make a Walker object
    w = new Walker1();
    z = new Walker2();
}

function draw() {
    background(153, 102, 51);
    // Update and display object
    w.update();
    z.update();
    w.display();
    z.display();
}

function Walker1() { //紫

    // Start Walker in center
    this.pos = createVector(width / 2, height / 2);
    this.ver = createVector(0, 0);
    

    this.update = function() {
	// Move Walker randomly
	var vel = createVector(random(-5, 5), random(-5, 5));
	this.pos.add(vel);
    }

    this.display = function() {
	// Draw Walker as circle
	fill(102,0,153);
	ellipse(this.pos.x, this.pos.y, 48, 48);
    }
}

function Walker2() { //黄緑

    // Start Walker in center
    this.pos = createVector(width / 2, height / 2);
    this.ver = createVector(0, 0);
    

    this.update = function() {
	// Move Walker randomly
	var vel = createVector(random(-3, 3), random(-3, 3));
	this.pos.add(vel);
    }

    this.display = function() {
	// Draw Walker as circle
	fill(204,255,104);
	ellipse(this.pos.x, this.pos.y, 48, 48);
    }
}
