// Tri
// Mark Bellott

let c = 2
let W = 700
let q = W/5
let r = W/5
let x = 3
let y = 3
let s = 0.003
let si = 0.001

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
  torus(q, r, x, y)
  rotateY(-frameCount * (s+(si*1)))
  torus(q, r, x, y)
  pop()
  
  push()
  rotateX(frameCount * (s+(si*2)))
  torus(q, r, x, y)
  rotateY(frameCount * (s+(si*3)))
  torus(q, r, x, y)
  pop()
  
  c+=10
}