class Particle{
    constructor(x,y,radius){
        var options = {
            'isStatic' : false,
            'restitution' : 0.4,
            'friction' : 0.5,
            'density' : 1.3
        }
    this.body = Bodies.circle(x,y,radius,options);
    this.color = color(random(0,255),random(0,255),random(0,255));
    World.add(world,this.body);
    this.radius = radius;
    //this.image = loadImage("paper.png");
    }

    display(){
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x,pos.y);
        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y, this.radius, this.radius);
        pop();
    }
}