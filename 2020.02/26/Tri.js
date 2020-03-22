// Tri
// Mark Bellott

// Inspired by:
// observablehq.com/@rreusser/instanced-webgl-circles
// &
// openprocessing.org/sketch/748916

let maxCircle = 2500, 
    minCircle = 100, 
    maxVertex = 30, 
    minVertex = 3

let circleCoutnt, vertexCoutnt

function setup() {
  createCanvas(700, 700)
  background(0)
  
  updateShape()
}

function draw() {
  background(0)
  translate(width / 2, height / 2)
  
  for (let ci = 0; ci < circleCount; ci++) {
    let time = float(frameCount) / 20
    let thetaC = map(ci, 0, circleCount, 0, TAU)
    let scale = 300

    let circleCenter = getCenterByTheta(thetaC, time, scale)
    let circleSize = getSizeByTheta(thetaC, time, scale)
    let color = getColor()

    stroke(color)
    noFill()
    beginShape()
    for (let vi = 0; vi < vertexCount; vi++) {
      let thetaV = map(vi, 0, vertexCount, 0, TAU)
      let x = circleCenter.x + cos(thetaV) * circleSize
      let y = circleCenter.y + sin(thetaV) * circleSize
      vertex(x, y)
    }
    endShape(CLOSE)
  }
}

function updateShape() {
  let xVal = 350
  let yVal = 10
  let xoffset = abs(xVal - width / 2), yoffset = abs(yVal - height / 2);
  circleCount = int(map(xoffset, 0, width / 2, maxCircle, minCircle));
  vertexCount = int(map(yoffset, 0, height / 2, maxVertex, minVertex));
}

function getCenterByTheta(theta, time, scale) {
  let direction = createVector(cos(theta), sin(theta))
  let distance = 0.6 + 0.2 * cos(theta * 6.0 + cos(theta * 8.0 + time))
  let circleCenter = direction.mult(distance * scale)
  return circleCenter
}

function getSizeByTheta(theta, time, scale) {
  let offset = 0.2 + 0.12 * cos(theta * 9.0 - time * 2.0)
  let circleSize = scale * offset
  return circleSize
}

function getColor() {
  let alpha = map(circleCount, minCircle, maxCircle, 150, 30)
  return color(255, 255, 255, alpha)
}
