function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(250, 120, 0);
  
  stroke(255, 150, 0);
  strokeWeight(50);
  line(0, 266, 400, 266);
  
  stroke(255, 150, 0);
  strokeWeight(50);
  line(0, 133, 400, 133);
  
  ellipseMode(RADIUS);
  noStroke();
  fill(0, 150, 100, 40);
  circle(240,200,150);
  ellipse(240,200,140,145);
  
  fill(150, 50, 0)
  stroke(0, 0, 100);
  strokeWeight(15);
  square(75, 75, 100);
  
  noFill();
  stroke(0, 150, 100);
  strokeWeight(15);
  square(75, 60, 100);
  
  rectMode(CORNER);
  stroke(0, 0, 100);
  fill(0,0,100);
  rect(50, 280, 240, 30);
  
  quad(10, 10, 30, 10, 10, 30, 10, 30, 30);
  
  stroke(0, 150, 100);
  noFill();
  rect(70, 260, 240, 30);
  
  stroke(0, 0, 100);
  strokeWeight(10);
  point(200, 100);
  point(220, 100);
  point(240, 100);
  stroke(0, 0, 200);

  noStroke();

  fill(0,0,150);
  triangle(275, 80, 275, 140, 330, 140);
  
}
