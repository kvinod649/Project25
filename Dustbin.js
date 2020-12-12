class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.image = loadImage("Sprites/dustbingreenImg.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      //rectMode(CENTER);
      //fill("pink");
      imageMode(CENTER);

      image(this.image, 600, 570, 200, 200);
      fill("green");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };