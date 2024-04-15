// script.js
const UNIT = 32; // Each unit in the world is 32 pixels.
const WIDTH = 10; // Width of the grid in world units.
const HEIGHT = 10; // Height of the grid in world units.

function setup() {
    createCanvas(WIDTH * UNIT, HEIGHT * UNIT);
}

function draw() {
    background(220); // Set the background color.

    // Draw the grid (optional).
    stroke(0); // Set stroke color to black.
    fill(255); // Set fill color to white.
    for (let x = 0; x < WIDTH; x++) {
        for (let y = 0; y < HEIGHT; y++) {
            rect(x * UNIT, y * UNIT, UNIT, UNIT);
        }
    }

    // Draw a sample marble (you can customize this).
    fill(255, 0, 0); // Red color for the marble.
    ellipse(UNIT * 1.5, UNIT * 1.5, UNIT * 0.8); // Position and size of the marble.
}
