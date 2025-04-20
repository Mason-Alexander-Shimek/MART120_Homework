let player;
let exitSquare;
let obstacles = [];

function setup() {
  createCanvas(800, 600);
  createPlayer();
  createExit();
  createObstacles();
}

// PLAYERd
function createPlayer() {
  player = {
    x: 50,
    y: 50,
    size: 40,
    speed: 3
  };
}

function drawPlayer() {
  fill(0, 255, 0);
  rect(player.x, player.y, player.size, player.size);
}

function movePlayer() {
  if (keyIsDown(87)) player.y -= player.speed; // W
  if (keyIsDown(83)) player.y += player.speed; // S
  if (keyIsDown(65)) player.x -= player.speed; // A
  if (keyIsDown(68)) player.x += player.speed; // D
}

// MOUSE CIRCLES
let mouseCircles = [];

function mousePressed() {
  mouseCircles.push({ x: mouseX, y: mouseY, size: 30 });
}

function drawMouseCircles() {
  fill(255);
  for (let c of mouseCircles) {
    ellipse(c.x, c.y, c.size);
  }
}

// OBSTACLES
function createObstacles() {
  for (let i = 0; i < 4; i++) {
    obstacles.push({
      x: random(width),
      y: random(height),
      size: random(20, 80),
      color: color(random(0, 100), random(100, 200), 255),
      dx: random(-2, 2),
      dy: random(-2, 2)
    });
  }
}

function moveObstacles() {
  for (let obs of obstacles) {
    obs.x += obs.dx;
    obs.y += obs.dy;

    if (obs.x < 0) obs.x = width;
    if (obs.x > width) obs.x = 0;
    if (obs.y < 0) obs.y = height;
    if (obs.y > height) obs.y = 0;
  }
}

function drawObstacles() {
  for (let obs of obstacles) {
    fill(obs.color);
    ellipse(obs.x, obs.y, obs.size);
  }
}

// BORDER
function drawBorder() {
  noFill();
  stroke(255);
  strokeWeight(4);
  rect(0, 0, width, height);
}

// EXIT
function createExit() {
  exitSquare = {
    x: width - 60,
    y: height - 60,
    size: 40
  };
}

function drawExit() {
  fill(255, 0, 0);
  rect(exitSquare.x, exitSquare.y, exitSquare.size, exitSquare.size);
}

// WIN MESSAGE
function checkWin() {
  if (
    player.x < exitSquare.x + exitSquare.size &&
    player.x + player.size > exitSquare.x &&
    player.y < exitSquare.y + exitSquare.size &&
    player.y + player.size > exitSquare.y
  ) {
    fill(255);
    textSize(64);
    textAlign(CENTER, CENTER);
    text("You Win!", width / 2, height / 2);
  }
}

// MAIN DRAW
function draw() {
  background(34, 20, 31);
  movePlayer();
  drawPlayer();
  drawMouseCircles();
  moveObstacles();
  drawObstacles();
  drawBorder();
  drawExit();
  checkWin();
}