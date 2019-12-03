// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Gravitational Attraction

// One particle, one attractor
var particle;
var attractor;
var attractor2;

function setup() {
  createCanvas(640, 360);
  particle = new Particle(width*2/3, height/2, 1);
  attractor = new Attractor(width*2/3, height/3);
  attractor2 = new Attractor(width*2/3, height*2/3);
}

function draw() {
  background(51);

  // Attractor attracts particle
  if(particle.pos.x >= width*2/3){
    var force = attractor.calculateAttraction(particle);
    var force2 = attractor2.calculateAttraction(particle);
    particle.applyForce(force);
    particle.applyForce(force2);

    line(attractor.pos.x, attractor.pos.y, particle.pos.x, particle.pos.y);
    line(attractor2.pos.x, attractor2.pos.y, particle.pos.x, particle.pos.y);
  }else{
    var gravity = createVector(0, 0.01);
    particle.applyForce(gravity);

    line(attractor.pos.x, attractor.pos.y, attractor2.pos.x, attractor2.pos.y);
  }

  particle.update();
  particle.display();

  attractor.display();
  attractor2.display();
}
