// vii
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
let states = []

let morphs = [[],[],[],[],[],[],[],[],[]]

function setup() {
	
	// Env
	createCanvas(700, 700)
	noFill()
	
	for(let i=0; i<9; i++) { 
		let s = i%2 == 0 ? 0 : 1
		states.push(s)
	}
		

	// Circle
	for(let angle = 0; angle < 360; angle += circleIncremet) {
		let v = p5.Vector.fromAngle(radians(angle - 135))
		v.mult(cirlceMult)
		circle.push(v)
		
		for(let i=0; i<9; i++) { morphs[i].push(createVector()) }
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
	for (let shape=0; shape<9; shape++) {
		
		let distance = 0
		let state = states[shape]
		
		for(let i=0; i<circle.length; i++) {
			let v1

			if (state == 1) {
				v1 = circle[i]
			} else if (state == 0) {
				v1 = square[i]
			}

			let v2 = morphs[shape][i]
			
			if (shape == 0) {
				v2.x -= shapeOffset 
				v2.y -= shapeOffset
			} else if (shape == 1) {
				v2.y -= shapeOffset 
			} else if (shape == 2) {
				v2.x += shapeOffset 
				v2.y -= shapeOffset
			} else if (shape == 3) {
				v2.x -= shapeOffset 
			} else if (shape == 5) {
				v2.x += shapeOffset 
			} else if (shape == 6) {
				v2.x -= shapeOffset 
				v2.y += shapeOffset
			} else if (shape == 7) {
				v2.y += shapeOffset
			} else if (shape == 8) {
				v2.x += shapeOffset 
				v2.y += shapeOffset
			}
			
			v2.lerp(v1, 0.1)
			if (shape == 4) { distance += p5.Vector.dist(v1, v2) } 
		}

		// State
		if (shape == 4 && distance < 0.1) { 
			if (state == 0) {
				for(let i=0; i<9; i++){
					let newState = i%2 == 0 ? 1 : 0
					states[i] = newState
				}
			} else {
				for(let i=0; i<9; i++){
					let newState = i%2 == 0 ? 0 : 1
					states[i] = newState
				}
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
	
	morphs.forEach(shape => {
		beginShape()
		shape.forEach(v => {
			vertex(v.x, v.y)
		})
		endShape(CLOSE)
	})
	
}
