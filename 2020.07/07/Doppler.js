// Doppler
// Mark Bellott

// Inspiration:
// https://www.openprocessing.org/sketch/145542

let n = 50
let maxSize = 250
let f = 0
let inc = 0.0

function setup() {
  createCanvas(700, 700, WEBGL)
  noFill()
  strokeWeight(2)
}

function draw() {
  background(0)
  stroke(215)
  for (let i = f; i < TWO_PI+f; i+= TWO_PI / n) {
    push()
    translate(0, 0, cos(i) * 50)
    stroke(max(20 + tan(i-inc) * 150,0))
    ellipse(0, 0, maxSize + sin(i + inc) * maxSize, maxSize + sin(i) * maxSize)
    pop()
  }
  f += 0.01
  inc += 0.01
}
