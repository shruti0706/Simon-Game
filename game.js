// var buttonColours= ["red", "blue", "green", "yellow"];
//
// var gamePattern=[];
// var userClickedPattern = [];
//
// //You'll need a way to keep track of whether if the game has started or not, so you only call nextSequence() on the first keypress.
// var started=false;
// var level=0;
//
// //1. Use jQuery to detect when a keyboard key has been pressed, when that happens for the first time, call nextSequence().
// $(document).keypress(function() {
// if(!started){
//
//   //3. The h1 title starts out saying "Press A Key to Start", when the game has started, change this to say "Level 0".
//   $("level-title").text("Level "+level);
//   nextSequence();
//   started=true;
// }
// });
//
// // Use jQuery to detect when any of the buttons are clicked and trigger a handler function.
// $(".btn").click(function() {
// // Inside the handler, create a new variable called userChosenColour to store the id of the button that got clicked.
// var userChosenColour = $(this).attr("id");
// // Add the contents of the variable userChosenColour created in step 2 to the end of this new userClickedPattern
// userClickedPattern.push(userChosenColour);
//   //console.log(userClickedPattern);
//   playSound(userChosenColour);
//   animatePress(userChosenColour);
//
//   // Call checkAnswer() after a user has clicked and chosen their answer, passing in the index of the last answer in the user's sequence.
//   checkAnswer(userClickedPattern.length-1);
//
// });
//
// function checkAnswer(currentLevel){
//   // Write an if statement inside checkAnswer() to check if the most recent user answer is the same as the game pattern. If so then log "success", otherwise log "wrong".
//  if(gamePattern[currentLevel] === userClickedPattern[currentLevel]){
//   //4. If the user got the most recent answer right in step 3, then check that they have finished their sequence with another if statement.
//   if(userClickedPattern.length===gamePattern.length){
//     setTimeout(function(){
//       nextSequence();
//     }, 1000);
//  }
// } else {
//
//     playSound("wrong");
//
//     $("body").addClass("game-over");
//     $("#level-title").text("Game Over, Press Any Key to Restart");
//
//     setTimeout(function(){
//       $("body").removeClass("game-over");
//     },200);
//
//
//     startOver();
//  }
// }
//
// function nextSequence {
//
// // Once nextSequence() is triggered, reset the userClickedPattern to an empty array ready for the next level.
// userClickedPattern=[];
//
// level++;
// $("#level-title").text("Level "+level);
//
// var randomnumber= Math.floor(Math.random() * 4);
// var randomChosenColour=buttonColours[randomnumber];
// gamePattern.push(randomChosenColour);
//
// $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
// playSound(randomChosenColour);
// }
//
// function playSound(name) {
//   var audio =new Audio("sounds/"+name+".mp3");
//   audio.play();
// }
//
// function animatePress(currentColour) {
// $("#"+currentColour).addClass("pressed");
// setTimeout(function() {
//   $("#"+currentColour).removeClass("pressed");
// },100);
// }
//
// function startOver(){
//   level=0;
//   gamePattern=[];
//   started=false;
// }

var buttonColours = ["red", "blue", "green", "yellow"];

var gamePattern = [];
var userClickedPattern = [];

var started = false;
var level = 0;

$(document).keypress(function() {
  if (!started) {
    $("#level-title").text("Level " + level);
    nextSequence();
    started = true;
  }
});

$(".btn").click(function() {

  var userChosenColour = $(this).attr("id");
  userClickedPattern.push(userChosenColour);

  playSound(userChosenColour);
  animatePress(userChosenColour);

  checkAnswer(userClickedPattern.length-1);
});

function checkAnswer(currentLevel) {

    if (gamePattern[currentLevel] === userClickedPattern[currentLevel]) {
      if (userClickedPattern.length === gamePattern.length){
        setTimeout(function () {
          nextSequence();
        }, 1000);
      }
    } else {
      playSound("wrong");
      $("body").addClass("game-over");
      $("#level-title").text("Game Over, Press Any Key to Restart");

      setTimeout(function () {
        $("body").removeClass("game-over");
      }, 200);

      startOver();
    }
}


function nextSequence() {
  userClickedPattern = [];
  level++;
  $("#level-title").text("Level " + level);
  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColour = buttonColours[randomNumber];
  gamePattern.push(randomChosenColour);

  $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColour);
}

function animatePress(currentColor) {
  $("#" + currentColor).addClass("pressed");
  setTimeout(function () {
    $("#" + currentColor).removeClass("pressed");
  }, 100);
}

function playSound(name) {
  var audio = new Audio("sounds/" + name + ".mp3");
  audio.play();
}

function startOver() {
  level = 0;
  gamePattern = [];
  started = false;
}
