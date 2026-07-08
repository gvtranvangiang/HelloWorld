function setup() {
  createCanvas(500, 500);
}

function draw() {  
}
mousePressed = function() {
  background(220);
  fill(255, 0, 0);
  text("Hello World 1!", 150, 200);
  text("Hello World 1 from tranvangiang!", 150, 200);
  
  fill(random(255), random(255), random(255));
  rect(random(width), random(height), random(50, 100), random(50, 100));
}

