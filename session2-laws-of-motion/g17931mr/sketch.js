// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Drag Force

// Two particles, this could be an array
var particle1;
var particle2;
var particle3;

// Liquid
var liquid;

function setup() {

    createCanvas(640, 360);
    // Create liquid object
    liquid = new Liquid(0, height / 2, width, height / 2, 0.1);

    particle1 = new Particle(1, 320, 0);
    particle2 = new Particle(3, 320, 0);
    particle3 = new Particle(5, 320, 0);
}

function draw() {
    background(230);

    // Draw water
    liquid.display();

    // Is the Mover in the liquid?
    if (liquid.contains(particle1)) {
	// Calculate drag force
	var dragForce = liquid.calculateDrag(particle1);
	// Apply drag force to Mover
	particle1.applyForce(dragForce);
    }

    // Gravity is scaled by mass here!
    var gravity = createVector(0, 0.1 * particle1.mass);
    // Apply gravity
    particle1.applyForce(gravity);

    //var wind = createVector(0.5, 0);
    //particle1.applyForce(wind);

    // Update and display
    particle1.update();
    particle1.display();
    particle1.checkEdges();


    // Is the Mover in the liquid?
    if (liquid.contains(particle2)) {
	// Calculate drag force
	var dragForce = liquid.calculateDrag(particle2);
	// Apply drag force to Mover
	particle2.applyForce(dragForce);
    }

    // Gravity is scaled by mass here!
    var gravity = createVector(0, 0.2 * particle2.mass);
    // Apply gravity
    particle2.applyForce(gravity);

    // Update and display
    particle2.update();
    particle2.display();
    particle2.checkEdges();

    
    if (liquid.contains(particle3)) {
	var dragForce = liquid.calculateDrag(particle3);
	particle3.applyForce(dragForce);
    }

    var gravity = createVector(0, 0.4 * particle3.mass);
    particle3.applyForce(gravity);

    particle3.update();
    particle3.display();
    particle3.checkEdges();
}
