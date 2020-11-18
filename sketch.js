
var monkey,stage,invisibleground,monkeywalking,rockimg;
var score,gamestate,Play,End,ObstacesGrp,bananaGrp; 

var m1,m2,m3,m4,m5,m6,m7,m8,m9,m10;

function preload(){
monkeywalking = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_02.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png"); 
  
   stageimg = loadAnimation("jungle.jpg");
   bananaimg = loadImage("banana.png");
   rockimg = loadImage("stone.png");
  
   //banana 
//score = 0;
  
 

  //backround
 
}

function setup() {
  createCanvas(400, 400);
  

  
  score = 0;
  
 gamestate = Play;
  Play = 1;
  End = 0;
  
  //b
 

     
  invisibleground = createSprite(190,365,400,10);
  invisibleground.visible = false;
  
  stage = createSprite(200,200,400,400);
  stage.addAnimation("jungle",stageimg);
  
  
  monkey = createSprite(100,340,10,40);
  monkey.addAnimation("walking",monkeywalking);
  monkey.scale = 0.1;
  
  stage.x = stage.width /2;
  stage.velocityX = -2;
  
  
   bananaGrp = new Group();
  ObstacesGrp = new Group();
     banana.velocityX = -3;
  
}

function draw() {
background(225);

  monkey.collide(invisibleground);

  banana();
  Obstaces();
  
    if(keyDown("space") && monkey.y >= 250){
    monkey.velocityY = -16 ;
      
  }
  
  
  if(bananaGrp.isTouching(monkey)){
bananaGrp.destroyEach();
     score = score + 2;
    monkeysize();

  }
    
  monkey.velocityY = monkey.velocityY + 0.8
  
  if (stage.x < 0){
    stage.x = stage.width/2;
  }
  
  
  if(ObstacesGrp.isTouching(monkey)){
    
    monkey.scale = 0.1;
   // monkeysize();
 score = 0;   
  } 
  
  drawSprites();
  
    stroke("white");
 
   textSize(20);
   fill("white");
    text("Score :"+score,50,50);
   
  
   

}

function  monkeysize(){

switch(score){
    
  case 5: monkey.scale = 0.12;
    break;
  case 10:monkey.scale =  0.14;
    break;
  case 25:monkey.scale = 0.16;
    break;
  case 30:monkey.scale = 0.18;
    break;
   default: break;
}  
  
}

function banana(){
  
   if (frameCount % 120 === 0) {
   var banana = createSprite(400,200,40,10);
   banana.addImage("bananas",bananaimg)
     banana.scale = 0.045;
     
   banana.velocityX = -4;     
 
  //banana.x = random(600,60);
   // banana.setAnimation("Banana");
     
     //assign lifetime to the variable
    banana.lifetime = 400;
     bananaGrp.add(banana);   

   
   } 
    
}

function Obstaces(){
  
  

  if(frameCount % 100 === 0) {
    var rock = createSprite(400,340,10,40);
    rock.scale = 0.1;
    rock.addAnimation("rocks",rockimg);
    rock.velocityX = -4;
    
    //assign scale and lifetime to the obstacle           
    rock.lifetime = 400;
    ObstacesGrp.add (rock);
  }  

}