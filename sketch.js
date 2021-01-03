const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

function setup()
{
  createCanvas(windowWidth/2, windowHeight/2);
  engine = Engine.create();
  world = engine.world;
  pendulumHeight = height/2 + height/3
  constraintHeight = height/2 - height/3

  pendulum1 = new Pendulum(width/2 - 160, pendulumHeight, 40);
  pendulum2 = new Pendulum(width/2 - 80, pendulumHeight, 40);
  pendulum3 = new Pendulum(width/2, pendulumHeight, 40);
  pendulum4 = new Pendulum(width/2 + 80, pendulumHeight, 40);
  pendulum5 = new Pendulum(width/2 + 160, pendulumHeight, 40);
  constraint1 = new Rope(pendulum1.body, {x: width/2 - 160, y: constraintHeight});
  constraint2 = new Rope(pendulum2.body, {x: width/2 - 80, y: constraintHeight});
  constraint3 = new Rope(pendulum3.body, {x: width/2, y: constraintHeight});
  constraint4 = new Rope(pendulum4.body, {x: width/2 + 80, y: constraintHeight});
  constraint5 = new Rope(pendulum5.body, {x: width/2 + 160, y: constraintHeight});

  Engine.run(engine);
}
function draw()
{
  background(50);
  pendulum1.display("red");
  pendulum2.display("red");
  pendulum3.display("red");
  pendulum4.display("red");
  pendulum5.display("red");
  constraint1.display();
  constraint2.display();
  constraint3.display();
  constraint4.display();
  constraint5.display();
}

function mouseDragged()
{
  Matter.Body.setPosition(pendulum1.body, {x: mouseX, y: mouseY});
}