// Plume
// Mark Bellott

let W = 700, H = 700
let n = 75
function setup() {
  createCanvas(W,H)
  background(0)
  strokeWeight(2)
  noFill()
}

function draw() {
  background(0)

  for (let i = 0; i < n; i++) {
    let color = map(i, 0, n, 0, 255)
    stroke(color)
    beginShape()
    for (let j = 0; j <= n; j++) {
      let nzx = noise(j*0.01, -i*0.01, frameCount * 0.001)
      let nzy = noise(-i*0.01, j*0.01, frameCount * 0.001)
      let x = map(nzx, 0, 1, -W, W*2)
      let y = map(nzy, 0, 1, -H, H*2)
      vertex(x, y)
    }
    endShape()
  }
}