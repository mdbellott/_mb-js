// Nove
// Mark Bellott

// Inspiration:
// https://www.openprocessing.org/sketch/946973

let W = 700, H = 700

function setup() {
  createCanvas(W, H)
  noFill()
  stroke(255)
  strokeWeight(2.5)
}

function draw() {
  background(0)
  
  for(let y = 0; y < 15; y++){
    for(let r = 0; r < 15; r++){
      push()
      translate(-50,-50)
      translate(r*100,y*100)
      let neg = (r%4 == 0) ? -1 : 1
      if (y%2 == 0 && r%2 == 0) { fill(255) }
      else { noFill() }
      rotate(radians(neg*5)*(frameCount/10))
      let t = 50
      polygon(0, 0, t, 9)
      pop()
    }
  }
}

function polygon(x, y, radius, npoints) {
  let angle = TWO_PI / npoints;
  beginShape();
  for (let a = 0; a < TWO_PI; a += angle) {
    let sx = x + cos(a) * radius;
    let sy = y + sin(a) * radius;
    vertex(sx, sy);
  }
  endShape(CLOSE);
}
