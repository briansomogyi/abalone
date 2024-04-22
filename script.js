function setup() {
    createCanvas(800, 400);
    noLoop();
}

function draw() {
    background(220);
    drawHexGrid();
}

function drawHexGrid() {
    const radius = 16; // radius of the hexagons
    const xOffset = 3 * radius / 2; // horizontal distance between centers
    const yOffset = sqrt(3) * radius; // vertical distance between centers
    const rows = 28; // number of rows
    const cols = 28; // number of columns

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            // Calculate the center position of the hexagon
            let x = col * xOffset;
            let y = row * yOffset;

            // Offset every other row
            if (col % 2 == 1) {
                y += yOffset / 2;
            }

            // Draw the hexagon
            drawHexagon(x, y, radius);
        }
    }
}

function drawHexagon(x, y, radius) {
    beginShape();
    for (let i = 0; i < 6; i++) {
        let angle = TWO_PI / 6 * i;
        let x_i = y + radius * sin(angle);
        let y_i = x + radius * cos(angle);
        vertex(x_i, y_i);
    }
    endShape(CLOSE);

   /* fillShape();
    for (let i = 7; i < 14; i++) {
        let angle = TWO_PI / 6 * i;
        let x_i = y + radius * sin(angle);
        let y_i = x + radius * cos(angle);
        vertex(x_i, y_i);
    }

    */
   
}
