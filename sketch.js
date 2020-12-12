
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin1;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	paper = new Paper(100, 500, 30);
	
	dustbin1 = new Dustbin(600, 650, 200, 20);
	dustbin2 = new Dustbin(510, 570, 20, 190);
	dustbin3 = new Dustbin(690, 570, 20, 190);

	ground = new Ground(400, 670, 800, 20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("gray");
  Engine.update(engine);
  
  paper.display();
 
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  ground.display();
  
  //drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   //Matter.Body.setStatic(paper, false);
	//	Matter.Body.applyForce(paper, {x: 10, y: 350}, {x: 100, y: -500});
		Matter.Body.applyForce(paper.body,paper.body.position,{x:150,y:-300});
	 }
   }



