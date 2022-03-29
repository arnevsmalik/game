var ob1,ob2,ob3,ob4,ob5;
var p;
var gamestate=0
var obstacle
var score=0;
function setup() {
  createCanvas(550,600);
  p= createSprite(225,590,20,20);
  obstaclesGroup = new Group();
}

function draw() {
  background("red");
  if(gamestate==0){
    p.visible=false
    textSize(20)
    text("press space bar to start the game",180,300)
    if(keyDown("SPACE")){
      gamestate=1
      p.visible =true
    }
  }
  if(gamestate==1){
    spawnObstacles();
  if(keyDown("RIGHT")){
    p.x=p.x+3

  }
  if(keyDown("LEFT")){
    p.x=p.x-3
  }
  if(obstaclesGroup.isTouching(p)){
    gamestate=2
  }
  else{
    score=score+1
  }
  textSize(15)
  text("score-"+score,470,20 )
  }
  
  if(gamestate==2){
    p.visible=false
    obstaclesGroup.destroyEach()
    textSize(25)
    text("you lost",225,300)
    text("press r to restart",200,100)
    if(keyDown("R")|| keyDown("r")){
      reset()
    }
  }

  drawSprites();

}

function spawnObstacles() {
  if(frameCount % 40 === 0) {
    obstacle= createSprite(random(50,500),10,random(95,115),20);
    obstacle.velocityY=4
    
    obstaclesGroup.add(obstacle);
  }
}
function reset(){
  
    score=0
    p.visible=true
    gamestate=1
    p.x=225
    p.y=590
  
}