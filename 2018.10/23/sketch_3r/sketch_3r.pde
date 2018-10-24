//
// 3r
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
float iterations = 200;
float scalar = 200;

void setup() {
  size(1000, 1000, P3D);
  background(0);
  strokeWeight(0.7);
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
  float rSpeed = 700;
  rotateX(frameCount*PI/rSpeed);
  rotateY(frameCount*PI/rSpeed);
  rotateZ(frameCount*PI/(1.5*rSpeed));

  // Computation
  for (u = 0; u <= uMax; u+=(uMax/iterations)) {
    for (v = 0; v <= vMax; v+=(vMax/iterations)) {
      x = (cos(4*u)/4 + sin(v)*cos(u)) * scalar;
      y = (sin(4*u)/4 + sin(v)*sin(u)) * scalar;
      z = sin(v) * scalar;
      point(x, y, z);
    }
  }

  popMatrix();
}
