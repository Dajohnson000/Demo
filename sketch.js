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
let answer = "";
let serve;
let youWon = false;
let state = 0;
let xPos = 400;
let id;
let winCondition = false;

function setup() {
  let canvas = new Canvas("fullscreen");
  textFont("Courier", 24);
  console.log(serve);
}

function draw() {
  background("darkolivegreen");
  switch (state) {
    case 0:
      say(
        "Boss: Hey, welcome to your new job!",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 1:
      say(
        "Thanks! I am so excited to start",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 2:
      say(
        "Boss: Well, just so you know. We have a 3 strikes \nand you out policy on drinks being made. \nIf you mess up a drink 3 different times you \nwill be fired. You can use a recipe if you \nneed it",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 3:
      say("Alright, no problem!", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 4:
      say(
        "Boss: Also, I don't really care if you have a \ndrink or 2 behind the bar but do not be drunk \nbehind the bar.",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 5:
      say(
        "That should not be a probelm",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 6:
      text("Shift 1", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 7:
      say(
        "Andy: Well hellos there. I have not met you yet. You must be new",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 8:
      say(
        "Wow you must come often if you picked up that this is my first day",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 9:
      say(
        "Andy: Well, everyday I need time away from my wife to have some me time so I strool down here",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 10:
      say(
        "A little personal time never hurt anybody",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 11:
      say(
        "Andy: Exactly now can you get me a Jack and coke",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 12:
      say("Of course", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 13:
      bar();
      answer = " ice whiskey soda";
      if (winCondition === true) {
        state === 14;
      }
      if (winCondition === false) {
        state === 22;
      }
      console.log(winCondition);
      break;
    case 14:
      youWon === false;
      say("Here ya go", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 15:
      say(
        "Andy: Absolutely perfect",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 16:
      say(
        "Andy: For your first day let me buy you us a couple shots",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 17:
      say(
        "Nice, what are we drinking",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 18:
      say("Andy: Whsikey", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 19:
      bar();
      answer = "whiskey";
      if (youWon === true) {
        state++;
      }
      if (youWon === false) {
        state === 21;
      }
      break;
    case 20:
      say(
        "Andy: You seem competent enough",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 21:
      say(
        "Andy: I don't know what that was but thanks I guess",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 22:
      say(
        "Andy: This drink tastes a little funny",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 23:
      say("*Andy leaves*", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 24:
      text("End of Shift 1", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 25:
      break;
    case 26:
      text("Shift 2", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 27:
      say("Andy: Well hello again", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 28:
      say(
        "Hiding from your wife again?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 29:
      say(
        "Andy: I forgot to do the dishes and take out the trash",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 30:
      say(
        "Come on man. Those are the easy things",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 31:
      say(
        "Andy: I know. That's why she is so pissed at me",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 32:
      say(
        "Well good luck with that",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 33:
      say(
        "Andy: Well I will have a vodka soda tonight",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 34:
      bar();
      break;
    case 35:
      say("Andy: Thanks", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 36:
      say(
        "Andy: Unfortunately I have not been making it easier on her",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 37:
      say("Huh", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 38:
      say(
        "Andy: My wife, I don't think she is feeling well",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 39:
      say("Is she ok?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 40:
      say(
        "Andy: I hope so but I am honestly not too sure",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 41:
      say(
        "Well maybe doing the dishes and taking out the trash might be a good start to making her feel better",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 42:
      say("Andy: Yeah I know", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 43:
      say(
        "Andy: Ugh, This is horrible",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 44:
      say("Oh, my bad", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 45:
      say(
        "Andy: If it stays like this I might not be able to come back to my favorite place",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 46:
      text("*Andy Leaves*", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 47:
      say(
        "Well might as well have my shift drink if it is free",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 48:
      text("End of Shift 2", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 49:
      text("Shift 3", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 50:
      say(
        "Hey man how are you doing",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 51:
      say(
        "Andy: Been better, been worse",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 52:
      say(
        "What did you forget this time?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 53:
      say(
        "Andy: Nothing but my wife is in the hospital",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 54:
      say("Oh no", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 55:
      say(
        "Andy: Yep she just collapsed right in front of me",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 56:
      say("Shit", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 57:
      say(
        "Andy: Yep she is in surgery now",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 58:
      say("I hope she is ok", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 59:
      say(
        "Andy: Yeah the docs told me to go home but I don't think I can",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 60:
      say("Understandable", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 61:
      say("Can I get you a drink", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 62:
      say(
        "Andy: Gin and Tonic, her favorite",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 63:
      say("Will do", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 64:
      bar();
      break;
    case 65:
      say(
        "Andy: Thanks I needed this",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 66:
      say(
        "Andy: This will work I guess",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 67:
      say(
        "Andy: Let's do some shots. I don't want to be able to think right now",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 68:
      say(
        "Alright let's do some shots. I will do some with you to give you some company",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 69:
      say(
        "Andy: I appreciate that, vodka",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 70:
      bar();
      break;
    case 71:
      say("Andy: Thanks", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 72:
      say(
        "Andy: Y'all's vodka sucks",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 73:
      say("Andy: Another", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 74:
      bar();
      break;
    case 75:
      say("Andy: Thanks", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 76:
      say("Andy: disgusting", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 77:
      say("Andy: Another", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 78:
      say("You sure?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 79:
      say("Andy: Give me another", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 80:
      say("Alright", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 81:
      bar();
      break;
    case 82:
      say(
        "Andy: Alright I ammm donnne I thiiink",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 83:
      say("III agreeeee", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 84:
      text("*Andy Leaves*", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 85:
      text("End of Shift 3", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 86:
      text("Shift 4", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 87:
      say(
        "Hey man everything alright?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 88:
      say("Andy: No", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 89:
      say("Want to talk about it?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 90:
      say("Andy: No", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 91:
      say("Want a drink?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 92:
      say("Vodka Soda", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 93:
      bar();
      break;
  }
  console.log(state);
}

function answerKey() {
  console.log(recipe);
  console.log(answer);
  youWon = recipe === answer ? true : false;
  console.log(youWon);
}
function say(s, x, y) {
  rect(x - 5, y - 20, 700, 300, 5, 5, 5, 5);
  text(s, x, y);
}
function keyPressed() {
  if (keyCode === 13) {
    if ((state === !13, 33, 63, 69, 74, 81, 87, 99, 126, 152, 172))
      state = state + 1;
  } else return;
}
