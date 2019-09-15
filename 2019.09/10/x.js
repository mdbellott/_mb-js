// x
// Mark Bellott
//
// p5.js
// Rendered on openprocessing.org

let theta = 0.5, bounds = 400
let aWeight = 9, aStroke = 255, aX = 0, aY = 0, aSize = 500

let bWeight = 21, bStroke = 255, bX = -200, bY = -200, bSize = 700
let cWeight = 15, cStroke = 255, cX = 200, cY = 200, cSize = 700
let dWeight =	10, dStroke = 255, dX = 200, dY = -200, dSize = 700
let eWeight = 7, eStroke = 255, eX = -200, eY = 200, eSize = 700

let bxSwitch = 0, bySwitch = 0
let cxSwitch = 1, cySwitch = 1
let dxSwitch = 0, dySwitch = 0
let exSwitch = 1, eySwitch = 1

function setup() {
	createCanvas(700, 700)
}

function draw() {
	translate(width/2, height/2)
	background(0)
	noFill()

	// Source
	// A
	stroke(aStroke)
	strokeWeight(aWeight)
	ellipse(aX,aY,aSize,aSize)
	
	// B
	if (bxSwitch == 0) { bX += theta*2 }
	else { bX -= theta*2 }
	if (bySwitch == 0) { bY += theta }
	else { bY -= theta }
	stroke(bStroke)
	strokeWeight(bWeight)
	ellipse(bX,bY,bSize,bSize)
	
	// C
	if (cxSwitch == 1) { cX += theta*2 }
	else { cX -= theta*2 }
	if (cySwitch == 1) { cY += theta }
	else { cY -= theta }
	stroke(cStroke)
	strokeWeight(cWeight)
	ellipse(cX,cY,cSize,cSize)
	
	// D
	if (dxSwitch == 0) { dX += theta }
	else { dX -= theta }
	if (dySwitch == 0) { dY += theta*3 }
	else { dY -= theta*3 }
	stroke(dStroke)
	strokeWeight(dWeight)
	ellipse(dX,dY,dSize,dSize)
	
	// E
	if (exSwitch == 1) { eX += theta }
	else { eX -= theta }
	if (eySwitch == 1) { eY += theta*3 }
	else { eY -= theta*3 }
	stroke(eStroke)
	strokeWeight(eWeight)
	ellipse(eX,eY,eSize,eSize)
	
	// B
	if (bX > bounds) { bxSwitch = 1 } 
	else if (bX < -bounds) { bxSwitch = 0 }
	
	if (bY > bounds) { bySwitch = 1 } 
	else if (bY < -bounds) { bySwitch = 0 }
	
	// C
	if (cX > bounds) { cxSwitch = 0 } 
	else if (cX < -bounds) { cxSwitch = 1 }
	
	if (cY > bounds) { cySwitch = 0 } 
	else if (cY < -bounds) { cySwitch = 1 }
	
	// D
	if (dX > bounds) { dxSwitch = 1 } 
	else if (dX < -bounds) { dxSwitch = 0 }
	
	if (dY > bounds) { dySwitch = 1 } 
	else if (dY < -bounds) { dySwitch = 0 }
	
	// E
	if (eX > bounds) { exSwitch = 0 } 
	else if (eX < -bounds) { exSwitch = 1 }
	
	if (eY > bounds) { eySwitch = 0 } 
	else if (eY < -bounds) { eySwitch = 1 }
}