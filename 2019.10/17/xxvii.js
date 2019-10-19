// xxvii
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

let size = 1
let dist = 35

let theta = 0.0

function setup() {
	createCanvas(700, 700)
	background(0)
	stroke(255)	
	noFill()
}

function draw() {
	// background(0)

	// Animate
	for(let i=-10; i<30; i++) {		
		for(let j=-10; j<30; j++) {
			let x = 1.5*dist + dist*i + dist*sin(theta + i)/2
			let y = 1.5*dist + dist*j + dist*cos(theta + i)/2
			ellipse(x, y, size, size)
		}
	}	
	theta += 0.01
}

