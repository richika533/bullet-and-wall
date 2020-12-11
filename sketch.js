var bullet, wall;
var speed,weight,thickness;

function setup() {
  createCanvas(1600,400);

  speed=random(223,321);
  weight= random(30,52);
  thickness= random(22,83);

 bullet= createSprite(50, 200, 5, 40);
 wall= createSprite(1200,200,60,200);
 wall.shapeColor= color(80,80,80);
 bullet.velocityX= speed; 
}

function draw() {
  background(255,255,255); 
  
  if(hasCollided(bullet,wall))
  {
    bullet.velocityX= 0;
  var damage= 0.5*weight*speed*speed/(thickness*thickness*thickness)
     if (damage<10)
   {
      wall.shapeColor= color(0,255,0)
   }
    
     if(damage>10)
     {
       wall.shapeColor= color(255,0,0)

    }
  drawSprites();
}

function hasCollided(bullet,wall){
var bulletRightEdge= bullet.x+bullet.width
 wallLeftEdge= wall.x

 if(bulletRightEdge > wallLeftEdge){
     return true;
}
     return false;
}
}
