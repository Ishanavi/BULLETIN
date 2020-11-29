//declaring variables
var bullet,wall
var speed,weight,thickness
var bulletRightEdge,wallLeftEdge




function setup() 
{
  createCanvas(1600,400);

  //random speed , weight and thickness
  speed = random(215,315);
  weight = random(30,52);
  thickness = random(22,83);

  //bullet
  bullet = createSprite(50,200,80,10);
  bullet.shapeColor = "white";

  //wall
  wall = createSprite(1200,200,thickness,200);
  wall.shapeColor = color(80,80,80);


}

function draw()
 {
  background("black"); 
  
  //speed of bullet
  bullet.velocityX = speed;

  if(hasCollided(bullet,wall) )
  {
   
    bullet.velocityX = 0;

    //damage
    var damage = 0.5 * weight * speed * speed/(thickness*thickness*thickness)


    if(damage < 5)
    {
       wall.shapeColor = "yellow";
       fill("yellow");
       textSize(50);
       text("DAMAGE IS VERY LESS!",370,200)
    }



    if(damage > 5 && damage < 12)
    {
       wall.shapeColor = "green";
       fill("green");
       textSize(50);
       text("DAMAGE IS LESS!",400,200)
    }
    
    
   if(damage > 12)
    {
    wall.shapeColor = "red";
    fill("red");
    textSize(50);
    text("DAMAGE IS MORE!",400,200)
    }
  }


  drawSprites();
}


//has collided function
function hasCollided(bullet,wall)
{
  bulletRightEdge = bullet.x+bullet.width;
  wallLeftEdge = wall.x;
  if(bulletRightEdge>=wallLeftEdge)
  {
    return true;
  }
    return false;
}