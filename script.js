function setup() {
    createCanvas(800, 400);
    noLoop();
}

function draw() {
    background(255);

    let radius = 20; // radius of the hexagons
    let xOffset = 3 * radius * sqrt(3) / 2; // horizontal distance between centers
    let yOffset = 1.5 * radius; // vertical distance between centers

    background(220);
    drawHexGrid();
}

function drawHexGrid() {
    const radius = 16; // radius of the hexagons
    const xOffset = 3 * radius / 2; // horizontal distance between centers
    const yOffset = sqrt(3) * radius; // vertical distance between centers
    const rows = 28; // number of rows
    const cols = 28; // number of columns

    for (let row = 0; row < 5; row++) {
        for (let col = 0; col < 5; col++) {
            let x = xOffset * col;
            let y = yOffset * row;

            // staggering odd rows
            if (col % 2 == 1) {
                y += radius * 0.75;
            }

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

    // Giulia, fă ceva!


}
