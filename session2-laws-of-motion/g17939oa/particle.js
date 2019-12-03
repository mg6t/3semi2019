// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

function Particle(x, y, m) {
  this.pos = createVector(x, y);
  this.vel = createVector(0, 0);
  this.acc = createVector(0, 0);
    this.mass = m;
    this.c = random(1,255);
    this.c2 = random(1,255);
    this.c3 = random(1,255);
    this.c4 = random(1,25);
    

  this.applyForce = function(force) {
    var f = force.copy();
    f.div(this.mass);
    this.acc.add(f);
  }

  this.update = function() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.set(0, 0);
  }

  this.display = function() {
      //fill(this.c3, this.c4);
      //カラフル
      stroke(this.c, this.c2, this.c3);
      //青系
      //stroke(0, this.c2, this.c3);
      //白
      //stroke(250)
      //球形
      //ellipse(this.pos.x, this.pos.y, this.mass*10, this.mass*10);
     
      star(this.pos.x, this.pos.y, this.c4, 0, m*1.3);
      
  }

  this.edges = function() {
    if (this.pos.y > height) {
      this.vel.y *= -1;
      this.pos.y = height;
    }

    if (this.pos.x > width) {
      this.vel.x *= -1;
      this.pos.x = width;
    }
  }
    this.edges2 = function(){

	if (this.pos.y > height) {
      this.vel.y *= -1;
	    this.pos.add(f)
	    this.pos.y = height;
	    
    }

    if (this.pos.x > width) {
      this.vel.x *= -1;
	this.pos.add(acc);
	this.pos.x = width;
    }
	

    }
    function star(x, y, radius1, radius2, npoints) {
  let angle = TWO_PI / npoints;
  let halfAngle = angle / 2.0;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius2;
    let sy = y + sin(a) * radius2;
    vertex(sx, sy);
    sx = x + cos(a + halfAngle) * radius1;
    sy = y + sin(a + halfAngle) * radius1;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}

}
