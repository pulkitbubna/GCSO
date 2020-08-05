var car,wall;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  car  = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,height/2);
  speed = random(55,90);
  weight = random(400,1500);
  car.velocityX = speed;
}

function draw() {
  background(255,255,255); 
  
   if(wall.x-car.x<(wall.width+car.width)){
    car.velocityX = 0;
     var defor= 0.5*speed*weight*speed/22509
   if(defor>101){
     car.shapeColor=color(0, 255, 0);
   }
   if(defor>99<181){
     car.shapeColor =color(230, 230, 0);
   }
  if(defor<180){
    car.shapeColor=color(255, 0, 0);
  }  
  }

  
drawSprites();
}