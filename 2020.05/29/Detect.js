// Detect
// Mark Bellott

let W = 700
let H = 700
let R = 0
let inc = 0

let n = 200

function setup() {
  R = H/2
  createCanvas(W, H)
  background(0)
  stroke(255,255)
  strokeWeight(0.37)
  noFill()
}

function makeVector(index, total, m) {
  const angle = map(index * total, 0, total, 0, 3)
  const v = p5.Vector.fromAngle(angle)
  v.mult(m)
  return v
}

function draw() {
  background(0)
  
  inc += 0.00002
  translate(W/2, H/2)

  for(let i = 0; i < n; i++) {
    let v1 = makeVector(i, n, R)
    let v2 = makeVector(i * inc, n, R)
    
//    let v3 = makeVector(i, n, R)
//     let v4 = makeVector(i * inc, n, R)
    
    line(v1.y, v2.x, v1.x, v2.y)
    // line(v3.y, v2.x, v1.x, v4.y)
  }
}