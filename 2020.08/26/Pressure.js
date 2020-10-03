// Pressure
// Mark Bellott

let W = 700
let H = 700
let R = 0
let inc = 1
let f = 0.0

let n = 300
let vn = 100

let noiseAmount = 10
let noiseScale

function setup() {
  R = H/3
  createCanvas(W, H)
  background(0)
  stroke(255)
  strokeWeight(0.5)
  noFill()
}

function draw() {
  background(0)
  
  f-=0.00005
  noiseScale = f
  translate(W/2, H/2)
  ellipse(0, 0, R*2)
  for(let i = 0; i < n; i++) {
    let v1 = makeVector(i*-inc, n)
    let v2 = makeVector(i*inc, n)
    
    let xi = (v2.x-v1.x)/vn
    let yi = (v2.y-v1.y)/vn
    
    let x = v1.x
    let y = v1.y

    beginShape()
    for(let i=0; i<=vn; i++) {
      let xx = x + map(noise(x*noiseScale,y*noiseScale,0),0,1, -noiseAmount, noiseAmount)
      let yy = y + map(noise(x*noiseScale,y*noiseScale,0),0,1, -noiseAmount, noiseAmount)
      vertex(xx,yy)
      x += xi
      y += yi
    }
    endShape()
  }
}

function makeVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI)
  const v = p5.Vector.fromAngle(angle + PI)
  v.mult(R)
  return v
}