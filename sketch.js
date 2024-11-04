let frown;
let smiley;
let recipe = '';
let dizzy;
let mad;
const answer = ' dizzy';
let check;
let youWon = false;
function setup() {
  let canvas = new Canvas("fullscreen");
  textFont("Courier", 24);
  rectMode(CENTER);
  frown = createSprite();
  frown.x = 50;
  smiley = new Sprite();
  smiley.x = 125;
  dizzy = new Sprite();
  dizzy.x = 200;
  mad = new Sprite();
  mad.x = 275;
  check = new Sprite();
}

function draw() {
  clear();
  text("frown", 20, height / 2 - 100);
  text("smiley", 100, height / 2 - 100);
  text("dizzy", 190, height / 2 - 100);
  text("mad", 270, height / 2 - 100);
  text(recipe, 100, 100);
  text("check", 750, height / 2 - 100);
  if (frown.mouse.pressed()) recipe = recipe + " frown";
  if (smiley.mouse.pressed()) recipe = recipe + " smiley";
  if (dizzy.mouse.pressed()) recipe = recipe + " dizzy";
  if (mad.mouse.pressed()) recipe = recipe + " mad";
  text(answer, 150, 125);
  if (check.mouse.pressed()) answerKey();
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


