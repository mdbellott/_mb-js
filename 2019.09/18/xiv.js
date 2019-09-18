// xiv
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

var theta = 0
var x = 0, y = 0

function setup() {
	createCanvas(700, 700)
	
	background(0)
	stroke(255)	
	noFill()
}

function draw() {
	translate(width/2, height/2)	
	background(0)
	
	theta += 0.001
	if (theta == 360) { theta = 0 }
	
	// Source
	strokeWeight(2)
	ellipse(0, 0, 150, 150)
	
	// Orbit
	strokeWeight(1)
	
	for(let i=1; i<71; i++) {
		x = 200 * sin(theta*(180/i))
		y = 200 * cos(theta*(180/i))
		ellipse(x, y, 20, 20)
	}
}