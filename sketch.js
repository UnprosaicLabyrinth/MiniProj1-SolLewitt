const s = 20;

function setup() 
{
    createCanvas(windowWidth, windowHeight);
}

function draw() 
{
    background(220);
    fill(255, 0);
    for (let i = 2 * width; i >= 2 * s; i -= (2 * s)) {
        circle(width / 2, 0, i);
        // circle(width, 0, i);
        circle(width, height / 2, i);
        // circle(width, height, i);
        circle(width / 2, height, i);
        // circle(0, height, i);
        circle(0, height / 2, i);
        // circle(0, 0, i);
        circle(width / 2, height / 2, i);
    }
}
