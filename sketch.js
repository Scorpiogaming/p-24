
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var Ground,dustbinObj,paperObject;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

   paperObject=new paper(200,500);
   dustbinObj=new dustbin(700,650);
   Ground = new Ground(200,height,2000,20);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ground.display();
  paperObject.display();
  dustbinObj.display();
}

function keyPressed(){
	if(KeyCode===UP_ARROW){
		Matter.Body.applyForce(paperObject.bodypaperObject.body.position,{x:85,y:85});
	}
}


