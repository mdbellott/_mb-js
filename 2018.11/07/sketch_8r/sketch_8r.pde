//
// 8r
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
float u, uMin, uMax, v, vMin, vMax;
float iterations = 100;
float scalar = 200;

void setup() {
  size(1000, 1000, P3D);
  background(0);
  strokeWeight(1);
  stroke(255);
}

void draw() {

  // Setup for drawing
  uMin = 0;
  vMin = 0;
  uMax = 2*PI;
  vMax = PI;

  background(0);
  translate(width/2, height/2, 0);
  //rotate(3*PI/4);

  pushMatrix();

  // Rotation
  float rSpeed = 600;
  rotateX(frameCount*PI/rSpeed);
  rotateY(frameCount*PI/rSpeed);
  rotateZ(frameCount*PI/(1.5 * rSpeed));

  // Computation
  // NOTE: Not sure why uMin - PI and uMax - PI work, 
  // but uMin = -PI and uMax = 0 do not
  // A problem for another day :hmmm:
  for (u = uMin; u <= uMax; u+=(uMax/iterations)) {
    for (v = vMin; v <= vMax; v+=(vMax/iterations)) {
      x = (sin(2*v)*cos(u)) * scalar;
      y = (sin(2*v)*sin(u)) * scalar;
      z = (cos(u)) * scalar;
      point(x, y, z);
    }
  }

  popMatrix();
}
