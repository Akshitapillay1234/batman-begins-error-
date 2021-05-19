const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var thunder,t1,t2,t3,t4,r
var man,m1
var maxDrops=100
var drop=[]
var thunderCreatedFrame = 0;

function preload(){
    t1=  loadImage("images/thunderbolt/1.png");
    t2=  loadImage("images/thunderbolt/2.png");
    t3=  loadImage("images/thunderbolt/3.png");
    t4=  loadImage("imagesthunderbolt/4.png");
 
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;  
    
    man= new Man(200,500)
    
   
    for(var i = 0; i<maxDrops; i++){
    maxDrops. push(new createDrops(random(0,500), random(0,500)));
    }
}

function draw(){
  engine.update(engine) ;
  background(night) ;


  r= math.round(random(1,4));
  if(frameCount%80=== 0){
      thunderCreatedFrame = frameCount;
      thunder = createSprite(random(10,370),random(10,30),10,10);
      switch(r){
      case 1:thunder.addImage(t1);
      break;
      case 2:thunder.addImage(t2);
      break;
      case 3:thunder.addImage(t3);
      break;
      case 4:thunder.addImage(t4);
      break;
      default: break;

      }
      thunder.scale= 0.7;
  }
  
  if(thunderCreatedFrame+ 10 === frameCount&& thunder){
      thunder.destroy();

  }
  man.display();
  for(var i = 0; i< maxDrops; i++){
   drops[i].display();
   drops[i].update();
  }
  drawSprites();
}

