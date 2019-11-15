// xxxi
// Mark Bellott
//
// Inspiration: 'Star Wave' by Jerome Herr 
// https://www.openprocessing.org/sketch/170022

let num = 30, frames = 30
let unit = 0.0, theta = 0.0
let delta = 0.0, sizeOffset = 0

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
			let distance = dist(width/2, height/2, x*unit, y*unit)
			let offset = map(distance, 0, sqrt(sq(width/2)+sq(height/2)), 0, TWO_PI)
			let size = map(sin(theta+offset), -1, 1, unit*0.25 - sizeOffset, unit*0.05 + sizeOffset)
			push()
      translate(x*unit, y*unit)
      let px = map(sin(theta+offset),-1,1,0,0)
      ellipse(px, 0, size, size)
      pop()
		}
	}
	
  theta -= TWO_PI/frames
	delta += 0.01
	sizeOffset = 10*sin(delta)
}
