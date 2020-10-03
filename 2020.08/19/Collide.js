// Collide
// Mark Bellott

let c = 2
let W = 700
let q = W/5
let r = W/5
let s = 0.003

function setup() {
  createCanvas(W, W, WEBGL)
  background(0)
  noFill()
}

function draw() {
  background(0)
  stroke(255)
  strokeWeight(1.5)
  fill(0)
  let d = noise(c)
  push()
  rotateX(-frameCount * s)
  torus(q, r)
  rotateY(-frameCount * (s+0.001))
  torus(q, r)
  pop()
  
  push()
  rotateX(frameCount * (s+0.002))
  torus(q, r)
  rotateY(frameCount * (s+0.003))
  torus(q, r)
  pop()
  
  c+=0.1
}