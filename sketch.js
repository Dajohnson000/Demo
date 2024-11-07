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
let youWon;
let state = 0;
let xPos = 400;
let id;
let winCondition;

function setup() {
  let canvas = new Canvas("fullscreen");
  textFont("Courier", 24);
  console.log(serve);
}

function draw() {
  background("blue");
  console.log(youWon);
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
        state = 14;
      }
      if (winCondition === false) {
        state = 22;
      }
      console.log(winCondition);
      break;
    case 14:
      youWon = undefined;
      winCondition = undefined;
      recipe = "";
      say("Here ya go", windowWidth / 2, windowHeight * 0.66 + 100);
      console.log("hello");
      console.log(say);
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
      answer = " vodka soda";
      if (winCondition === true) {
        state = 14;
      }
      if (winCondition === false) {
        state = 22;
      }
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
      text("*You make a drink*", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 49:
      text("End of Shift 2", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 50:
      text("Shift 3", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 51:
      say(
        "Hey man how are you doing",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 52:
      say(
        "Andy: Been better, been worse",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 53:
      say(
        "What did you forget this time?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 54:
      say(
        "Andy: Nothing but my wife is in the hospital",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 55:
      say("Oh no", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 56:
      say(
        "Andy: Yep she just collapsed right in front of me",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 57:
      say("Shit", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 58:
      say(
        "Andy: Yep she is in surgery now",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 59:
      say("I hope she is ok", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 60:
      say(
        "Andy: Yeah the docs told me to go home but I don't think I can",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 61:
      say("Understandable", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 62:
      say("Can I get you a drink", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 63:
      say(
        "Andy: Gin and Tonic, her favorite",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 64:
      say("Will do", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 65:
      bar();
      answer = " gin and tonic";
      if (winCondition === true) {
        state = 14;
      }
      if (winCondition === false) {
        state = 22;
      }
      break;
    case 66:
      say(
        "Andy: Thanks I needed this",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 67:
      say(
        "Andy: This will work I guess",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 68:
      say(
        "Andy: Let's do some shots. I don't want to be able to think right now",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 69:
      say(
        "Alright let's do some shots. I will do some with you to give you some company",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 70:
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
        state = 14;
      }
      if (winCondition === false) {
        state = 22;
      }
      break;
    case 72:
      say("Andy: Thanks", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 73:
      say(
        "Andy: Y'all's vodka sucks",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 74:
      say("Andy: Another", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 75:
      bar();
      answer = " vodka";
      if (winCondition === true) {
        state = 14;
      }
      if (winCondition === false) {
        state = 22;
      }
      break;
    case 76:
      say("Andy: Thanks", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 77:
      say("Andy: disgusting", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 78:
      say("Andy: Another", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 79:
      say("You sure?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 80:
      say("Andy: Give me another", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 81:
      say("Alright", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 82:
      answer = " vodka";
      bar();
      if (winCondition === true) {
        state = 14;
      }
      if (winCondition === false) {
        state = 22;
      }
      break;
    case 83:
      say(
        "Andy: Alright I ammm donnne I thiiink",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 84:
      say("III agreeeee", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 85:
      text("*Andy Leaves*", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 86:
      text("End of Shift 3", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 87:
      text("Shift 4", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 88:
      say(
        "Hey man everything alright?",
        windowWidth / 2,
        windowHeight * 0.66 + 100
      );
      break;
    case 89:
      say("Andy: No", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 90:
      say("Want to talk about it?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 91:
      say("Andy: No", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 92:
      say("Want a drink?", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 93:
      say("Vodka Soda", windowWidth / 2, windowHeight * 0.66 + 100);
      break;
    case 94:
      answer = " vodka soda";
      bar();
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        state = 22;
      }
      break;
    case 95:
      say(
        "Andy: She didn't make it",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 96:
      say("I am so sorry", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 97:
      say(
        "Andy: I did not get to say goodbye",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 98:
      say(
        "We do not always get the chance to",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 99:
      say("Andy: I miss her", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 100:
      say("I understand \n \n...", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 101:
      say("Do you need anything", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 102:
      say("Andy: No \n \n ...", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 103:
      say(
        "Andy: I don't know\n \n ...",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 104:
      say(
        "Andy: I don't know what to do",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 105:
      say(
        "Do you have any other family",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 106:
      say("Andy: No", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 107:
      say(
        "Well you are always welcome here",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 108:
      say("Thanks", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 109:
      text("*Andy Leaves", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 110:
      say("I hope Andy is ok", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 111:
      text("*You make a drink*", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 112:
      text("End of Shift 4", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 113:
      text("Shift 5", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 114:
      say("How are you doing", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 115:
      say("Andy: Meh", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 116:
      say("Want to talk?", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 117:
      say(
        "Andy: Meh, I more of want a drink",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 118:
      say("Understandable", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 119:
      say(
        "Can I get a tequilla soda?",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 120:
      say("Of course", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 121:
      answer = " tequilla soda";
      bar();
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        state = 22;
      }
      break;
    case 122:
      say("Andy: Funeral was today", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 123:
      say("How was it", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 124:
      say("Andy: Nice", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 125:
      say("That's good", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 126:
      say(
        "Andy: A lot of old friends showed up",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 127:
      say("That's good", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 128:
      say("Andy: It was nice", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 129:
      text("*Andy Walks away*", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 130:
      text("*You take a shot*", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 131:
      text("End of Shift 5", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 132:
      text("Start of Shift 6", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 133:
      say(
        "Boss: I am going to need you to cut down on drinking behind the bar,",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 134:
      say("Why?", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 135:
      say(
        "Boss: Well I saw the cameras for the past couple shifts you have worked and you have drank a decent bit behind the bar and after close",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 137:
      say("Oh ok", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 138:
      say(
        "Andy: Hey everything alright?",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 139:
      say(
        "Boss said no more drinking behind the bar for me",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 140:
      say("Andy: Oh, why?", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 141:
      say(
        "Had too many the other night",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 142:
      say("Andy: I feel that", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 143:
      say(
        "Anyways, what can I get you?",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 144:
      say("Vodka Soda", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 145:
      answer = " vodka soda";
      bar();
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        state = 151;
      }
      break;
    case 146:
      say(
        "Andy: So, how much have you been drinking",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 147:
      say(
        "Not a lot. Just a drink or two before work and a beer or two after and if some people want me to do shots with them during my shift then I will",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 148:
      say(
        "Andy: That is a decent amount. Be careful how much you drink as you can become dependant on it",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 149:
      say(
        "I am do not feel like I am",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 150:
      say("Andy: Yet", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 151:
      say(
        "Andy: Have you been drinking today",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 152:
      say("Maybe, why?", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 153:
      say(
        "Andy: Because this drink is horrible",
        windowWidth / 2,
        widowHeight * 0.66 + 100
      );
      break;
    case 154:
      say("Oh sorry", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 155:
      text("*Andy Walks away*", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 156:
      text("End of Shift 6", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 157:
      say("I really do not feel like working", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 158:
      say("I will just take one little shot to improve my spirits", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 159:
      text("*Takes a shot*", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 160:
      say("Maybe one more", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 161:
      text("*Takes a shot*", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 162:
      say("Alrighty let's go", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 163:
      text("Start of Shift 7", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    case 164:
      say("Hey Andy how are you?", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 165:
      say("Andy: Not bad how about you?", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 166:
      say("I am amazing", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 167:
      say("Andy: That's great, now get me a drink so I can be amazing too. How about a whiskey", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 168:
      answer = " whsikey"
      bar();
      if (winCondition === true) {
        state++;
      }
      if (winCondition === false) {
        state = 181;
      }
      break;
    case 169:
      say("Andy: Thanks \n ... \n Are you sure you are good?", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
      case 179:
      say("I am great", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 180:
      say("Andy: Alright", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
    case 181:
      say("Andy: This is not what I ordered", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
      case 182:
      say("Sure it is", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
      case 183:
      say("Andy: Nope it definitely is not", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
      case 184:
      say("Boss: Are you drunk again behind the bar?", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
      case 185:
      say("No definitely not", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
      case 186:
      say("Boss: Take a breathalyzer test then", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
      case 187:
      
      break;
      case 188:
      say("Boss: A BAC of 0.05 is way to high for the start of your shift", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
      case 189:
      say("Boss: You're fired. Go home and sober up", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
      case 190:
      say("Boss: You have messed up way to many drinks to be working here. You are not qualified to be a bartender", windowWidth / 2, widowHeight * 0.66 + 100);
      break;
      case 191:
      text("You continue your job as a bartender. You continue drinking behind the bar and before shifts to keep your spirits up. Unfortunately, you end up forming a dependancy on alcohol. You continue your job and become a functioning alcoholic", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
      case 192:
      text("After you were fired for being drunk behind the bar you have decided to cut alcohol out of your life. With recommendations from your friends and family you decide rehab is a good idea for you. You then find a job away from alcohol", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
      case 193:
      text("After you were fired for being a terible bartender you find a different job. You start as a customer service rep on Monday.", windowWidth / 2, windowHeight * 0.33 + 50);
      break;
    

  }
  console.log(state);
}

function say(s, x, y) {
  //rect(x - 5, y - 20, 700, 300, 5, 5, 5, 5);
  text(s, x, y);
}
function keyPressed() {
  let stateArray = [13, 33];
  if (keyCode == 13) {
    if (!stateArray.includes(state)) {
      state++;
    }
  }
}
