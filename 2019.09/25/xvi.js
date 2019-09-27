// xvi
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org
//
// Inspiration: https://www.openprocessing.org/sketch/733558
// By Fractalman

function setup() {
	createCanvas(700, 700)
	
	background(0)
	stroke(255)	
	noFill()
}

function draw() {
	translate(width*0.5, height*0.5)
	let f = TWO_PI*(sqrt(1/2000) - 1) * 0.5
	for (let r=0; r<325; r++) {
     ellipse(cos(f*r)*r, sin(f*r)*r, 20, 20)
  }
}
