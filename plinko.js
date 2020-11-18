class Plinko{
    constructor(x,y,radius){
        var options = {
            'isStatic' : true,
            'restitution' : 0.3,
            'friction' : 0.5,
            'density' : 1.3
        }
    this.body = Bodies.circle(x,y,radius,options);
    World.add(world,this.body);
    this.radius = radius;
    //this.image = loadImage("paper.png");
    }

    display(){
        var pos = this.body.position;
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }
}