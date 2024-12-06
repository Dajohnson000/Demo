let yPos = 534;
let vodka;
let rum;
let whiskey;
let soda;
let ice;
let tequilla;
let gin;
let tonic;
let recipe = "";
let answer = "";
let serve;
let youWon;
let state = 0;
let xPos = 400;
let id;
let winCondition;
let fail = 0;
let img = [];
let imgWidth;
let imgHeight;
function preload(){
  vodka = new Ingredient("vodka", 125, yPos, false, 'assets/vodka.png', 85, 85);
  rum = new Ingredient("rum", 200, yPos, false, 'assets/rum.png', 85, 85);
  whiskey = new Ingredient("whiskey", 275, yPos, false,'assets/whiskey.png', 85, 85);
  soda = new Ingredient("soda", 850, yPos, false, 'assets/soda.png', 100, 100);
  ice = new Ingredient("ice", 975, 535, false, 'assets/ice.png', 250, 85);
  tequilla = new Ingredient("tequilla", 350, yPos, false, 'assets/tequilla.png', 85, 85);
  gin = new Ingredient("gin", 425, yPos, false, 'assets/gin.png', 85, 85);
  tonic = new Ingredient("tonic", 500, yPos, false, 'assets/tonic.png', 85, 85);
  serve = new Ingredient("serve", 1250, 450, false, 'assets/serve.png', 100, 100);
}
function setup() {
  let canvas = new Canvas("fullscreen");
  textFont("Courier", 24);
  console.log(serve);
img[0] = loadImage('assets/drinkbackground.png');
img[1] = loadImage('assets/textbox.png');
img[2] = loadImage('assets/andylistening.JPG');
img[3] = loadImage('assets/andytalking.JPG')
img[4] = loadImage('assets/andysad.JPG');
img[5] = loadImage('assets/andydrinking.JPG');
img[6] = loadImage('assets/PreShift.jpg');
img[7] = loadImage('assets/endofshiftsober.jpg');
img[8] = loadImage('assets/lazyafterwork.jpg');
img[9] = loadImage('assets/drunkatbar.jpg');
img[10] = loadImage('assets/Home kitchen.jpg');
img[11] = loadImage('assets/newjob.jpg');
img[12] = loadImage('assets/rehab.jpg');
img[13] = loadImage('assets/Bosshappy.JPG');
img[14] = loadImage('assets/bossmad.JPG');


}

