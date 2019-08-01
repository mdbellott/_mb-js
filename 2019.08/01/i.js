// i
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

var theta = 0
let maxFrames = 200

function setup() {
	createCanvas(700, 700)
	
	background(0)
	stroke(255)
	strokeWeight(3)
	
	noFill()
}

function draw() {
	translate(width/2, height/2)	
	ellipse(0, 0, 200, 200)
}