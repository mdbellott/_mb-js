// xxxix
// Mark Bellott

let num = 30, frames = 120
let unit = 0.0, theta = 0.0
let z = 0

function setup() {
  createCanvas(700, 700);
  background(0);
  stroke(255) 
  unit = 700 / num
}

function draw() {
  // background(0)
  for (let x=0; x<=num; x++) {
    for (let y=0; y<=num; y++) {
      let distance = dist(width/2, height/2, x*(unit + z), y*(unit + z))
      let offset = map(distance, 0, sqrt(sq(width/2)+sq(height/2)), 0, TWO_PI)
      let size = map(cos(theta+offset), -1, 1, 0.5, 5) 
      push()
      translate(x*unit, y*unit)
      let p = 1
      let q = 2
      let px = map(sin(theta+offset*3) * 20,-p,p,-q,q)
      let py = map(cos(theta+offset*3),-p,p,-q,q)
      ellipse(px, py, size, size)
      pop()
    }
  }
  
  theta -= TWO_PI/frames/10
}
