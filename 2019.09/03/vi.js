// vi
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org
//
// Credit to example:
// https://p5js.org/examples/motion-morph.html

let sourceWeight = 2, sourceStroke = 255
let squareSide = 50, squareIncrement = 10
let cirlceMult = 57, circleIncremet = 9
let shapeOffset = 20

// State 0: Circle
// State 1: Square
let circle = []
let square = []
let states = [0,1,0]

let morphs = [[],[],[]]

function setup() {
	
	// Env
	createCanvas(700, 700)
	noFill()

	// Circle
	for( let angle = 0; angle < 360; angle += circleIncremet) {
		let v = p5.Vector.fromAngle(radians(angle - 135))
		v.mult(cirlceMult)
		circle.push(v)
		
		// Populate morph while we're here
		morphs[0].push(createVector())
		morphs[1].push(createVector())
		morphs[2].push(createVector())
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

function calcShapes() {
	
	// Calc
	for (let s=0; s<3; s++) {
		
		let distance = 0
		let state = states[s]
		
		for(let i=0; i<circle.length; i++) {
			let v1

			if (state == 1) {
				v1 = circle[i]
			} else if (state == 0) {
				v1 = square[i]
			}

			let v2 = morphs[s][i]
			if (s == 0) {
				v2.x -= shapeOffset 
			} else if (s == 2) {
				v2.x += shapeOffset 
			}
			v2.lerp(v1, 0.1)
			distance += p5.Vector.dist(v1, v2)
		}

		// State
		if (s == 1 && distance < 0.1) { 
			if (state == 0) {
				states[0] = 0
				states[1] = 1
				states[2] = 0
			} else {
				states[0] = 1
				states[1] = 0
				states[2] = 1
			}
		}
	}
}

function draw() {
	
	background(0)
	calcShapes()
	
	// Draw
	translate(width/2, height/2)
	
	strokeWeight(sourceWeight)
	stroke(sourceStroke)
	
	beginShape()
	morphs[0].forEach(v => {
		vertex(v.x, v.y)
	})
	endShape(CLOSE)
	
	beginShape()
	morphs[1].forEach(v => {
		vertex(v.x, v.y)
	})
	endShape(CLOSE)
	
	beginShape()
	morphs[2].forEach(v => {
		vertex(v.x, v.y)
	})
	endShape(CLOSE)
}

