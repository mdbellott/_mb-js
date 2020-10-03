// Stitch
// Mark Bellott

// Inspiration:
// https://www.openprocessing.org/sketch/946973

let W = 700, H = 700

function setup() {
  createCanvas(W, H)
  noFill()
  stroke(255)
  strokeWeight(3)
}

function draw() {
  background(0)
  
  for(let y = 0; y < 25; y++){
    for(let r = 0; r < 25; r++){
      push()
      translate(-50,-50)
      translate(r*40,y*40)
      let neg = (r%5 == 0) ? -1 : 1
      rotate(radians(neg*3)*(frameCount/30))
      line(0,0,135,135)
      pop()
    }
  }
}