// xvii
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org
//
// Inspiration: https://www.openprocessing.org/sketch/733558
// By Fractalman

let theta = 1

function setup() {
	createCanvas(700, 700)
	stroke(255)	
	noFill()
}

function draw() {
	background(0)
	translate(width*0.5, height*0.5)
	let f = TWO_PI*(sqrt(theta/20000) - 1) * 0.5
	for (let r=0; r<325; r++) {
     ellipse(cos(f*r)*r, sin(f*r)*r, 20, 20)
  }
	theta += 0.01
}
