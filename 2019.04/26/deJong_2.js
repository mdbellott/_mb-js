// deJong.2
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

var x, y;
var a = -0.9;
var b = 1.75;
var c = 0.9;
var d = 1.75;

var negR = -5;
var posR = 5;

function deJong(a, b, c, d, x0, y0, iterations) {
  var x = x0;
  var y = y0;
  
  for(i = 0; i < iterations; i++){
    var nx = sin(a * y) - cos(b * x);
    var ny = sin(c * x) - cos(d * y);
    x = nx;
    y = ny;
    point(map(x, negR, posR, 0, width), map(y, negR, posR, height, 0));
  }
}

function setup() {
  createCanvas(1500, 1500);
  background(0);
  
  noFill();
  noLoop();
}

function draw() {
  stroke(255, 50);
  for (j = 0; j < 10000; j++) {
    deJong(a, b, c, d, random(negR, posR), random(negR, posR), 100);
  }
}