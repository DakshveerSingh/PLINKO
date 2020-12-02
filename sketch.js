const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var division = [];
var divisionHeight = 300;
var plinko = [];
var particle;
var score = 0;
var count = 0;
var gameState = "play";

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2,height-5,width,10);

  
  for(i = 5; i < 480; i = i + 90){
    division.push(new Division(i,height - divisionHeight/2,10,divisionHeight));
  }

  for(i = 40; i <= width; i = i + 50){
    plinko.push(new Plinko(i,200,10));
  }
  for(i = 40; i <= width; i = i + 50){
    plinko.push(new Plinko(i,300,10));
  }
  for(i = 40; i <= width; i = i + 50){
    plinko.push(new Plinko(i,400,10));
  }
  for(i = 15; i <= width; i = i + 50){
    plinko.push(new Plinko(i,250,10));
  }
  for(i = 15; i <= width; i = i + 50){
    plinko.push(new Plinko(i,350,10));
  }
  for(i = 15; i <= width; i = i + 50){
    plinko.push(new Plinko(i,450,10));
  }
}

function draw() {
  background(0);  
  Engine.update(engine);
  
  push();
  fill(255);
  textSize(25);
  text(mouseX+","+mouseY,100,100);
  text("100",210,750);
  text("50",310,750);
  text("50",125,750);
  text("25",400,750);
  text("25",40,750);
  pop();

  push();
  stroke("yellow");
  line(0,500,480,500);
  pop();

//  for(i = 0; i < particle.length; i++){
//  particle[i].display();
//}


  for(i = 0; i < plinko.length; i++){
    plinko[i].display();
  }

  for(i = 0; i < division.length; i++){
    division[i].display();
  }
  ground.display();

//  if(frameCount % 90 === 0){
//    particle.push(new Particle(random(100, width/2 - 50),10,10));
//  }

  if(particle !== null){
    particle.display();
    if(particle.body.position.y < 500){
      if(particle.body.position.x < 300){
        score = score + 500;
        particle = null;
        if(count >= 5)  gameState = "end";
      }
    }
  }
}

function mousePressed(){
  if(gameState !== "end"){
    count++;
    particle = new Particle(mouseX,10,10,10);
  }
}