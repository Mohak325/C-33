class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    this.Visiblity = 255; 
    this.remove = true;
  }
display(){
  console.log(this.body.speed);
  if(this.body.speed<3){
    super.display();
  }
else{
  World.remove(world,this.body);
  if(this.remove==true){
    score = score + 50;
    this.remove = false;
  }
  push();
  this.Visiblity = this.Visiblity-5;
  tint(225,this.Visiblity);
  image(this.image,this.body.position.x,this.body.position.y,50,50);
 pop();
}
}

  

}