// iii
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
	sourceStroke = 255 - 195*theta*0.3
	sourceWeight = 3 - theta*0.3
	
	stroke(sourceStroke)
	strokeWeight(sourceWeight)
	ellipse(0, 0, 200, 200)
	
	// Pulse
	pulseOffset = 1 + theta 
	pulseWeight = 2 - 2*theta
	if (pulseWeight < 0) { pulseWeight += 2 }
	
	stroke(pulseStroke)
	strokeWeight(pulseWeight)
	ellipse(0, 0, 200 * pulseOffset , 200 * pulseOffset)
	
	// Inremenent
	theta += 0.015
	if (theta > 2) { theta = 0 }
}