class Bird {
  constructor(x,y){
   var options={
     'restitution' : 0.5,
     
   }
   this.body = Bodies.circle(x,y,25,options);
   Matter.Body.setMass(this.body,this.body.mass*6)
   World.add(world,this.body);
    this.image = loadImage("sprites/bird.png");
    this.image1 = loadImage("sprites/smoke.png");
    this.trajectory = [];
    this.Visiblity = 255;
  }

  display() {
    push()
    translate(this.body.position.x,this.body.position.y);
    imageMode(CENTER);
    image(this.image,0,0,50,50);
    pop()
    if(this.body.position.x>200&&this.body.velocity.x>10){
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
    }
    push()
    for(var x=0;x<this.trajectory.length;x++){
      image(this.image1,this.trajectory[x][0],this.trajectory[x][1]);
      this.Visiblity = this.Visiblity -0.05;
      tint(255,this.Visiblity);
    }
    pop()
  }
}
