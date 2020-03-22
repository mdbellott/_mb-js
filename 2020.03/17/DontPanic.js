// Don't Panic
// Mark Bellott

// Inspired by:
// https://www.openprocessing.org/sketch/792407

let kMax
let step = 0.1
let n = 20
let radius = 50 
let gap = 20 
let maxNoise = 10
let inc = 0
let level = 2

let noiseProg = (x) => (x*x)

let W = 700, H = 700

function setup() {
  createCanvas(W, H)
  
  angleMode(DEGREES)
  kMax = random(0.5, 1)
  step = 0.01
  
  stroke(255)
  noFill()
}

function draw() {
  background(0)
  
  for (let i=0; i<n; i++) {
    let size = radius + i*gap
    let k = kMax * sqrt(i/n)
    let noisiness = maxNoise * noiseProg(i/level)
    circleNoise(size, k, i * step + inc, noisiness)
  }
  if (gap > 0) { gap -= 0.25 }
  if (level < 10) { level += 0.1 }
  inc += 0.1
}


function circleNoise(size, k, t, noisiness) {
  beginShape()
  let angleStep = 360 / 5000
  for (let theta = 0; theta < 360; theta += angleStep) {
    
    let r1 = cos(theta) + 1
    let r2 = sin(theta) + 1
    let r = size + noise(k*r1, k*r2, t) * noisiness
    let x = W/2 + r * cos(theta)
    let y = H/2 + r * sin(theta)
    
    curveVertex(x, y)
    
  }
  endShape(CLOSE)
}
