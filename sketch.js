
var monkey , monkey_running, invisibleGround
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600, 200)
  monkey= createSprite(50,160,20,50)
  monkey.addAnimation("running", monkey_running)
  monkey.scale=.1  
  ground = createSprite(400,180,4000,20);
  
  if (score>-10000000){
    ground.x=400
  }
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  monkey.setCollider("rectangle",0,0,monkey.width,monkey.height);
  monkey.debug = true
  score=0
  FoodGroup=new Group();
  obstacleGroup=new Group();
}


function draw() {
  background("green");
  monkey.collide(invisibleGround);
  
  ground.velocityX = -(4 + 3* score/100)
    
  score = score + .1
  
  if(keyDown("space")&& monkey.y >= 100) {
       monkey.velocityY = -12;
        
    }
  if(obstacleGroup.isTouching(monkey)){
    score=score-8
 }
  if(FoodGroup.isTouching(monkey)){
    score+=1
  }
  if (score>0){
    background("green")
    
  }
  if (score<0){
    background("red")
  }
  monkey.velocityY = monkey.velocityY + 0.8
  spawnObstacles()
  spawnFood()
  drawSprites()
  text("Score: "+ Math.round(score), 500,50);
  
}
function spawnObstacles(){
 if (frameCount % 60 === 0){
   obstacle = createSprite(600,165,10,40);
   obstacle.velocityX = -(6 + score/1000);
   obstacle.addImage(obstaceImage)
              
    obstacle.scale = 0.1;
    obstacle.lifetime = 300;
   
   
    obstacleGroup.add(obstacle);
 }
}
function spawnFood() {
  //write code here to spawn the clouds
  if (frameCount % 60 === 0) {
    banana = createSprite(600, 60,40,10);
    banana.y = Math.round(random(40,90));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    
     
    banana.lifetime = 200;
    
    FoodGroup.add(banana);
  }
}

  
 




