//
// 1r
// Mark Bellott
//
// Morphing and Rotation
// Inspired by Joseph Coma's 
// `Morphing: A Guide to Mathematical Transformations for Architects and Designers`
//
// Code adapted from Derrick Schultz 
// Github: dvschultz / moprhing-processing
//

float x, y, z = 0;
float u, uMax, v, vMax;
float iterations = 150;
float scalar = 75;

void setup() {
  size(1000, 1000, P3D);
  background(0);
  strokeWeight(0.85);
  stroke(255);
}

void draw() {

  // Setup for drawing
  u = 0;
  v = 0;
  uMax = 2*PI;
  vMax = PI;

  background(0);
  translate(width/2, height/2, 0);
  rotate(PI/3);

  pushMatrix();

  // Rotation
  //float rSpeed = 950
  float rSpeed = 575;
  rotateX(frameCount*PI/rSpeed);
  rotateY(frameCount*PI/rSpeed);
  rotateZ(frameCount*PI/(1.5*rSpeed));

  // Computation
  for (u = -PI; u <= PI; u+=(uMax/iterations)) {
    for (v = 0; v <= vMax; v+=(vMax/iterations)) {
      x = (v*cos(u))*scalar;
      y = (v*sin(u))*scalar;
      z = (u)*scalar;
      point(x, y, z);
    }
  }

  popMatrix();
}
