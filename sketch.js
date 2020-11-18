const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division = [];
var divisionHeight = 300;
var plinko = [];
var particle = [];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-5,width,10);
}

function draw() {
  background(0);  
  Engine.update(engine);

  for(i = 5; i < 480; i = i + 80){
    division.push(new Division(i,height - divisionHeight/2,10,divisionHeight));
  }

  for(i = 40; i <= width; i = i + 50){
    for(j = 200; j < 500; j = j + 100){
      plinko.push(new Plinko(i,j,10));
    }
  }

  for(i = 15; i <= width; i = i + 50){
    for(j = 250; j < 500; j = j + 100){
      plinko.push(new Plinko(i,j,10));
    }
  }

  for(i = 0; i < particle.length; i++){
    particle[i].display();
  }

  for(i = 0; i < plinko.length; i++){
    plinko[i].display();
  }

  for(i = 0; i < division.length; i++){
    division[i].display();
  }

  ground.display();

  if(frameCount % 90 === 0){
    particle.push(new Particle(random(width/2 - 10, width/2 + 10),10,10));
  }
}
