var count=0, score=0;
var gameState="start";

function preload(){
  pacmanimg =loadAnimation("pacman.png","fullpacman.png");
  infectedimg=loadAnimation("infected.png");
  enemy1img =loadImage("enemy1.png");
  enemy2img=loadImage("enemy2.png");
  enemy3img=loadImage("enemy3.png");
  enemy4img=loadImage("enemy4.png");
  foodimg  =loadImage("food.png");
  readyimg =loadImage("ready.jpg");
  endimg =loadImage("end.jpg");
  startimg=loadImage("start.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  
    /*ready=createSprite(500,50,1100,600);
    ready.visible=true;
    ready.addImage("ready",readyimg);
    ready.scale=5;*/

  var wall1 = createSprite(535,550,1025,5);
  var wall2 = createSprite(535,50,1025,5);
  var wall3 = createSprite(20,300,5,500);
  var wall4 = createSprite(1050,300,5,500);
  var wall5 = createSprite(80,300,5,200);
  var wall6 = createSprite(145,400,130,5);
  var wall7 = createSprite(145,200,130,5);
  var wall8 = createSprite(210,350,5,100);
  var wall9 = createSprite(170,300,80,5);
  var wall10 = createSprite(330,300,5,220);
  var wall11 = createSprite(405,188,150,5);
  var wall12 = createSprite(480,300,5,220);
  var wall13 = createSprite(405,305,150,5);
  var wall14 = createSprite(600,290,5,220);
  var wall15 = createSprite(770,290,5,220);
  var wall16 = createSprite(890,290,5,220);
  var wall17 = createSprite(945,180,100,5);
  var wall18 = createSprite(945,290,100,5);
  var wall19 = createSprite(945,400,100,5);
  //var wall20 = createSprite(666,207,5,50);
  //var wall21 = createSprite(637,182,68,5);
  
  

  wall1.shapeColor="blue";
  wall2.shapeColor="blue";
  wall3.shapeColor="blue";
  wall4.shapeColor="blue";
  wall5.shapeColor="blue";
  wall6.shapeColor="blue";
  wall7.shapeColor="blue";
  wall8.shapeColor="blue";
  wall9.shapeColor="blue";
  wall10.shapeColor="blue";
  wall11.shapeColor="blue";
  wall12.shapeColor="blue";
  wall13.shapeColor="blue";
  wall14.shapeColor="blue";
  wall15.shapeColor="blue";
  wall16.shapeColor="blue";
  wall17.shapeColor="blue";
  wall18.shapeColor="blue";
  wall19.shapeColor="blue";
  //wall20.shapeColor="blue";
  //wall21.shapeColor="blue";

  WallGroup= new Group();
  WallGroup.add(wall1);
  WallGroup.add(wall2);
  WallGroup.add(wall3);
  WallGroup.add(wall4);
  WallGroup.add(wall5);
  WallGroup.add(wall6);
  WallGroup.add(wall7);
  WallGroup.add(wall8);
  WallGroup.add(wall9);
  WallGroup.add(wall10);
  WallGroup.add(wall11);
  WallGroup.add(wall12);
  WallGroup.add(wall13);
  WallGroup.add(wall14);
  WallGroup.add(wall15);
  WallGroup.add(wall16);
  WallGroup.add(wall17);
  WallGroup.add(wall18);
  WallGroup.add(wall19);
  //WallGroup.add(wall20);
  //WallGroup.add(wall21)

 pacman=createSprite(540,300,10,10);
 pacman.addAnimation("pacman", pacmanimg);
 pacman.addAnimation("infected", infectedimg);
 pacman.scale=0.2;
 
 EnemyGroup=new Group();

 enemy1=createSprite(50,515,10,10);
 enemy1.addImage("enemy",enemy1img);
 enemy1.scale=0.4;
 //enemy1.velocityX=2;
 //enemy1.velocityY=-2;
 EnemyGroup.add(enemy1);
 
 enemy2=createSprite(950,500,10,10);
 enemy2.addImage("enemy",enemy2img);
 enemy2.scale=0.4;
 //enemy2.velocityX=2;
 //enemy2.velocityY=-2;
 EnemyGroup.add(enemy2);

 enemy3=createSprite(950,100,10,10);
 enemy3.addImage("enemy",enemy3img);
 enemy3.scale=0.4;
 //enemy3.velocityX=2;
 //enemy3.velocityY=-2;
 EnemyGroup.add(enemy3);

 enemy4=createSprite(100,90,10,10);
 enemy4.addImage("enemy",enemy4img);
 enemy4.scale=0.4;
 //enemy4.velocityX=2;
 //enemy4.velocityY=-2;
 EnemyGroup.add(enemy4);

 FoodGroup=new Group();
 for(var i=0;i<20;i=i+1){
   for(var j=0;j<1000;j=j+100){
     for (var k=150;k<500;k=k+270){
   
   food=createSprite(100+j,10+k,10,10)
   FoodGroup.add(food);
   food.addImage("food",foodimg);
   food.scale=0.1;
   //FoodGroup.addImage("food",foodimg);
   //console.log("within for loop")
     }
    }
}

empty=createSprite(538,298,1200,700);
empty.shapeColor="black";
empty.visible=true;


end=createSprite(550,300,1100,600);
end.visible=false;
end.addImage("enemy",endimg);
end.scale=2;

/*start=createSprite(533,344,10,10);
start.addImage("start",startimg);
start.scale=0.5;
//start.visible=true;*/
  //console.log("10
}

function draw() {
  background("black");  
  drawSprites();  
  textSize(25);
  fill("lightblue");
  stroke("darkblue")
  strokeWeight(5);
  
  //edges=createEdgeSprites();

  if(gameState==="start"){
    console.log("start");
    //background("lightblue");
    //empty.visible=true;
    //start.visible=true;
    text("Press space key to start ",400,220);
    textSize(50);

      if(keyDown("space")){
      //console.log("mousePressedOver");
      //start.destroy();
      empty.visible=false;
      //start.visible=false;
      gameState="play";
      enemy1.velocityX=3;
      enemy1.velocityY=-3;

      enemy2.velocityX=3;
      enemy2.velocityY=-3;

      enemy3.velocityX=3;
      enemy3.velocityY=-3;

      enemy4.velocityX=3;
      enemy4.velocityY=-3;
      
      
    }
  }

  //text("x:"+mouseX,50,100);
  //text("y:"+mouseY,50,120);
  if(gameState==="play"){
    line(600,180,684,267);
    line(770,180,684,267);
  text("Score: "+score,70,100);
  text("No. of lifes: "+count,70,130);

  pacman.bounceOff(WallGroup);

  enemy1.bounceOff(FoodGroup);
  enemy1.bounceOff(WallGroup);
  enemy1.bounce(enemy4);
  enemy1.bounce(enemy2);
  enemy1.bounce(enemy3);
  //enemy1.bounceOff(edges);

  enemy2.bounceOff(FoodGroup);
  enemy2.bounceOff(WallGroup);
  enemy2.bounce(enemy1);
  enemy2.bounce(enemy3);
  enemy2.bounce(enemy4);
  //enemy2.bounceOff(edges);

  enemy3.bounceOff(FoodGroup);
  enemy3.bounceOff(WallGroup);
  enemy3.bounce(enemy1);
  enemy3.bounce(enemy2);
  enemy3.bounce(enemy4);
  //enemy3.bounceOff(edges);

  enemy4.bounceOff(FoodGroup);
  enemy4.bounceOff(WallGroup);
  enemy4.bounce(enemy1);
  enemy4.bounce(enemy2);
  enemy4.bounce(enemy3);
  //enemy4.bounceOff(edges);
 
  for(var i=0;i<FoodGroup.length;i++){
  if(FoodGroup.get(i).isTouching(pacman)){
  FoodGroup.get(i).remove();
  score=score+1;
  }
  }
 
  for(var i=0;i<EnemyGroup.length;i++){
    if(EnemyGroup.get(i).isTouching(pacman)){
    //FoodGroup.get(i).remove();
    count=count+1;
    }
    }
 
  
 move()
 if(count>50){
  gameState="end";
  empty.visible=true;
  end.visible=true;

}
  }

  else if(gameState==="end"){
    enemy1.velocityX=0;
    enemy1.velocityY=0;

    enemy2.velocityX=0;
    enemy2.velocityY=0;

    enemy3.velocityX=0;
    enemy3.velocityY=0;

    enemy4.velocityX=0;
    enemy4.velocityY=0;

    pacman.setSpeedAndDirection(0,0);
    
    end.visible=true;
  }
  
}

function move(){
 
  if(keyDown(UP_ARROW)){
    pacman.setSpeedAndDirection(5,-90)
    pacman.rotation=90;
  }
  if(keyDown(DOWN_ARROW)){
    pacman.setSpeedAndDirection(5,90)
    pacman.rotation=-90;
  }
  if(keyDown(LEFT_ARROW)){
    pacman.setSpeedAndDirection(5,180)
    pacman.rotation=0;
  }
  if(keyDown(RIGHT_ARROW)){
    pacman.setSpeedAndDirection(5,0)
    pacman.rotation=180;
  }
  if(pacman.isTouching(enemy1) || pacman.isTouching(enemy2) || pacman.isTouching(enemy3) || pacman.isTouching(enemy4))
  {
    pacman.changeAnimation("infected",infectedimg);
    //count= count-1;
    //score= score-1;
  }
  else
  {
    pacman.changeAnimation("pacman",pacmanimg);
  }
   
}