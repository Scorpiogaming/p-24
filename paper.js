class paper {
    constructor(x, y) {
      var options = {
          isStatic:false,
          'restitution':0.3,
          'friction':0.5,
          'density':1.2,
      }
      this.body = Bodies.elipse(x, y,50,{options},{maxSlides});
     
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      elipseMode(CENTER);
      strokeWeight(3);
      stroke("green");
      elipse(0,0,50);
      pop();
    }
  }
  