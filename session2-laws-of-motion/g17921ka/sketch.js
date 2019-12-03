// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var particles = [];

function setup() {
  createCanvas(650, 240);//変更
}

function mousePressed() {
  var p = new Particle(mouseX, mouseY, random(1,7));//変更
  particles.push(p);
}

function keyPressed() {
  if (key == ' ') {
    particles.splice(0, 1);
  }

}

function draw() {
    background('rgba(100%,0%,100%,0.5)');//変更
  var wind = createVector(0.1, 0);

  for (var i = 0; i < particles.length; i++) {
    var gravity = createVector(0, 0.2 * particles[i].mass);
    particles[i].applyForce(gravity);

    // Wind is applied only if mouse is pressed
    if (mouseIsPressed) {
      particles[i].applyForce(wind);
    }

    particles[i].update();
    particles[i].edges();
    particles[i].display();
  }
}
