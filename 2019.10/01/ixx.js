// ixx
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

let amplitude = 0, amplitude2 = 0
let frequency = 0.0005
let theta = 0
function setup() {
	createCanvas(700, 700)
	background(0)
	stroke(255)	
	noFill()
}

function draw() {
	// background(0)
	translate(width*0.5, height*0.5)
	rotate(radians(theta))
	
	let r = 20
	amplitude = 200 + 30*sin(millis()*frequency*r)
	amplitude2 = 200 + 30*sin(millis()*frequency*r)

	ellipse(amplitude*cos(r), amplitude2*sin(r), 10, 10)
	theta += 1

}