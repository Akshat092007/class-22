const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var myengine,myworld,ground

var ball

function setup() {
  createCanvas(1200,600);

  myengine = Engine.create()//by default a .world;
  myworld = myengine.world
  
  var ground_options={
    isStatic : true
  }
  ground = Bodies.rectangle(600, 590, 1200, 20,ground_options);
  World.add(myworld,ground)

  var ball_options={
    restitution:1
  }
  ball=Bodies.circle(200,200,25,ball_options);
  World.add(myworld,ball)

  console.log(ground.position.y)
  
}

function draw() {
  background("black"); 

  Engine.update(myengine)
  rectMode(CENTER) 
  rect (ground.position.x,ground.position.y,1200,20)
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,25,25)
  drawSprites();
}