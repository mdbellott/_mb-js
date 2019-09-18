// xiii
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

let sourceWeight = 1.7, sourceStroke = 255
let squareSide = 15, squareIncrement = 3
let cirlceMult = 17, circleIncremet = 9
let shapeOffset = 20

// State 0: Circle
// State 1: Square
let circle = []
let square = []
let states = []

// 9 1 7 1 9
let morphs = [[],[],[],[],[],[],[],[],[],
						 [],
						 [],[],[],[],[],[],[],
						 [],
						 [],[],[],[],[],[],[],[],[]]

function setup() {
	
	// Env
	createCanvas(700, 700)
	noFill()
	
	for(let i=0; i<27; i++) { 
		let s = i%2 == 0 ? 0 : 1
		if (i==16) { s = 1 }
		states.push(s)
	}
		

	// Circle
	for(let angle = 0; angle < 360; angle += circleIncremet) {
		let v = p5.Vector.fromAngle(radians(angle - 135))
		v.mult(cirlceMult)
		circle.push(v)
		
		for(let i=0; i<27; i++) { morphs[i].push(createVector()) }
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
	for (let shape=0; shape<27; shape++) {
		
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
			
			// 9
			let nineXOffset = 23
			let nineYOffset = 7.3
			if (shape == 0) {
				v2.x -= nineXOffset 
				v2.y += nineYOffset * 4
			} else if (shape == 1) {
				v2.x -= nineXOffset 
				v2.y += nineYOffset * 3
			} else if (shape == 2) {
				v2.x -= nineXOffset 
				v2.y += nineYOffset * 2
			} else if (shape == 3) {
				v2.x -= nineXOffset 
				v2.y += nineYOffset
			} else if (shape == 4) {
				v2.x -= nineXOffset 
			} else if (shape == 5) {
				v2.x -= nineXOffset 
				v2.y -= nineYOffset
			} else if (shape == 6) {
				v2.x -= nineXOffset 
				v2.y -= nineYOffset * 2
			} else if (shape == 7) {
				v2.x -= nineXOffset 
				v2.y -= nineYOffset * 3
			} else if (shape == 8) {
				v2.x -= nineXOffset 
				v2.y -= nineYOffset * 4
			}
			
			// 1
			let oneXOffset = 11.5
			if (shape == 16) {
				v2.x -= oneXOffset 
			}
			
			// 7
			let sevenYOffset = 7.9
			if (shape == 9) {
				v2.y += sevenYOffset * 3
			} else if (shape == 10) {
				v2.y += sevenYOffset * 2
			} else if (shape == 11) {
				v2.y += sevenYOffset 
			} else if (shape == 12) {
			} else if (shape == 13) {
				v2.y -= sevenYOffset
			} else if (shape == 14) {
				v2.y -= sevenYOffset * 2
			} else if (shape == 15) { 
				v2.y -= sevenYOffset * 3
			}
			
			// 1
			if (shape == 17) {
				v2.x += oneXOffset 
			}
			
			// 9
			if (shape == 18) {
				v2.x += nineXOffset 
				v2.y += nineYOffset * 4
			} else if (shape == 19) {
				v2.x += nineXOffset 
				v2.y += nineYOffset * 3
			} else if (shape == 20) {
				v2.x += nineXOffset 
				v2.y += nineYOffset * 2
			} else if (shape == 21) {
				v2.x += nineXOffset 
				v2.y += nineYOffset
			} else if (shape == 22) {
				v2.x += nineXOffset 
			} else if (shape == 23) {
				v2.x += nineXOffset 
				v2.y -= nineYOffset
			} else if (shape == 24) {
				v2.x += nineXOffset 
				v2.y -= nineYOffset * 2
			} else if (shape == 25) {
				v2.x += nineXOffset 
				v2.y -= nineYOffset * 3
			} else if (shape == 26) {
				v2.x += nineXOffset 
				v2.y -= nineYOffset * 4
			}
			
			v2.lerp(v1, 0.1)
			if (shape == 12) { distance += p5.Vector.dist(v1, v2) } 
		}

		// State
		// print(distance)
		if (shape == 12 && distance < 0.1) { 
			if (state == 0) {
				for(let i=0; i<27; i++){
					let newState = i%2 == 0 ? 1 : 0
					if (i==16) { newState = 0 }
					states[i] = newState
				}
			} else {
				for(let i=0; i<27; i++){
					let newState = i%2 == 0 ? 0 : 1
					if (i==16) { newState = 1 }
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
