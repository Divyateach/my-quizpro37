var canvas, backgroundImage;

var gameState = 0;
var contestantCount;
var allcontestants;
var database;

var question, contestant, quiz;


function setup(){
  canvas = createCanvas(800,500);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  if(contestantCount === 4){
    quiz.update(1);
  }
  if(gameState === 1){
    clear();
    quiz.play();
  }
}
