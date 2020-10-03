// Refract
// Mark Bellott

// Inspiration from:
// https://www.openprocessing.org/sketch/872618

let W = 700
let H = 700
let R = 0
let inc = 0

let n = 2000

function setup() {
  R = H/3
  createCanvas(W, H)
  background(0)
  stroke(255,225)
  strokeWeight(0.1)
  noFill()
}

function makeVector(index, total, m) {
  const angle = map(index % total, 0, total, 0, TWO_PI)
  const v = p5.Vector.fromAngle(angle)
  v.mult(m)
  return v
}

function draw() {
  background(0)
  
  inc -= 0.005
  translate(W/2, H/2)
  // ellipse(0, 0, R*2)

  for(let i = 0; i < n; i++) {
    let v1 = makeVector(i, n, R)
    let v2 = makeVector(i * inc, n, -R)
    line(v1.x, v2.y, v2.x, v1.y)
  }
}