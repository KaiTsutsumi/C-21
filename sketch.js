var car, wall;

function setup() {
  createCanvas(1200,800);
  car = createSprite(200, 200, 50, 50);
  car.shapeColor = "red";
  car.velocityX = 9

  wall = createSprite(500, 200, 15, 75);
  wall.shpaeColor = "blue";
}

function draw() {
  background(0,0,0);  

  if(isTouching(car, wall)) {
    car.shapeColor = "green"
    wall.shapeColor = "green"
  }
  
  collide(car, wall);

  drawSprites();
}