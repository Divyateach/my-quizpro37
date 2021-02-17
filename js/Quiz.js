class Quiz {
    constructor(){
      this.ans=createElement("h4")
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState:state
      });
    }
  
    async start(){
      if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
          contestantCount = contestantCountRef.val();
          contestant.getCount();
        }
        question = new Question()
        question.display();
      }
    }
    play(){
      question.hide()
      background("yellow");
     // this.title.hide();
     // this.input1.hide();
      //this.input2.hide();
      //this.button.hide();
      
      
      Contestant.getPlayerInfo();
      this.ans.html("Correct answer Green")
      this.ans.position(200,250)
      if(allcontestants!=undefined){
        var display_position=330;
        
        for(var plr in allcontestants){
          var correctans="2";
          if (correctans===allcontestants[plr].answer) {
            fill("green")}
          else{
          fill("red") }
          display_position+=30;
          textSize(20)
          text(allcontestants[plr].name+":"+allcontestants[plr].answer,250,display_position)
        }
       
      }
    
  
    
  }
  }