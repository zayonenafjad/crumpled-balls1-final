var Paper, basket1,basket2,basket3;
var Ground;
const Engine= Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Render = Matter.Render;
//const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1200, 700);

	engine = Engine.create();
	world = engine.world;
	
  //ground=createSprite(400,700,800,20)
  Ground = new ground(600,690,1200,10)
Paper=new paper(20,675,50)
basket1=new dustbin(750,685);
Engine.run(engine);


//Engine.run(engine);
  
}


function draw() {
	Engine.update(engine)
  rectMode(CENTER);
  background(0);
  Paper.display();
  basket1.display()
  //basket2.display();
  //basket3.display();
  //drawSprites();
  Ground.display()
 
}
function keyPressed() {
  if (keyCode === UP_ARROW) {

    Matter.Body.applyForce(Paper.body,Paper.body.position,{x:85,y:-85});
  
  }
}



