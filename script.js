// Define the number of rows and columns for the Abalone board
const rows = 9;
const cols = 9;

// Define the starting layout of the marbles
// 0 represents an empty space, 1 represents player 1's marble, and 2 represents player 2's marble
let board = [
    [0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 1, 1, 1, 1, 1, 0, 0, 0],
    [0, 0, 1, 1, 1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 2, 2, 2, 0, 0, 0],
    [0, 0, 2, 2, 2, 2, 2, 0, 0],
    [0, 0, 0, 2, 2, 2, 0, 0, 0],
];

function setup() {
    createCanvas(400, 400);
}

// Function to draw a hexagon
function hexagon(x, y, radius) {
    beginShape();
    for (let angle = 0; angle < TWO_PI; angle += PI / 3) {
        let vx = x + cos(angle) * radius;
        let vy = y + sin(angle) * radius;
        vertex(vx, vy);
    }
    endShape(CLOSE);
}

function draw() {
    // Game drawing logic goes here
    background(220);
    // Calculate the size of each cell based on the canvas size
    let cellSize = width / cols;

    // Draw the board
    for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
            // Calculate the x and y position for each cell
            let x = j * cellSize;
            let y = i * cellSize;

            // Draw the cell
            stroke(0);
            noFill();
            hexagon(x + cellSize / 2, y + cellSize / 2, cellSize / 2);

            // Draw the marbles
            let cell = board[i][j];
            if (cell !== 0) {
                fill(cell === 1 ? 'white' : 'black');
                ellipse(x + cellSize / 2, y + cellSize / 2, cellSize * 0.8);
            }
        }
    }
}
