// Sprawl
// Mark Bellott

let W = 700
let H = 700

let nPaths = 1000
let paths = []

let detail = 1

function setup() {
	createCanvas(W, H)
	background(0)
	noFill()
	strokeWeight(1.5)
	
	reset()
}

function reset() {
	noiseDetail(detail)
	
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
																		random(0,sin(index) * cos(index)))
	this.position = this.startPosition.copy()
	this.alpha = 55 * (index/nPaths) + 100
}

Path.prototype.run = function() {
	this.update()
	this.display()
	strokeWeight(1)
}

Path.prototype.update = function() {
	this.velocity = createVector(tan(this.position.x), 
															 tan(this.position.y))
	this.velocity.mult(0.005)
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
		// strokeWeight(100)
		// stroke(255, 255)
		this.startPosition = createVector(random(0,W),
																		random(0,H),
																		random(0,W*H))
		this.position = this.startPosition.copy()
	}
}
