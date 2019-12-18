// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 3: Arrive Steering Behavior

// A vehicle
var vehicle = [];

function setup() {
    createCanvas(640, 360);
    // Create the vehicle

    for(var j = 0;j < 10;j++){
	vehicle[j] = new Vehicle(random(0,640), random(0,360));
    }

    
   
    
}

function draw() {
    background(51);
    
    // Arrive at the target
    var target = createVector(mouseX, mouseY);
    
    for(var i = 0;i < 10;i++){
	vehicle[i].arrive(target);
	
	// Update and display
	vehicle[i].update();
	vehicle[i].display();
    }
}
