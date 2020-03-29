// Reflect
// Mark Bellott

// Inspiration from:
// https://www.openprocessing.org/sketch/792407

let kMax
let step = 0.1
let n = 15
let radius = 50 
let gap = 0.01
let maxNoise = 30
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
    
    let alpha = 1 - noiseProg(i / n)
    stroke(1, alpha)
    
    let size = radius + i*gap
    let k = kMax * sqrt(i/n)
    let noisiness = maxNoise * noiseProg(i/level)
    surfaceNoise(H/2, k*500, 500 * i * step + inc, noisiness)
    surfaceNoise(H/2, k*500, 500 * i * step + inc, -noisiness)
    
  }
  inc += 0.02
}

function surfaceNoise(size, k, t, noisiness) {
  beginShape()
  
  for (let i=0; i<W; i++) {
    let r = size + noise(k*2*i,k*2*i, t) * noisiness
    let y = r
    let x = i
    
    vertex(x,y)
  }
  
  endShape()
}
    