const s = 20;
function setup() 
{
    createCanvas(windowWidth, windowHeight);
}

function draw() 
{
    background(220);
    fill(255, 0);
    for (let i = 2 * windowWidth; i >= 2 * s; i -= (2 * s)) {
        circle(2 * width, height / 2, i);
        circle(-width, height / 2, i);
        circle(width / 2, -height, i);
        circle(width / 2, 2 * height, i);
        circle(width / 2, height / 2, i);
    }
}

/*
let yPos = 0;
function setup() {
    createCanvas(windowWidth, windowHeight);
  frameRate(30);
}
function draw() {
  // draw() loops forever, until stopped
  background(204);
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(0, yPos, width, yPos);
}
*/