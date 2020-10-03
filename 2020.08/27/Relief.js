// Relief
// Mark Bellott

let W = 700
let H = 700
let R = 0
let inc = 1
let f = 0.002
let fNeg = -0.00001
let fPos = 0.00001
let fInc = fNeg

let n = 1000
let vn = 50

let noiseAmount = 20
let noiseScale

function setup() {
  R = H/1.3
  createCanvas(W, H)
  background(0)
  stroke(255)
  strokeWeight(0.5)
}

function draw() {
  background(0)
  noFill()
  
  if(f<-0.002) {
    fInc = fPos
  } else if(f>0.002) {
    fInc = fNeg
  }
  
  f += fInc
  noiseScale = f
  translate(W/2, H/2)

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
  
  fill(0)
  ellipse(0, 0, (H/3)*2)
}

function makeVector(index, total) {
  const angle = map(index % total, 0, total, 0, TWO_PI)
  const v = p5.Vector.fromAngle(angle + PI)
  v.mult(R)
  return v
}