// xxxvi
// Mark Bellott

let num = 30, frames = 120
let unit = 0.0, theta = 0.0

function setup() {
	createCanvas(700, 700);
	background(0);
	stroke(255)	
	unit = 700 / num
}

function draw() {
	for (let x=0; x<=num; x++) {
		for (let y=0; y<=num; y++) {
			let s = 10000 
			let distance = dist(width/2, height/2, x*(unit + s), y*(unit + s))
			let offset = map(distance, 0, sqrt(sq(width)+sq(height)), 0, TWO_PI)
			let size = map(sin(theta+offset), -1, 1, 0, 5) 
			push()
      translate(x*unit, y*unit)
			let py = map(sin(theta+offset+y),-1,1,-7,7)
      ellipse(0, py, size, size)
      pop()
		}
	}
	
  theta -= (TWO_PI/frames)/3.7
}
