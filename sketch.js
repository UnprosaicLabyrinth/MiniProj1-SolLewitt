const s = 5;

function setup() 
{
    createCanvas(windowWidth, windowHeight);
}

function draw() 
{
    background(220);
    fill(255, 0);
    for (let i = 2 * windowWidth; i >= 2 * s; i -= (2 * s)) {
        circle(width / 2, 0, i); // N
        // circle(width, 0, i); // NE
        circle(width, height / 2, i);  // E
        // circle(width, height, i);  // SE
        circle(width / 2, height, i); // S 
        // circle(0, height, i); // SW
        circle(0, height / 2, i); // W
        // circle(0, 0, i); // NW
        circle(width / 2, height / 2, i); // C
    }
}
