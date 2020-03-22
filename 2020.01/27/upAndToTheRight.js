// Up and to the Right
// Mark Bellott

let num = 50, frames = 120
let unit = 0.0, theta = 0.0

function setup() {
  createCanvas(700, 700);
  background(0);
  stroke(255) 
  unit = 700 / num
  rotate(PI)
}

function draw() {
  background(0);
  for (let x=1; x<=num+1; x++) {
    for (let y=1; y<=num+1; y++) {
      let distance = dist(width/2, height/2, x*(unit), y*(unit))
      let offset = map(distance, 0, sqrt(sq(width)+sq(height)), 0, TWO_PI)
      // let size = map(sin(theta + 0.94*y*x) * cos(x) * sin(y), -1, 1, 0.1, 10) 
      
      let xSize = map(cos(theta + 0.94*y*x) * cos(x) * sin(y), -1, 1, 0.1, 10)
      let ySize = map(sin(theta + 0.94*y*x) * cos(x) * sin(y), -1, 1, 0.1, 10)
      let c = -3
      push()
      translate(x*unit, y*unit)
      ellipse(x + xSize, y + ySize, xSize, ySize)
      pop()
    }
  
  }
  
  theta -= (TWO_PI/frames)*3
}
​