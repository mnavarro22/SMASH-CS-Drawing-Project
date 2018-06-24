var p5Canvas;
var myName;
 
function setup() {
  p5Canvas = createCanvas(800, 600);
  p5Canvas.parent("#p5-canvas");
  myName = select("#my-name");
  myName.html("Max");
}

function draw() {
  background(23, 45, 145); 
  fill(255, 255, 0);
  ellipse(100, 100, 100, 100, 0);
    fill(250,250,250);
    line(100, 100, 200, 200);
    
}