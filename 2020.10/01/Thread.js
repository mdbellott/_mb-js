// Thread
// Mark Bellott

let W = 700, H = 700
let n = 50
function setup() {
  createCanvas(W,H)
  background(0)
  strokeWeight(2)
  noFill()
}

function draw() {
  background(0)

  for (let i = 0; i < n; i++) {
    let color = map(i, 0, n, 100, 255)
    stroke(color)
    
    beginShape()
    for (let x = 0; x <= W; x += 10) {
      let nz = noise(x*0.001, i, frameCount * 0.0025)
      let y = map(nz, 0, 1, -H, H*2)
      vertex(x, y)
    }
    endShape()
  }
}