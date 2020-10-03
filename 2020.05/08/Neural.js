// Neural
// Mark Bellott

// Inspiration from:
// https://www.openprocessing.org/sketch/872618

let W = 700
let H = 700
let R = 0
let inc = 0

let n = 900

function setup() {
  R = H/3
  createCanvas(W, H)
  background(0)
  stroke(255)
  strokeWeight(0.15)
  noFill()
}

function makeVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI)
  const v = p5.Vector.fromAngle(angle + PI)
  v.mult(R)
  return v
}

function draw() {
  background(0)
  
  inc -= 0.000005
  translate(W/2, H/2)
  ellipse(0, 0, R*2)

  for(let i = 0; i < n; i++) {
    
    let x = R + noise(i,i,inc)
    let y = R + noise(i,i,inc)
    
    let v1 = makeVector(i*x, n)
    let v2 = makeVector(i*y*inc, n)
    line(v2.y, v2.x, v1.y, v1.x);
  }
}