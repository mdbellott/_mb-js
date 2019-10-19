// xxii
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

let size = 700
let big = 87.5
let small = 10
let theta = 0.0

function setup() {
	createCanvas(size, size)
	background(0)
	stroke(255)	
	noFill()
}

function draw() {
	background(0)

	// Draw
	
	for(let i=0; i<7; i++) {		
		for(let j=0; j<7; j++) {
			ellipse(big + big*i, big + big*j, big, big)
		}
	}
	
	for(let i=0; i<6; i++) {		
		for(let j=0; j<6; j++) {
			ellipse(1.5*big + big*i, 1.5*big + big*j, small, small)
		}
	}
	
	// Animate
	
	for(let i=0; i<7; i++) {		
		for(let j=0; j<7; j++) {
			let x = big*-sin(theta)/2 + (big + big*i)
			let y = big*cos(theta)/2 + (big + big*j)
			ellipse(x, y, small, small)
		}
	}

	
	theta += 0.0375
	if (theta == 360) { theta = 0 }

}