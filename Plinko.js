class Plinko{
    constructor(x,y,radius){
     
    var options ={
        'restitution':0.3,
        'friction':0.5,
        'density':1.2,
        'isStatic': false
        
    }
    this.x = x;
    this.y = y;
    this.radius = 10;
    this.body = Bodies.circle(this.x,this.y,this.radius-30,options); 
    
    World.add(world,this.body);
}
display(){
    var pos=this.body.position;
    push();
    translate(pos.x,pos.y);
    rectMode(CENTER);
     imageMode(CENTER);
     fill("White");
      image(this.paperimage,0,0,this.radius,this.radius)
    pop();
}
}