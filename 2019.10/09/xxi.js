// xxi
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

let size = 700
let big = 87.5
let small = 10

function setup() {
	createCanvas(size, size)
	background(0)
	stroke(255)	
	noFill()
}

function draw() {
	background(0)

	for(let i=0; i<7; i++) {		
		for(let j=0; j<7; j++) {
			ellipse(big + big*i, big + big*j, big, big)
		}
	}
	
	for(let i=0; i<6; i++) {		
		for(let j=0; j<7; j++) {
			ellipse(1.5*big + big*i, big + big*j, small, small)
		}
	}
	
	for(let i=0; i<7; i++) {		
		for(let j=0; j<6; j++) {
			ellipse(big + big*i, 1.5*big + big*j, small, small)
		}
	}
	
	for(let i=0; i<6; i++) {		
		for(let j=0; j<6; j++) {
			ellipse(1.5*big + big*i, 1.5*big + big*j, small, small)
		}
	}

}