let x1, x2, y1, y2, diagX, diagY;
let xSpeed1, xSpeed2, ySpeed1, ySpeed2, diagXSpeed, diagYSpeed;

let robeX = 160, robeY = 250;
let robeXSpeed, robeYSpeed;
let robeColor;

let titleSize = 24;
let growing = true;
let growCount = 0;

let headSize = 100;
let headGrowing = true;

let nameX = 300, nameY = 390;
let nameDirection = 0; // 0: right, 1: up, 2: left, 3: down

let noseColor, mouthColor, armColor, headColor;

function setup() {
  createCanvas(400, 400);

  // Positions
  x1 = 160;
  x2 = 240;
  y1 = 270;
  y2 = 270;
  diagX = 195;
  diagY = 210;

  // Speeds
  xSpeed1 = random(0.5, 2);
  xSpeed2 = random(0.5, 2);
  ySpeed1 = random(0.5, 2);
  ySpeed2 = random(0.5, 2);
  diagXSpeed = random(0.5, 2);
  diagYSpeed = random(0.5, 2);
  robeXSpeed = random(1, 2);
  robeYSpeed = random(1, 2);

  // Colors
  robeColor = color(0);
  noseColor = color(255, 204, 153);
  mouthColor = color(255, 100, 100);
  armColor = color(255, 204, 153);
  headColor = color(255, 220, 170);
}

function draw() {
  background(50);

  // TITLE ANIMATION
  fill(255);
  textSize(titleSize);
  textAlign(CENTER);
  text("Self-Portrait", width / 2, 30);

  if (growing) {
    titleSize += 0.5;
    if (titleSize >= 36) {
      growCount++;
      if (growCount >= 5) growing = false;
    }
  } else {
    titleSize -= 0.5;
    if (titleSize <= 24) {
      growCount--;
      if (growCount <= 0) growing = true;
    }
  }

  // HEAD GROW/SHRINK
  if (headGrowing) {
    headSize += 0.4;
    if (headSize >= 120) headGrowing = false;
  } else {
    headSize -= 0.4;
    if (headSize <= 90) headGrowing = true;
  }

  fill(headColor);
  ellipse(200, 180, headSize, headSize);

  // DIAGONAL NOSE
  diagX += diagXSpeed;
  diagY += diagYSpeed;
  if (diagX > 210 || diagX < 180) {
    diagXSpeed *= -1;
    noseColor = color(random(255), random(255), random(255));
  }
  if (diagY > 225 || diagY < 195) {
    diagYSpeed *= -1;
    noseColor = color(random(255), random(255), random(255));
  }
  fill(noseColor);
  triangle(diagX - 5, diagY, diagX + 5, diagY, diagX, diagY + 15);

  // MOUTH
  y1 += ySpeed1;
  if (y1 > 300 || y1 < 250) {
    ySpeed1 *= -1;
    mouthColor = color(random(255), random(255), random(255));
  }
  fill(mouthColor);
  arc(200, y1 + 20, 30, 15, 0, PI, CHORD);

  // ARMS (X AXIS)
  x1 += xSpeed1;
  if (x1 > 180 || x1 < 140) {
    xSpeed1 *= -1;
    armColor = color(random(255), random(255), random(255));
  }
  x2 += xSpeed2;
  if (x2 > 260 || x2 < 220) {
    xSpeed2 *= -1;
    armColor = color(random(255), random(255), random(255));
  }

  stroke(armColor);
  strokeWeight(4);
  line(x1, 270, x1 - 40, 320);
  line(x2, 270, x2 + 40, 320);
  strokeWeight(1);

  // ROBE (BOUNCING)
  robeX += robeXSpeed;
  robeY += robeYSpeed;
  if (robeX < 0 || robeX + 80 > width) {
    robeXSpeed *= -1;
    robeColor = color(random(255), random(255), random(255));
  }
  if (robeY < 150 || robeY + 100 > height) {
    robeYSpeed *= -1;
    robeColor = color(random(255), random(255), random(255));
  }

  fill(robeColor);
  rect(robeX, robeY, 80, 100, 10);
  triangle(robeX, robeY, robeX + 40, robeY + 50, robeX + 80, robeY);

  stroke(255);
  line(robeX, robeY, robeX + 80, robeY);

  stroke(50);
  line(robeX + 20, robeY, robeX + 20, robeY + 90);
  line(robeX + 60, robeY, robeX + 60, robeY + 90);
  stroke(1);

  // NAME TEXT MOVEMENT (SQUARE PATTERN)
  fill(255);
  textSize(12);
  text("By Mason Shimek", nameX, nameY);

  let speed = 1;
  if (nameDirection === 0) {
    nameX += speed;
    if (nameX >= 380) nameDirection = 1;
  } else if (nameDirection === 1) {
    nameY -= speed;
    if (nameY <= 20) nameDirection = 2;
  } else if (nameDirection === 2) {
    nameX -= speed;
    if (nameX <= 20) nameDirection = 3;
  } else if (nameDirection === 3) {
    nameY += speed;
    if (nameY >= 390) nameDirection = 0;
  }
}