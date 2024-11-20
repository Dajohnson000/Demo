class Ingredient {
  constructor(name, xPos, yPos, isClicked, imgName, imgWidth, imgHeight) {
    this.name = name;
    this.xPos = xPos;
    this.yPos = yPos;
    this.isClicked = isClicked;
    this.img = loadImage(imgName);
    this.imgWidth = imgWidth;
    this.imgHeight = imgHeight;
  }
  display() {
    image(this.img,this.xPos,this.yPos);
    this.img.resize(this.imgWidth, this.imgHeight)
    //console.log(this.img);
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
function bar() {
  image(img[0], 0, 0)
  img[0].resize(windowWidth, windowHeight);
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
  text(recipe, 50, 80);
  if (youWon === true) {
  winCondition = true;
  }
  if (youWon === false){
    winCondition = false;
    console.log("hello");
    fail++;
  }
}
function mouseClicked() {
  if (vodka.mouseClicked())recipe = recipe + " vodka";
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
function answerKey() {
  if (recipe === answer){
    youWon = true;
  }
  if (recipe !== answer){
    youWon = false;
  }
}