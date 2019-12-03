// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 2: Array of Particles, multiple forces

var particles = [];
var pp = [];

function setup() {
    createCanvas(640, 360); //ウィンドウのサイズ
}

function mousePressed() {
    var p = new Particle(mouseX, mouseY, random(2,4)); //マウスが押されたとことに
    particles.push(p); //オブジェクト生成
}

function keyPressed() {
    if (key == ' ') { //スペースキーが押されたとき
	particles.splice(0, 3); //配列[0]から一つずつ消す
    }else if(keyCode == RIGHT_ARROW){
	var a = new PP(random(width),random(height), random(2,7)); //マウスが押されたとことに
	pp.push(a); //オブジェクト生成
    }else if(keyCode == LEFT_ARROW){
	pp.splice(0, 1); //配列[0]から一つずつ消す
    }
}

function draw() {
    background(51); //背景色
    var wind = createVector(0.1, 0); //風

    for (var i = 0; i < particles.length; i++) {
	var gravity = createVector(0, 0.2 * particles[i].mass); //重力(質力によって異なる)
	particles[i].applyForce(gravity);

	// Wind is applied only if mouse is pressed
	if (mouseIsPressed) {
	    particles[i].applyForce(wind);
	}

	particles[i].update();
	particles[i].edges();
	particles[i].display();
    }

    for (var j = 0; j < pp.length; j++) {
	var gravity = createVector(0, 0.2 * pp[j].mass); //重力(質力によって異なる)
	pp[j].applyForce(gravity);

	// Wind is applied only if mouse is pressed
	if (mouseIsPressed) {
	    pp[j].applyForce(wind);
	}

	pp[j].update();
	pp[j].edges();
	pp[j].display();
	
    }
}
