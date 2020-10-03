// Summer
// Mark Bellott

let kMax = 30
let step = 1
let n = 15
let radius = 1 
let gap = 0.1
let maxNoise = 55
let inc = 0
let level = 5

let noiseProg = (x) => (x*x)

let W = 700, H = 700

function setup() {
  createCanvas(W, H)
  colorMode(HSB, 1)
  angleMode(DEGREES)
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
    circleNoise(size, k, 50 * i * step + inc, noisiness)
  }
  inc += 0.005
}


function circleNoise(size, k, t, noisiness) {
  beginShape()
  let angleStep = 360 / 500
  for (let theta = 0; theta < 360; theta += angleStep) {
    
    let r1 = tan(theta) + 1
    let r2 = tan(theta) + 1
    let r = size + noise(k*r1, k*r2, t) * noisiness
    let x = W/2 + r * sin(theta)
    let y = H/2 + r * cos(theta)
    
    curveVertex(x, y)
    
  }
  endShape(CLOSE)
}
    