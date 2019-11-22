// Daniel Shiffman
// https://www.kadenze.com/courses/the-nature-of-code
// http://natureofcode.com/
// Session 1: Perlin noise

// "x-offset" in Perlin noise space
var xoff = 0.5;
var yoff = 0.8;  //初期値

function setup() {
  createCanvas(640, 360);
}

function draw() {
  background(51);

  // "regular" randomness
  //var x = random(0, width);
    
  // Perlin noise value
   var x = noise(xoff) * width;
   var y = noise(yoff) * height;
   //document.write("【"+x+"-"+y+"】");

  // Move through perlin noise space
    xoff += 0.05;
    yoff += 0.05;     //x軸の幅

  fill(255);
  ellipse(x, y, 48, 48);
}

//バラバラに変化させたい要素に対して、それぞれ別の「初期値」を用意しておくというのは、noise()を使う際のポイントです。noise()では、通常、プログラムを一度起動すると、終了して起動し直すまでシード値が固定され、同じ引数（座標値）に対しては、同じ値を返すようになります。例えばこのデモの場合、xとyの移動量を出すnoise()に同じ引数を与えてしまうと、毎フレームごとのxとyの変化量は全く同じになります。つまり、直線上しか移動しなくなってしまうのです。よく考えると当たり前なのですが、慣れるまではうっかりしがちなのでご注意を。

//https://infosmith.biz/blog/it/p5js-noise
