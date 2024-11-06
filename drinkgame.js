class Ingredient {
  constructor(name, xPos, yPos, isClicked) {
    this.name = name;
    this.xPos = xPos;
    this.yPos = yPos;
    this.isClicked = isClicked;
  }
  display() {
    fill("white");
    strokeWeight(3);
    rect(this.xPos, this.yPos, 55, 55);
    //text(this.name, this.xPos + 50, this.yPos)
  }
  mouseClicked() {
    let rectWidth = 55;
    let rectHeight = 55;
    if(mouseX > this.xPos && mouseX < this.xPos + rectWidth && mouseY > this.yPos && mouseY < this.yPos + rectHeight) {
      console.log("done");
       return true;
      }
}
}
vodka = new Ingredient("vodka", 50, yPos, false);
rum = new Ingredient("rum", 125, yPos, false);
whiskey = new Ingredient("whiskey", 200, yPos, false);
soda = new Ingredient("soda", 725, yPos, false);
ice = new Ingredient("ice", 1000, 500, false);
tequilla = new Ingredient("tequilla", 275, yPos, false);
gin = new Ingredient("gin", 275, yPos, false);
tonic = new Ingredient("tonic", 650, yPos, false);
serve = new Ingredient("serve", 1250, 600, false);

function bar() {
  vodka.display();
  rum.display();
  whiskey.display();
  soda.display();
  ice.display();
  tequilla.display();
  gin.display();
  tonic.display();
  serve.display();
  text(answer, 50, 50);
  text(recipe, 80, 50);
  if (youWon === true) {
    text("YOU WON", 300, 400);
}
}
function mouseClicked() {
  if ((recipe = recipe + " vodka"));
  if (rum.mouseClicked()) recipe = recipe + " rum";
  if (whiskey.mouseClicked()) recipe = recipe + " whiskey";
  if (soda.mouseClicked()) recipe = recipe + " soda";
  if (ice.mouseClicked()) recipe = recipe + " ice";
  if (tequilla.mouseClicked()) recipe = recipe + " tequilla";
  if (gin.mouseClicked()) recipe = recipe + " gin";
  if (tonic.mouseClicked()) recipe = recipe + " tonic";
  text(answer, 150, 125);
  if (serve.mouseClicked()) answerKey();
}
