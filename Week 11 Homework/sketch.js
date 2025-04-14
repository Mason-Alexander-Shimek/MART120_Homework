let x = 50;
let y = 50;
let diameter = 25;

let speed = 3;

// Blue circles: positions, sizes, colors, speeds
let blues = [
  { x: 200, y: 100, r: 30, color: [0, 100, 255], dx: 2, dy: 1.5 },
  { x: 400, y: 200, r: 40, color: [0, 150, 255], dx: -1.5, dy: 2 },
  { x: 600, y: 400, r: 50, color: [0, 200, 255], dx: 1, dy: -2 }
];

// Static blue obstacles
let staticBlues = [];

// Exit square
let exit = {
  x: 750,
  y: 550,
  size: 40
};

let win = false;

function setup() {
  createCanvas(800, 600);
}

function draw() {
  background(0);

  // Draw and move blue circles
  for (let b of blues) {
    fill(...b.color);
    circle(b.x, b.y, b.r);
    b.x += b.dx;
    b.y += b.dy;

    // Wrap around screen
    if (b.x < 0) b.x = width;
    else if (b.x > width) b.x = 0;
    if (b.y < 0) b.y = height;
    else if (b.y > height) b.y = 0;
  }

  // Draw static blue obstacles
  for (let s of staticBlues) {
    fill(0, 100, 200);
    circle(s.x, s.y, s.r);
  }

  // Draw red exit
  fill(255, 0, 0);
  rect(exit.x, exit.y, exit.size, exit.size);

  // Draw player
  fill(24, 200, 29);
  circle(x, y, diameter);

  // Handle movement
  if (keyIsDown(87)) y -= speed; // W
  else if (keyIsDown(83)) y += speed; // S

  if (keyIsDown(65)) x -= speed; // A
  else if (keyIsDown(68)) x += speed; // D

  // Check win condition
  if (
    x > exit.x &&
    x < exit.x + exit.size &&
    y > exit.y &&
    y < exit.y + exit.size
  ) {
    win = true;
  }

  // Display win message
  if (win) {
    fill(255);
    textSize(48);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
  }
}

function mousePressed() {
  // Add a new stationary blue circle where mouse is clicked
  staticBlues.push({ x: mouseX, y: mouseY, r: random(20, 50) });
}
