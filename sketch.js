let yPos = 350;
let vodka;
let rum;
let whiskey;
let soda;
let ice;
let tequilla;
let gin;
let tonic;
let recipe = "";
let answer = "hello";
let serve;
let youWon = false;
let state;
let xPos = 400;



function setup() {
  let canvas = new Canvas("fullscreen");
  background("white");
  textFont("Courier", 24);
  rectMode(CENTER);
  vodka = new Ingredient("vodka", 50, yPos);
  rum = new Ingredient("rum", 125, yPos);
  whiskey = new Ingredient("whiskey", 200, yPos);
  soda = new Ingredient("soda", 725, yPos);
  ice = new Ingredient("ice", 1000, 500);
  tequilla = new Ingredient("tequilla", 275, yPos);
  gin = new Ingredient("gin", 275, yPos);
  tonic = new Ingredient("tonic", 650, yPos);
  serve = new Ingredient ("serve", 1250, 600)
  console.log(serve);
}

function draw() {
  clear();
  text(answer, 50, 50);
  switch (state) {
    case 0:
      break;
  }


  text(answer, 100, 50);
  bar();
}
function makeDrink(){
  if (vodka.mouseClicked(recipe = recipe + " vodka"));
 if (rum.mouse.pressed()) recipe = recipe + " rum";
  if (whiskey.mouse.pressed()) recipe = recipe + " whiskey";
  if (soda.mouse.pressed()) recipe = recipe + " soda";
  if (ice.mouse.pressed()) recipe = recipe + " ice";
  if (tequilla.mouse.pressed()) recipe = recipe + " tequilla";
  if (gin.mouse.pressed()) recipe = recipe + " gin"
  if (tonic.mouse.pressed()) recipe = recipe + " tonic"
  text(answer, 150, 125);
  if (serve.mouse.pressed()) answerKey();
  if (youWon === true){
        text('YOU WON', 300, 400)
}
}
function answerKey() {
  console.log(recipe);
  console.log(answer);
  youWon = recipe === answer ? true : false;
  console.log(youWon);
}
