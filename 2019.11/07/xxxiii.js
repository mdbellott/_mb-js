// xxxiii
// Mark Bellott
//
// Inspiration: 'Star Wave' by Jerome Herr 
// https://www.openprocessing.org/sketch/170022

let num = 30, frames = 120
let unit = 0.0, theta = 0.0

function setup() {
	createCanvas(700, 700);
	background(0);
	stroke(255)	
	unit = 700 / num
}

function draw() {
	background(0);
	for (let x=0; x<=num; x++) {
		for (let y=0; y<=num; y++) {
			let s = 10000 
			let distance = dist(width/2, height/2, x*(unit + s), y*(unit + s))
			let offset = map(distance, 0, sqrt(sq(width)+sq(height)), 0, TWO_PI)
			let size = map(sin(theta+offset), -1, 1, 0, 5) 
			// size = 2
			push()
      translate(x*unit, y*unit)
      let px = map(sin(theta+offset*5),-1,1,10,-10)
			px = 0
			let py = map(sin(theta+offset*5),-1,1,-10,10)
			// py = 0
      ellipse(px, py, size, size)
      pop()
		}
	}
	
  theta -= (TWO_PI/frames)
}
