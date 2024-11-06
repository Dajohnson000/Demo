let yPos = 350;
let vodka;
let rum;
let whiskey;
let soda;
let ice;
let tequilla;
let gin;
let tonic;
let recipe = "Your drink:";
let answer = "hello";
let serve;
let youWon = false;
let state;
let xPos = 400;
let id;




function setup() {
  let canvas = new Canvas("fullscreen");
  textFont("Courier", 24);
  console.log(serve);
}

function draw() {
  switch (state) {
    case 0:
      break;
  }
  bar();
}

function answerKey() {
  console.log(recipe);
  console.log(answer);
  youWon = recipe === answer ? true : false;
  console.log(youWon);
}
