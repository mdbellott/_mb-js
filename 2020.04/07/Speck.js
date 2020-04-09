// Speck
// Mark Bellott

// Inspiration from:
// https://www.openprocessing.org/sketch/494102

var particles = []

let n = 200
let noiseScale = 800

let speed = 10

let W = 700
let H = 700

function setup() {
  createCanvas(W, H)
  background(0)
  
  for(var i=0; i<n; i++) {
    particles[i] = new Particle(random(0, W),random(0,H))
  }
}

function draw() {
  noStroke()
  smooth()
  for(var i=0; i<n; i++) {
    var radius = map(i,0,n,1,2)
    
    fill(255,255,255,255)
    particles[i].move()
    particles[i].display(radius)
    particles[i].checkEdge()
  }
}

function Particle(x,y) {
  this.dir = createVector(0,0)
  this.vel = createVector(0,0)
  this.pos = createVector(0,0)
  this.speed = speed
  
  this.move = function() {
    var angle = noise(this.pos.x/noiseScale, this.pos.y/noiseScale)*TWO_PI*noiseScale
    this.dir.x = cos(angle)
    this.dir.y = sin(angle)
    this.vel = this.dir.copy()
    this.vel.mult(this.speed)
    this.pos.add(this.vel)
  }
  
  this.checkEdge = function(){
    if(this.pos.x > width || this.pos.x < 0 || this.pos.y > height || this.pos.y < 0){
      this.pos.x = random(50, width)
      this.pos.y = random(50, height)
    }
  }
  
  this.display = function(r){
    ellipse(this.pos.x, this.pos.y, r, r)
  }
}
