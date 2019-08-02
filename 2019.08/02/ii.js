// ii
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

let theta = 0
let sourceWeight = 3, sourceStroke = 255
let pulseWeight = 3, pulseStroke = 255, pulseOffset = 0

function setup() {
	createCanvas(700, 700)
	
	background(0)
	noFill()
}

function draw() {
	background(0)
	translate(width/2, height/2)	
	
	// Source
	sourceStroke = 255 - 195*theta
	sourceWeight = 3 - (1 * theta)
	
	stroke(sourceStroke)
	strokeWeight(sourceWeight)
	ellipse(0, 0, 200, 200)
	
	// Pulse
	pulseOffset = 1 + theta 
	pulseWeight = 2 - 2*theta
	
	stroke(pulseStroke)
	strokeWeight(pulseWeight)
	ellipse(0, 0, 200 * pulseOffset , 200 * pulseOffset)
	
	// Inremenent
	theta += 0.01
	if (theta > 1) { theta = 0 }
}