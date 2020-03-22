// xxxxiii
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
  for (let x=0; x<=num; x++) {
    for (let y=0; y<=num; y++) {
      let distance = dist(width/2, height/2, x*(unit), y*(unit))
      let offset = map(distance, 0, sqrt(sq(width)+sq(height)), 0, TWO_PI)
      let size = map(sin(theta + 0.94*y*x) * sin(x) * sin(y), -1, 1, 0.1, 10) 
      let c = -3
      if (x == 0 || x >= 47 || y == 0 || y >= 47) { size = 0 }
      push()
      translate(x*unit, y*unit)
      ellipse(x + c, y + c, size, size)
      rotate(PI/2)
      pop()
    }
  }
  
  theta -= (TWO_PI/frames)*3
}
​