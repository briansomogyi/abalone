function setup() {
    createCanvas(400, 400);
    noLoop();
}

function draw() {
    background(255);

    let radius = 20; // radius of the hexagons
    let xOffset = 3 * radius * sqrt(3) / 2; // horizontal distance between centers
    let yOffset = 1.5 * radius; // vertical distance between centers

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
        let x_i = x + radius * cos(angle);
        let y_i = y + radius * sin(angle);
        vertex(x_i, y_i);
    }
    endShape(CLOSE);
}
