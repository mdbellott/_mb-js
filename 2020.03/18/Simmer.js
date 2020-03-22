// Simmer
// Mark Bellott

// Inspired by:
// https://www.openprocessing.org/sketch/792407

// Inspiration from:
// https://www.openprocessing.org/sketch/792407

let kMax
let step = 0.1
let n = 75
let radius = 50 
let gap = 0.001
let maxNoise = 30
let inc = 0
let level = 25

let noiseProg = (x) => (x*x)

let W = 700, H = 700

function setup() {
  createCanvas(W, H)
  colorMode(HSB, 1)
  angleMode(DEGREES)
  kMax = random(0.5, 1)
  step = 0.01
  
  // stroke(255) 
  noFill()
}

function draw() {
  background(0)
  
  for (let i=0; i<n; i++) {
    
    let alpha = 1.25 - noiseProg(i / n)
    stroke(1, alpha)
    
    let size = radius + i*gap
    let k = kMax * sqrt(i/n)
    let noisiness = maxNoise * noiseProg(i/level)
    circleNoise(size, k, i * step + inc, noisiness)
  }
  inc += 0.005
}


function circleNoise(size, k, t, noisiness) {
  beginShape()
  let angleStep = 360 / 500
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
  