// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var particles = [];

function setup() {
  createCanvas(640, 360);
}

function mousePressed() {
  var p = new Particle(mouseX, mouseY, random(1,20));
  particles.push(p);
}

function keyPressed() {
  if (key == ' ') {
    particles.splice(0, 1);
  }

}

function draw() {
  background(102);
    var wind = createVector(0.1, 0);
    var wind2 = createVector(0.3,0.3);

  for (var i = 0; i < particles.length; i++) {
    var gravity = createVector(0, 0.2 * particles[i].mass);
    particles[i].applyForce(gravity);

    // Wind is applied only if mouse is pressed
    if (mouseIsPressed) {
      particles[i].applyForce(wind2);
    }

     
    particles[i].update();
    particles[i].edges();
    particles[i].display();
  }
}
