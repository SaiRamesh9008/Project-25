class Hammer {
    constructor(x, y,hight,angle,) {
      var options = {
          'restitution':2.0,
          'friction':1.0,
          'density':0.5
      }
      this.body = Bodies.rectangle(x, y,30,hight, options);
      this.width = 30;
      this.height = hight;
      Matter .Body.setAngle(this.body,angle)

      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      
      strokeWeight(4);
      stroke("black")

      fill("yellow");
      rect(0, 0, this.width, this.height);
      pop();
    }
  }























