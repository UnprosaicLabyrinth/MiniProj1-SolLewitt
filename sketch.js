const s = 15;

function setup() 
{
    createCanvas(windowWidth, windowHeight);
}

function draw() 
{
    background(0);
    fill(255, 0);
    for (let i = 2 * width; i >= 2 * s; i -= (2 * s)) {
        stroke(0, 255 - i, i);
        circle(width / 2, 0, i);
        circle(width, height / 2, i);
        circle(width / 2, height, i);
        circle(0, height / 2, i);
        circle(width / 2, height / 2, i);
    }
}
