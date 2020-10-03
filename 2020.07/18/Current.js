// Current
// Mark Bellott

// Inpiration:
// https://www.openprocessing.org/sketch/742075

var A = []
var B = []
var C = []
let num = 700
let noiseScale = 50
let noiseStrength = 1
let r = 3

function setup() {
  createCanvas(700, 700);
  noStroke();
  for (let i=0; i<num; i++) {
    let loc_a = createVector(random(width*2.9), random(height), 5)
    let angle_a = random(TWO_PI)
    let dir_a = createVector(cos(angle_a), sin(angle_a))
    let loc_b = createVector(random(width*2.9), random(height), 5)
    let angle_b = random(TWO_PI)
    let dir_b = createVector(cos(angle_b), sin(angle_b))
    let loc_c = createVector(random(width*2.9), random(height), 5)
    let angle_c = random(TWO_PI)
    let dir_c = createVector(cos(angle_c), sin(angle_c))
    let speed = random(1.3, 0.8)
    A[i] = new Particle(loc_a, dir_a, speed)
    B[i] = new Particle(loc_b, dir_b, speed)
    C[i] = new Particle(loc_c, dir_c, speed)
  }
}

function draw() {
  smooth()
  // background(0)
  fill(0,10)
  noStroke()
  rect(0, 0, width, height)
    
  for (let i=0; i<num; i++) {
    // var fade = map(i,0,num,0,250)
    
    fill(255)
    A[i].move()
    A[i].update(r)
    A[i].checkEdges()

    fill(255, 255, 255)
    B[i].move()
    B[i].update(r)
    B[i].checkEdges()

    fill(255, 255, 255)
    C[i].move()
    C[i].update(r)
    C[i].checkEdges()
  }
}

// Particle from 
// https://www.openprocessing.org/sketch/742075

let Particle = function(loc_, dir_, speed_) {
  this.loc = loc_;
  this.dir = dir_;
  this.speed = speed_;
  this.d = 1;
  this.col;
  this.angle;
  this.vel;
};

Particle.prototype.run = function() {
    this.move();
    this.checkEdges();
    this.update();
};

Particle.prototype.move = function(){
  this.angle=noise(this.loc.x/noiseScale, this.loc.y/noiseScale, frameCount/noiseScale)*TWO_PI*noiseStrength;
  this.dir.x = -cos(this.angle)+sin(this.angle)-sin(this.angle);
  // this.dir.y = sin(this.angle)-cos(this.angle)*sin(this.angle);
  
  // this.dir.y = tan(this.angle)*sin(this.angle)
  this.dir.y = tan(this.angle)*cos(this.angle)
  
  this.vel = this.dir.copy();
  this.vel.mult(this.speed*this.d);
  this.loc.add(this.vel);
};

// Method to chech edges 
Particle.prototype.checkEdges = function(){
 if (this.loc.x < 0 || this.loc.x > width || this.loc.y < 0 || this.loc.y > height) {    
      this.loc.x = random(width*9.2);
      this.loc.y = random(height);
    }
};


// Method to update position
Particle.prototype.update = function(r){
    ellipse(this.loc.x, this.loc.y, r);
};