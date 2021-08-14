var player,playerImg;
var space,spaceImg;
var Imposter,Imposter1,Imposter2;
var ImposterG,score;
var Gamestate="play"
var gameover,gameover1
function preload(){
  playerImg=loadAnimation("player/1.png","player/2.png","player/3.png","player/4.png","player/5.png");
  spaceImg=loadImage("SPACE.png");
  Imposter1=loadImage("imposter1.png");
  Imposter2=loadImage("imposter2.png");
  gameover1=loadImage("Game Over.jpg")
}
function setup() {
  createCanvas(1000,500);

  space=createSprite(600,250,1000,500);
  space.addImage(spaceImg);
  //space.velocityX=-3;
  space.scale=3.9;
  //space.x=space.width/2;

  player=createSprite(100,450);
  player.addAnimation("running",playerImg);
 // player.velocityX=4;


 InvisibleGround=createSprite(500,490,1000,20);
 InvisibleGround.visible=false;

 ImposterG=new Group();

 player.setCollider('rectangle',0,0,60,player.height);

gameover=createSprite(400,250)
gameover.addImage(gameover1)
 score=0;
}

function draw() {
  background('red');

 /* if(space.x<0){
    space.x=500;
  } */

  //camera.position.x=player;
  //camera.position.y=player.y;
if(Gamestate==="play"){
  if(keyDown('space') && player.y>=00){
    player.velocityY=-10;
  }

  player.velocityY=player.velocityY+0.8;

  spawnImposter();

gameover.visible=false

if(ImposterG.x<0){
  score=score+10
}
  if(ImposterG.isTouching(player)){
    ImposterG.destroyEach();
 Gamestate="end"
  }
} else if(Gamestate==="end"){
  gameover.visible=true

}
  
  

 

  


  
  
  player.collide(InvisibleGround);
  
     drawSprites();

     textSize(20);
     fill (255);
     text ("Score : " +score,800,50);
}


function spawnImposter(){
  if(frameCount%100===0){

  Imposter=createSprite(900,425);
  Imposter.velocityX=-3;

  var random1=Math.round(random(1,2));

  switch(random1){
    case 1: Imposter.addImage(Imposter1);
    Imposter.scale=0.7;
    Imposter.setCollider('rectangle',0,0,80,100);
    break;
    case 2: Imposter.addImage(Imposter2);
    Imposter.scale=0.2;
    Imposter.setCollider('rectangle',0,0,60,Imposter.height);
    break;
    default: break;
  }

  ImposterG.add(Imposter);
  
  }


}