
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball, ball1,ball2,ball3
var ground
var box1,box2,box3
var state="pre";
function preload()
{
	
}

function setup() {
	createCanvas(1280, 400);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-50,width,10)
	box1 = new Box(width-300,height-65,200,20)
  box2 = new Box(width-410,height-115,20,100)
  box3 = new Box(width-190,height-115,20,100)
  ball = new Ball(170,300,25,25)
  ball1 = new Ball(180,300,25,25)
  ball2 = new Ball(190,300,25,25)
  ball3 = new Ball(170,300,25,25)
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(state==="pre") {
    textSize(20);
    fill("white");
    text("Press UP ARROW.",600,50);
    text("Make all the balls into the bin",900,50)
  }
  ground.display()
  box1.display()
  box2.display()
  box3.display()
  ball.display()
  ball1.display()
  ball2.display()
  ball3.display()
  
}
function keyPressed(){
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body,ball.body.position,{x: 30,y: -30})
  }
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball1.body,ball1.body.position,{x: 30,y: -30})
  }
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball2.body,ball2.body.position,{x: 30,y: -30})
  }
  if (keyCode === UP_ARROW){
    Matter.Body.applyForce(ball3.body,ball3.body.position,{x: 30,y: -30})
  }
}


