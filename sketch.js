var bulet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1000,300);
  speed=random(50,200) 
  weight=random(30,52)
  thickness=random(22,83);
    bulet=createSprite(50, 200, 50,50); 
    bulet.velocityX = speed; 
    bulet.shapeColor=color(150);

   wall=createSprite(700,200, thickness, height/2)
  wall.shapeColor="blue"

}

function draw() {
  background(255,255,255);
    

  if(wall.x-bulet.x < (bulet.width+wall.width)/2) { 
    bulet.velocityX=0;
    var damage=(0.5 * weight *speed *speed)/(thickness*thickness*thickness); 
    
if(damage>10) { 
  bulet.shapeColor=color(255,0,0); 
   stroke("red");
  text("Wall is not effective against bullet",200,200); 
  wall.shapeColor="red"

} 
if(damage<10) { 
  bulet.shapeColor=color(230,230,0); 
  stroke("red");
  text("Wall is not effective against bullet",200,200); 
  wall.shapeColor="green"

   } 

} 
drawSprites();      
}




               
               
               
               
               
            