const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var pig=[];
var engine, world;
var box1, pig1,pig3;
var backgroundImg,platform;

var bg;

var flag = 0;

function preload() {
     bg = loadImage("images/bg.jpg");
     trainSound = loadSound("sound/train.mp3");
     crashSound = loadSound("sound/train_crossing.mp3");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    rock = new Rock(1050,200,120,120)
    boggie1 = new Boggie(600,170,50,50)
    boggie2 = new Boggie(500,170,50,50)
    boggie3 = new Boggie(400,170,50,50)
    boggie4 = new Boggie(300,170,50,50)
    boggie5 = new Boggie(200,170,50,50)
    boggie6 = new Boggie(100,170,50,50)
    ground = new Ground(600,height,1200,20);
    chain1 = new Chain(boggie1.body,boggie2.body)
    chain2 = new Chain(boggie2.body,boggie3.body)
    chain3 = new Chain(boggie3.body,boggie4.body)
    chain4 = new Chain(boggie4.body,boggie5.body)
    chain5 = new Chain(boggie5.body,boggie6.body)
    
}

function draw(){
    background(bg)
        
    Engine.update(engine);
    //strokeWeight(4);
    ground.display()
    boggie1.display()
    boggie2.display()
    boggie3.display()
    boggie4.display()
    boggie5.display()
    boggie6.display()
    rock.display()
    chain1.display()
    chain2.display()
    chain3.display()
    chain4.display()
    chain5.display()
    var collision = Matter.SAT.collides(boggie1.body,rock.body);
    if(collision.collided)
  {
    flag=1;
    
    
  }
  if(flag ===1){
    textSize(30);
    stroke(3);
    fill('blue');
    text("CRASH",500,200);
    crashSound.play();
  }
}


function keyPressed(){
    if(keyCode === RIGHT_ARROW)
    { Matter.Body.applyForce(boggie6.body,{x:boggie6.body.position.x,y:boggie6.body.position.y}, {x:0.5,y:0});

trainSound.play();
}}