function draw() {
  background("darkolivegreen");
  console.log(youWon);
  img[2].resize(windowWidth,windowHeight);
  img[3].resize(windowWidth,windowHeight);
  img[4].resize(windowWidth,windowHeight);
  img[5].resize(windowWidth,windowHeight);
  img[6].resize(windowWidth,windowHeight);
  img[7].resize(windowWidth,windowHeight);
  img[8].resize(windowWidth, windowHeight);
  img[9].resize(windowWidth, windowHeight);
  img[10].resize(windowWidth, windowHeight);
  img[11].resize(windowWidth,windowHeight);
  img[12].resize(windowWidth,windowHeight);
  img[13].resize(windowWidth,windowHeight);
  img[14].resize(windowWidth,windowHeight);
  switch (state) {
    case 0:
      image(img[13], 0, 0);
      say(
        "Boss: Hey, welcome to your new job!",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 1:
      image(img[13], 0, 0);
      say(
        "Thanks! I am so excited to start",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 2:
      image(img[13], 0, 0);
      say(
        "Boss: Well, just so you know. We have a 3 strikes \nand you out policy on drinks being made. \nIf you mess up a drink 3 different times you \nwill be fired. You can use a recipe if you \nneed it",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 3:
      image(img[13], 0, 0);
      say("Alright, no problem!", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 4:
      image(img[13], 0, 0);
      say(
        "Boss: Also, I don't really care \n if you have a drink or 2 behind the bar \nbut do not be drunk behind \nthe bar.",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 5:
      image(img[13], 0, 0);
      say(
        "That should not be a probelm",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 6:
      image(img[6], 0, 0);
      say("Shift 1", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 7:
      image(img[3], 0, 0);
      say(
        "Andy: Well hellos there. I have \n not met you yet. You must be new",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 8:
      image(img[2], 0, 0);
      say(
        "Wow you must come often if you \npicked up that this is my first \nday",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 9:
      image(img[3], 0, 0);
      say(
        "Andy: Well, everyday I need time \naway from my wife to have some \nme time so I strool down here",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 10:
      image(img[2], 0, 0);
      say(
        "A little personal time never hurt anybody",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 11:
      image(img[3], 0, 0);

      say(
        "Andy: Exactly now can you get me \na Jack and coke",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 12:
      image(img[2], 0, 0);
      say("Of course", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 13:
      bar();
      answer = " ice whiskey soda";
      if (winCondition === true) {
        state = 14;
      }
      if (winCondition === false) {
        if ( fail == 3){
          state = 181;
        }
        else {state = 22;
        }
      }
      console.log(winCondition);
      break;
    case 14:
      image(img[5], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say("Here ya go", windowWidth / 2, windowHeight * 0.66 + 100);
      console.log("hello");
      console.log(say);
      break;
    case 15:
      image(img[3], 0, 0);

      say(
        "Andy: Absolutely perfect",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 16:
      image(img[3], 0, 0);

      say(
        "Andy: For your first day let me buy \nyou us a couple shots",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 17:
      image(img[2], 0, 0);
      say(
        "Nice, what are we drinking",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 18:
      image(img[3], 0, 0);

      say("Andy: Whsikey", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 19:
      bar();
      answer = " whiskey";
      if (youWon === true) {
        state++;
      }
      if (youWon === false) {
        if ( fail == 3){
          state = 181;
        }
        else {
          state = 21;
        }
      }
      //fixing git
      break;
    case 20:
      image(img[5], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: You seem competent enough",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 21:
      image(img[3], 0, 0);

      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: I don't know what that was but\n thanks I guess",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 22:
      image(img[3], 0, 0);

      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: This drink tastes a little\n funny",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 23:
      image(img[0], 0, 0);
      say("*Andy leaves*", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 24:
      image(img[7], 0, 0);
      say("End of Shift 1", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 25:
      state++
      break;
    case 26:
      image(img[6], 0, 0);
      say("Shift 2", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 27:
      image(img[3], 0, 0);

      say("Andy: Well hello again", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 28:
      image(img[2], 0, 0);
      say(
        "Hiding from your wife again?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 29:
      image(img[3], 0, 0);

      say(
        "Andy: I forgot to do the dishes \nand take out the trash",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 30:
      image(img[2], 0, 0);
      say(
        "Come on man. Those are the easy \nthings",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 31:
      image(img[3], 0, 0);

      say(
        "Andy: I know. That's why she is so \npissed at me",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 32:
      image(img[2], 0, 0);
      say(
        "Well good luck with that",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 33:
      image(img[3], 0, 0);

      say(
        "Andy: Well I will have a vodka soda\n tonight",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 34:
      bar();
      answer = " vodka soda";
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        if ( fail == 3){
          state = 181;
        }
        else {
          state = 43;}
      }
      break;
    case 35:
      image(img[5], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say("Andy: Thanks", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 36:
      image(img[3], 0, 0);

      say(
        "Andy: Unfortunately I have not been \nmaking it easier on her",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 37:
      image(img[4], 0, 0);
      say("Huh", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 38:
      image(img[3], 0, 0);

      say(
        "Andy: My wife, I don't think she is \nfeeling well",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 39:
      image(img[4], 0, 0);
      say("Is she ok?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 40:
      image(img[3], 0, 0);

      say(
        "Andy: I hope so but I am honestly not \ntoo sure",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 41:
      image(img[4], 0, 0);
      say(
        "Well maybe doing the dishes and taking out \nthe trash might be a good start to \nmaking her feel better",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 42:
      image(img[3], 0, 0);

      say("Andy: Yeah I know", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 43:
      image(img[3], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: Ugh, This is horrible",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 44:
      image(img[2], 0, 0);
      say("Oh, my bad", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 45:
      image(img[3], 0, 0);

      say(
        "Andy: If it stays like this I might not be \nable to come back to my favorite place",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 46:
      image(img[0], 0, 0);
      say("*Andy Leaves*", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 47:
      image(img[0], 0, 0);
      say(
        "Well might as well have my shift drink if \nit is free",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 48:
      image(img[0], 0, 0);
      say("*You make a drink*", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 49:
      image(img[7], 0, 0);
      text("End of Shift 2", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 50:
      image(img[6], 0, 0);
      text("Shift 3", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 51:
      image(img[4], 0, 0);
      say(
        "Hey man how are you doing",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 52:
  
      image(img[3], 0, 0);

      say(
        "Andy: Been better, been worse",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 53:
      image(img[4], 0, 0);
      say(
        "What did you forget this time?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 54:
      image(img[3], 0, 0);

      say(
        "Andy: Nothing but my wife is in the hospital",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 55:
      image(img[4], 0, 0);
      say("Oh no", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 56:
      image(img[3], 0, 0);

      say(
        "Andy: Yep she just collapsed right in front of me",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 57:
      image(img[4], 0, 0);
      say("Shit", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 58:
      image(img[3], 0, 0);

      say(
        "Andy: Yep she is in surgery now",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 59:
      image(img[4], 0, 0);
      say("I hope she is ok", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 60:
      image(img[3], 0, 0);

      say(
        "Andy: Yeah the docs told me to go home \nbut I don't think I can",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 61:
      image(img[4], 0, 0);
      say("Understandable", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 62:
      image(img[4], 0, 0);
      say("Can I get you a drink", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 63:
      image(img[3], 0, 0);

      say(
        "Andy: Gin and Tonic, her favorite",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 64:
      image(img[2], 0, 0);
      say("Will do", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 65:
      bar();
      answer = " gin tonic";
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        if ( fail == 3){
          state = 181;
        }
        else {
          state = 67;
        }
      }
      break;
    case 66:
      image(img[5], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: Thanks I needed this",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 67:
      image(img[5], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: This will work I guess",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 68:
      image(img[3], 0, 0);

      say(
        "Andy: Let's do some shots. I don't want \nto be able to think right now",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 69:
      image(img[4], 0, 0);
      say(
        "Alright let's do some shots. I will do some \nwith you to keep you company",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 70:
      image(img[3], 0, 0);

      say(
        "Andy: I appreciate that, vodka",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 71:
      bar();
      answer = " vodka";
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        if ( fail == 3){
          state = 181;
        }
        else {
          state = 73;
      }
    }
      break;
    case 72:
      image(img[5], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say("Andy: Thanks", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 73:
      image(img[5], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: Y'all's vodka sucks",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 74:
      image(img[3], 0, 0);

      say("Andy: Another", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 75:
      bar();
      answer = " vodka";
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        if ( fail == 3){
          state = 181;
        }
        else{
          state = 77;
      }
    }
      break;
    case 76:
      image(img[3], 0, 0);

      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say("Andy: Thanks", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 77:
      image(img[3], 0, 0);

      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say("Andy: disgusting", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 78:
      image(img[3], 0, 0);

      say("Andy: Another", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 79:
      image(img[2], 0, 0);
      say("You sure?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 80:
      image(img[3], 0, 0);

      say("Andy: Give me another", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 81:
      image(img[2], 0, 0);
      say("Alright", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 82:
      answer = " vodka";
      bar();
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        if ( fail == 3){
          state = 181;
        }
        else {
          state = 85;
      }
    }
      break;
    case 83:
      image(img[3], 0, 0);

      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: Alright I ammm donnne I thiiink",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 84:
      image(img[2], 0, 0);
      say("III agreeeee", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 85:
      image(img[0], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say("*Andy Leaves*", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 86:
      image(img[8], 0, 0);
      say("End of Shift 3", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 87:
      image(img[6], 0, 0);
      say("Shift 4", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 88:
      image(img[4], 0, 0);
      say(
        "Hey man everything alright?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 89:
      image(img[3], 0, 0);

      say("Andy: No", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 90:
      image(img[4], 0, 0);
      say("Want to talk about it?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 91:
      image(img[3], 0, 0);

      say("Andy: No", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 92:
      image(img[4], 0, 0);
      say("Want a drink?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 93:
      image(img[3], 0, 0);
      say("Andy: Vodka Soda", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 94:
      image(img[3], 0, 0);
      answer = " vodka soda";
      bar();
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        if ( fail == 3){
          state = 181;
        }
        else {
          state = 109;
      }
    }
      break;
    case 95:
      image(img[3], 0, 0);

      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: She didn't make it",
        windowWidth / 2, windowHeight * 0.66 + 100
      );
      break;
    case 96:
      image(img[4], 0, 0);
      say("I am so sorry", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 97:
      image(img[3], 0, 0);

      say(
        "Andy: I did not get to say goodbye",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 98:
      image(img[4], 0, 0);
      say(
        "We do not always get the chance to",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 99:
      image(img[3], 0, 0);

      say("Andy: I miss her", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 100:
      image(img[4], 0, 0);
      say("I understand \n \n...", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 101:
      image(img[4], 0, 0);
      say("Do you need anything", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 102:
      image(img[3], 0, 0);

      say("Andy: No \n \n ...", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 103:
      image(img[3], 0, 0);

      say(
        "Andy: I don't know\n \n ...",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 104:
      image(img[3], 0, 0);

      say(
        "Andy: I don't know what to do",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 105:
      image(img[4], 0, 0);
      say(
        "Do you have any other family",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 106:
      image(img[3], 0, 0);

      say("Andy: No", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 107:
      image(img[4], 0, 0);
      say(
        "Well you are always welcome here",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 108:
      image(img[3], 0, 0);
      say("Andy: Thanks", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 109:
      image(img[0], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say("*Andy Leaves", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 110:
      image(img[0], 0, 0);
      say("I hope Andy is ok", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 111:
      image(img[0], 0, 0);
      say("*You make a drink*", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 112:
      image(img[8], 0, 0);
      say("End of Shift 4", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 113:
      image(img[6], 0, 0);
      say("Shift 5", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 114:
      image(img[2], 0, 0);
      say("How are you doing", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 115:
      image(img[3], 0, 0);

      say("Andy: Meh", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 116:
      image(img[2], 0, 0);
      say("Want to talk?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 117:
      image(img[3], 0, 0);

      say(
        "Andy: Meh, I more of want a drink",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 118:
      image(img[2], 0, 0);
      say("Understandable", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 119:
      image(img[3], 0, 0);

      say(
        "Andy: Can I get a tequilla soda?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 120:
      image(img[2], 0, 0);
      say("Of course", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 121:
      answer = " tequilla soda";
      bar();
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        if ( fail == 3){
          state = 181;
        }
        else {
          state = 129;
      }
    }
      break;
    case 122:
      image(img[5], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say("Andy: Funeral was today", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 123:
      image(img[2], 0, 0);
      say("How was it", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 124:
      image(img[3], 0, 0);

      say("Andy: Nice", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 125:
      image(img[2], 0, 0);
      say("That's good", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 126:
      image(img[3], 0, 0);

      say(
        "Andy: A lot of old friends showed up",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 127:
      image(img[2], 0, 0);
      say("That's good", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 128:
      image(img[5], 0, 0);
      say("Andy: It was nice", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 129:
      image(img[0], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say("*Andy Walks away*", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 130:
      image(img[0], 0, 0);
      say("*You take a shot*", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 131:
      image(img[8], 0, 0);
      say("End of Shift 5", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 132:
      image(img[6], 0, 0);
      say("Start of Shift 6", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 133:
      image(img[14], 0, 0);
      say(
        "Boss: I am going to need you to cut \ndown on drinking behind the bar,",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 134:
      image(img[14], 0, 0);
      say("Why?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 135:
      image(img[14], 0, 0);
      say(
        "Boss: Well I saw the cameras for the past \ncouple shifts you have worked and you have \ndrank a decent bit behind the bar and after close",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
      case 136:
        state++
      break;
    case 137:
      image(img[14], 0, 0);
      say("Oh ok", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 138:
      image(img[3], 0, 0);

      say(
        "Andy: Hey everything alright?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 139:
      image(img[2], 0, 0);
      say(
        "Boss said no more drinking behind the bar for me",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 140:
      image(img[3], 0, 0);

      say("Andy: Oh, why?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 141:
      image(img[2], 0, 0);
      say(
        "Had too many the other night",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 142:
      image(img[3], 0, 0);

      say("Andy: I feel that", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 143:
      image(img[2], 0, 0);
      say(
        "Anyways, what can I get you?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 144:
      image(img[3], 0, 0);

      say("Andy: Vodka Soda", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 145:
      answer = " vodka soda";
      bar();
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        if ( fail == 3){
          state = 181;
        }
        else {
          state = 151;
      }
    }
      break;
    case 146:
      image(img[3], 0, 0);

      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: So, how much have you been drinking",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 147:
      image(img[2], 0, 0);
      say(
        "Not a lot. Just a drink or two before work and \na beer or two after and if some people want me to do \nshots with them during my shift then I will",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 148:
      image(img[3], 0, 0);

      say(
        "Andy: That is a decent amount. Be careful how much \nyou drink as you can become dependant on it",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 149:
      image(img[2], 0, 0);
      say(
        "I am do not feel like I am",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 150:
      image(img[3], 0, 0);

      say("Andy: Yet", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 151:
      image(img[3], 0, 0);

      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: Have you been drinking today",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 152:
      image(img[2], 0, 0);
      say("Maybe, why?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 153:
      image(img[3], 0, 0);

      say(
        "Andy: Because this drink is horrible",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 154:
      image(img[2], 0, 0);
      say("Oh sorry", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 155:
      image(img[0], 0, 0);
      say("*Andy Walks away*", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 156:
      image(img[8], 0, 0);
      say("End of Shift 6", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 157:
      image(img[10], 0, 0);
      say(
        "I really do not feel like working",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 158:
      image(img[10], 0, 0);
      say(
        "I will just take one little shot to improve my spirits",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 159:
      image(img[10], 0, 0);
      say("*Takes a shot*", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 160:
      image(img[10], 0, 0);
      say("Maybe one more", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 161:
      image(img[10], 0, 0);
      text("*Takes a shot*", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 162:
      image(img[10], 0, 0);
      say("Alrighty let's go", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 163:
      image(img[6], 0, 0);
      say("Start of Shift 7", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 164:
      image(img[2], 0, 0);
      say("Hey Andy how are you?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 165:
      image(img[3], 0, 0);

      say(
        "Andy: Not bad how about you?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 166:
      image(img[2], 0, 0);
      say("I am amazing", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 167:
      image(img[3], 0, 0);

      say(
        "Andy: That's great, now get me a drink so \nI can be amazing too. How about a whiskey",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 168:
      answer = " whsikey";
      bar();
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        if ( fail == 3){
          state = 181;
        }
        else {
          state = 172;
      }
    }
      break;
    case 169:
      image(img[5], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: Thanks \n ... \n Are you sure you are good?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 170:
      image(img[2], 0, 0);
      say("I am great", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 171:
      image(img[3], 0, 0);

      say("Andy: Alright", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 172:
      image(img[5], 0, 0);
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say(
        "Andy: This is not what I ordered",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 173:
      image(img[2], 0, 0);
      say("Sure it is", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 174:
      image(img[3], 0, 0);

      say(
        "Andy: Nope it definitely is not",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 175:
      image(img[14], 0, 0);
      say(
        "Boss: Are you drunk again behind the bar?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 176:
      image(img[14], 0, 0);
      say("No definitely not", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 177:
      image(img[14], 0, 0);
      say(
        "Boss: Take a breathalyzer test then",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 178:
      image(img[14], 0, 0);
      say("*You blow into a breathalyzer*")
      break;
    case 179:
      image(img[14], 0, 0);
      say(
        "Boss: A BAC of 0.05 is way to high for the \nstart of your shift",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 180:
      image(img[14], 0, 0);
      say(
        "Boss: You're fired. Go home and sober up",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 181:
      image(img[14], 0, 0);
      say(
        "Boss: You have messed up way to many drinks \nto be working here. You are not qualified \nto be a bartender",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 182:
      image(img[6], 0, 0);
      say(
        "You continue your job as a bartender. You \ncontinue drinking behind the bar and before \nshifts to keep your spirits up. Unfortunately, you end up forming a dependancy on alcohol. You continue your job and become a functioning alcoholic",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 183:
      image(img[12], 0, 0);
      say(
        "After you were fired for being drunk behind \nthe bar you have decided to cut alcohol out \nof your life. With recommendations from your friends and family you decide rehab is a good idea for you. You then find a job away from alcohol",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 184:
      image(img[5], 0, 0);
      say(
        "After you were fired for being a terible bartender \nyou find a different job. You start \nas a customer service rep on Monday.",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;

  }
  console.log(state);
}

function say(s, x, y) {
  image(img[1], x - 250, y - 138);
 // img[1].resize(400, textHeight(s));
  text(s, x - 225, y - 100);
  img[1].resize( 800, 200);
}
function keyPressed() {
  let stateArray = [
    13, 19, 20, 21, 34, 42, 65, 66, 71, 72, 75, 76, 82, 94, 121, 145, 150, 168,
    171, 180, 181, 182, 183, 184,
  ];
  if (keyCode == 13) {
    if (!stateArray.includes(state)) {
      state++;
    }
    if (state == 20) {
      state = 23;
    }
    if (state == 21) {
      state = 23;
    }
    if (state == 42) {
      state = 46;
    }
    if (state == 66) {
      state = 68;
    }
    if (state == 72) {
      state = 74;
    }
    if (state == 76) {
      state = 78;
    }
    if (state == 150) {
      state = 155;
    }
    if (state == 171) {
      state = 182;
    }
    if (state == 180) {
      state = 183;
    }
    if (state == 181) {
      state = 184;
    }
  }
}
