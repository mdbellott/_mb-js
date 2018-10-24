//
// 0r
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
float scalar = 200;

void setup() {
  size(1000, 1000, P3D);
  background(0);
  strokeWeight(1);
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
  rotate(PI/2);
  
  pushMatrix();
  
  // Rotation
  rotateX(frameCount*PI/950);
  rotateY(frameCount*PI/950);
  rotateZ(frameCount*PI/1425);

  // Computation
  for (u = 0; u <= uMax; u+=(uMax/iterations)) {
    for (v = 0; v <= vMax; v+=(vMax/iterations)) {
      x = (sin(u)*cos(v)) * scalar;
      y = (sin(u)*sin(v)) * scalar;
      z = cos(v) * scalar;
      point(x, y, z);
    }
  }
  
  popMatrix();
}
