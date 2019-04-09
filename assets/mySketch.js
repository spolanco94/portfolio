var xPos, yPos;
// var paddleX;
var xSpeed, ySpeed;
// var r, g, b, r1, g1, b1;
var xCen, yCen;

function setup() {
	createCanvas(windowWidth, windowHeight);
	// r1 = 255;
	// g1 = 255;
	// b1 = 255;
	// noStroke();
	xPos = width/ 2;
	yPos = height / 2;
	xCen = (random(0,75));
	yCen = (random(600, 750));
	xSpeed = random([-5, 5]); 
	ySpeed = random([-5, 5]);
	noStroke();
	frameRate(20);
}

function draw() {
	background(0);
	for(var i = 0; i < 10; i++) {
		fill(255);
		// ellipse(xCen, yCen, 5);
		ellipse(xCen + random(i * 25, i * 100), random(i * 50, i * 85) , 5);
		
		stroke(175, 100);
		strokeWeight(2);
		line(xPos, yPos, xPos + random(200, 600), yPos + random(i * 100));
		line(xPos, yPos, xPos + random(200, 600), yPos + random(i * -100));
		line(xPos, yPos, xPos + random(-200, 100), yPos + random(i * -300));
		
		if(frameCount % 240 === 0) {
			fill(random(255), 50);
			frameRate(60);
			ellipse(random(width), random(height), 3);
		}
	}
	
// 	fill(r1, g1, b1);
// 	ellipse(xPos, yPos, 40);
	
// 	xPos += xSpeed;
// 	yPos += ySpeed;
	
	// if(xPos >= width - 20 || xPos <= 20) {
	// 	xSpeed = xSpeed * (-1.5);
	// 	r = g1;
	// 	g = b1;
	// 	b = r1;
	// } else if (yPos <= 20 || yPos >= height - 20) {
	// 	ySpeed = ySpeed * (-1.5);
	// 		r1 = random(125);
	// 		g1 = random(125);
	// 	 	b1 = random(125);
	// }
}