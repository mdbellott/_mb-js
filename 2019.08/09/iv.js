// iv
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

let theta = 0
let sourceWeight = 3, sourceStroke = 255
let pulseWeight = 3, pulseStroke = 255, pulseOffset = 0

let size = 0, maxSize = 200, sizeIncrement = 1
let x = 0, y = 0

function setup() {
	createCanvas(700, 700)
	
	background(0)
	noFill()
}

function draw() {
	background(0)
	translate(width/2, height/2)
	
	stroke(sourceStroke)
	strokeWeight(sourceWeight)

	// Source

	stroke(sourceStroke)
	strokeWeight(sourceWeight)
	rect(-177/2, -400/2, 177, 400)
	
	// Pulse
	pulseOffset = 1 - theta 
	pulseWeight = 2 - theta
	
	stroke(pulseStroke)
	strokeWeight(pulseWeight)
	rect(-(177*pulseOffset)/2, -(400*pulseOffset)/2, 177*pulseOffset, 400*pulseOffset)
	
	// Inremenent
	theta += 0.027
	if (theta > 1) { theta = 0 }
	
}
