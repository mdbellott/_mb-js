// v
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org
//
// Credit to example:
// https://p5js.org/examples/motion-morph.html

let sourceWeight = 2, sourceStroke = 255
let squareSide = 100, squareIncrement = 20
let cirlceMult = 125

// State 0: Circle
// State 1: Square
let state = 0
let circle = []
let square = []

let morph = []

function setup() {
	
	// Env
	createCanvas(700, 700)
	noFill()

	// Circle
	for( let angle = 0; angle < 360; angle += 9) {
		let v = p5.Vector.fromAngle(radians(angle - 135))
		v.mult(cirlceMult)
		circle.push(v)
		// Populate morph
		morph.push(createVector())
	}

	// Square
	// Top
	for (let x=-squareSide; x<squareSide; x+=squareIncrement) {
	square.push(createVector(x, -squareSide));
	}
	// Right
	for (let y=-squareSide; y<squareSide; y+=squareIncrement) {
	square.push(createVector(squareSide, y));
	}
	// Bottom
	for (let x=squareSide; x>-squareSide; x-=squareIncrement) {
	square.push(createVector(x, squareSide));
	}
	// Left
	for (let y=squareSide; y>-squareSide; y-=squareIncrement) {
	square.push(createVector(-squareSide, y));
	}
	
}

function draw() {
	
	background(0)
	
	let distance = 0
	
	// Calc
	for(let i=0; i<circle.length; i++) {
		let v1
		
		if (state == 1) {
			v1 = circle[i]
		} else if (state == 0) {
			v1 = square[i]
		}
		
		let v2 = morph[i]
		v2.lerp(v1, 0.1)
		distance += p5.Vector.dist(v1, v2)
	}
	
	// State
	if (distance < 0.1) { 
		if (state == 0) {
			state = 1
		} else {
			state = 0 
		}
	}
	
	// Draw
	translate(width/2, height/2)
	
	strokeWeight(sourceWeight)
	stroke(sourceStroke)
	
	beginShape()
	
	morph.forEach(v => {
		vertex(v.x, v.y)
	})
	
	endShape(CLOSE)
}
