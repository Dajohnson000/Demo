class Ingredient {

    constructor(name, xPos, yPos) {
      this.name = name;
      this.xPos = xPos;
      this.yPos = yPos;
    }
      display() {
        fill("white");
        strokeWeight(3);
        rect(this.xPos, this.yPos, 55, 55);
        //text(this.name, this.xPos + 50, this.yPos)
      }
    }
  function bar(){
    vodka.display();
    rum.display();
    whiskey.display();
    soda.display();
    ice.display();
    tequilla.display();
    gin.display();
    tonic.display();
    serve.display();
    //text(answer, 50, 50);
  }
