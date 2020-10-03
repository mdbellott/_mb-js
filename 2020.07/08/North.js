// North
// Mark Bellott

// Inspiration:
// https://www.openprocessing.org/sketch/145542

let n = 100
let maxSize = 100
let f = 0
let inc = 0.0
let rot = 0.1

function setup() {
  createCanvas(700, 700, WEBGL)
  noFill()
  strokeWeight(2)
}

function draw() {
  // rotateX(PI/rot)
  rotateY(PI/rot)
  background(0)
  stroke(215)
  for (let i = f; i < TWO_PI+f; i+= TWO_PI / n) {
    push()
    translate(0, 0, cos(i) * 50)
    stroke(max(20 + sin(i) * 200,10))
    // stroke(i*50)
    ellipse(0, 0, tan(i + inc) * maxSize/4, cos(i) * maxSize*7)
    pop()
  }
  f += 0.001
  // inc += 0.01
  rot += 0.00002
}
