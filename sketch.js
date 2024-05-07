//Part 1
var obs1, obs2,obs3, obs4,obs5,edges;
var pirate;
function setup() {
  createCanvas(400, 400);
 
  
  obs1 = createSprite(100,0,20,20);
  obs1.shapeColor = "red";
  obs1.velocityY = -6;
  
  obs2 = createSprite(150,400,20,20);
  obs2.shapeColor = "blue";
  obs2.velocityY = 10;
  
  obs3 = createSprite(200,0,20,20);
  obs3.shapeColor = "green";
  obs3.velocityY = 10;
  
  obs4= createSprite(250,400,20,20 );
  obs4.shapeColor = "yellow";
  obs4.velocityY = -8;
  
  
  obs5= createSprite(300,0,20,20 );
  obs5.shapeColor = "pink";
  obs5.velocityY = 8;
  
  pirate= createSprite(10,390,10,20);
  pirate.shapeColor="Black"
  
  edges = createEdgeSprites();
}


function draw() {
  background("skyblue");
  fill("white")
    drawSprites();
}
