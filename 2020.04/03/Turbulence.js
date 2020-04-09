// Turbulence
// Mark Bellott

// Inspiration from:
// https://www.openprocessing.org/sketch/792407

let kMax
let step = 0.1
let n = 50
let radius = 50 
let gap = 0.01
let maxNoise = 10
let inc = 0
let level = 5

let noiseProg = (x) => (x*x)

let W = 700, H = 700

function setup() {
  createCanvas(W, H)
  colorMode(HSB, 1)
  angleMode(DEGREES)
  kMax = random(0.5, 1)
  step = 0.001
  
  noFill()
}

function draw() {
  background(0)
  
  for (let i=0; i<n; i++) {
    
    let alpha = 0.9 - noiseProg(i / n)
    stroke(1, alpha)
    
    let size = radius + i*gap
    let k = kMax * sqrt(i/n)
    let noisiness = maxNoise * noiseProg(i/level)
    surfaceNoise(size, k, 50 * i * step + inc, noisiness)
  }
  inc += 0.001
}


function surfaceNoise(size, k, t, noisiness) {
  beginShape()
  for (let i = 0; i < 360; i += 1) {
    
    let r1 = cos(i) - inc*10
    let r2 = sin(i) + inc*10
    let r = noise(k*r1, k*r2, t*2) * noisiness
    let x = W/2 + r * cos(i) + inc*10
    let y = H/2 + r * sin(i)
    
    curveVertex(x, y)
    
  }
  endShape(CLOSE)
}
