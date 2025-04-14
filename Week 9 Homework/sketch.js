function setup() {
  createCanvas(400, 400);
  background(220);

  // Head (connects naturally to the body)
  fill(255, 204, 153);
  ellipse(200, 200, 100, 120); // head shape

  // Hair (brown)
  fill(101, 67, 33);
  arc(200, 175, 100, 100, PI, TWO_PI); // top hair
  rect(150, 180, 10, 40); // left sideburn
  rect(240, 180, 10, 40); // right sideburn

  // Eyes
  fill(255);
  ellipse(185, 190, 20, 12); // left eye white
  ellipse(215, 190, 20, 12); // right eye white

  fill(0, 102, 204); // blue irises
  ellipse(185, 190, 10, 10);
  ellipse(215, 190, 10, 10);

  fill(0); // pupils
  ellipse(185, 190, 5, 5);
  ellipse(215, 190, 5, 5);

  // Nose
  fill(255, 204, 153);
  triangle(195, 210, 205, 210, 200, 225);

  // Mouth (centered on face)
  fill(255, 100, 100);
  arc(200, 240, 30, 15, 0, PI, CHORD);

  // Bathrobe (starting just below head)
  fill(0);
  rect(160, 260, 80, 100, 10);
  triangle(160, 260, 200, 310, 240, 260); // Collar

  // Arms
  stroke(255, 204, 153);
  strokeWeight(4);
  line(160, 280, 120, 330); // left arm
  line(240, 280, 280, 330); // right arm
  strokeWeight(1);

  // Shoulders
  line(160, 260, 240, 260);

  // Extra robe detailing
  stroke(50);
  line(180, 260, 180, 360);
  line(220, 260, 220, 360);
  stroke(0);

  // Signature
  fill(255);
  textSize(12);
  text("By Mason Shimek", 280, 390);
}
