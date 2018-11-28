//
// L0r
// Mark Bellott
//
// Leftovers from 'Morphing and Rotation'
// Inspired by Joseph Coma's 
// `Morphing: A Guide to Mathematical Transformations for Architects and Designers`
//
// Code adapted from Derrick Schultz 
// Github: dvschultz / moprhing-processing
//
// Leftovers from Morp

float x, y, z = 0;
float u, uMin, uMax, v, vMin, vMax;
float iterations = 180;
float scalar = 50;

void setup() {
  size(2000, 1000, P3D);
  background(0);
  strokeWeight(1);
  stroke(255);
}

void draw() {

  // Setup for drawing
  uMin = 0;
  vMin = 0;
  uMax = 4*PI;
  vMax = PI;

  background(0);
  translate(width/2, height/2, 0);
  rotate(2*PI);
  rotateX(PI/2);

  pushMatrix();

  // Rotation
  float rSpeed = 350;
  rotateX(frameCount*-PI/rSpeed);

  // Computation
  for (u = uMin; u <= uMax; u+=(uMax/iterations)) {
    for (v = vMin; v <= vMax; v+=(vMax/iterations)) {
      x = (u + v) * scalar;
      y = (sin(u)*sin(v)) * scalar;
      z = (sin(u+v)*cos(u)) * scalar;
      point(x, y, z);
    }
  }

  popMatrix();
}
