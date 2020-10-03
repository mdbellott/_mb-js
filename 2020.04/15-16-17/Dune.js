// Dune - Spice - Rise
// Mark Bellott

// Inspiration from:
// https://www.openprocessing.org/sketch/713436

let W = 700
let H = 700

let nPaths = 10000
let paths = []

let noisescale
let max = 4
let mult = max*2

function setup() {
	createCanvas(W, H)
	background(0)
	noFill()
	strokeWeight(0.1)
	
	reset()
}

function reset() {
	noisescale = random(0.08, 0.1)	
	noiseDetail(int(random(1,max)))
	
	for(var i=0; i<nPaths; i++) {
		paths[i] = new Path(i)
	} 
}

function draw() {
	for(var i=0; i<nPaths; i++) {
		paths[i].run()
	} 
}

// Paths

function Path(index) {
	this.index = index
	this.velocity = createVector(200,200,200)
	this.acceleration = createVector(200,200,200)
	this.startPosition = createVector(random(0,W),
																		random(0,H),
																		random(0,sin(H)))
	this.position = this.startPosition.copy()
	this.alpha = random(50,95)
}

Path.prototype.run = function() {
	this.update()
	this.display()
}

Path.prototype.update = function() {
	this.velocity = createVector(1-2*noise(sin(TAU*this.position.x/width), 
																				 sin(TAU*this.position.y/height)), 
															 1-2*noise(cos(TAU*this.position.x/width), 
																				 cos(TAU*this.position.y/height)))
	this.velocity.mult(mult)
	this.velocity.rotate(sin(1)*noise(sin(TAU*this.position.x/width)))
	this.startPosition = this.position.copy()
	this.position.add(this.velocity)
}

Path.prototype.display = function() {
	stroke(255, this.alpha)
	line(this.startPosition.x,
			 this.startPosition.y,
			 this.position.x,
			 this.position.y)
	if (this.position.x > W ||
			this.position.x < 0 ||
			this.position.y > H ||
			this.position.y < 0) {
		this.startPosition = createVector(random(0,W),
																		random(0,H),
																		random(0,W*H))
		this.position = this.startPosition.copy()
	}
}
