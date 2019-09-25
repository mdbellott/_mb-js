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
	
	theta += 0.00375
	if (theta == 360) { theta = 0 }
	
	// Source
	strokeWeight(2)
	ellipse(0, 0, 150, 150)
	
	// Orbit
	strokeWeight(1)
	
	x = 150 * -sin(theta/2)
	y = 150 * cos(theta/2)
	ellipse(x, y, 35, 35)

	x = 200 * sin(theta)
	y = 200 * cos(theta)
	ellipse(x, y, 20, 20)

	x = 250 * sin(theta*1.5)
	y = 250 * -cos(theta*1.5)
	ellipse(x, y, 15, 15)
	
	x = 300 * sin(theta/4)
	y = 300 * cos(theta/4)
	ellipse(x, y, 10, 10)
	
	x = 275 * sin(theta)
	y = 225 * -cos(theta)
	ellipse(x, y, 23, 23)
}

