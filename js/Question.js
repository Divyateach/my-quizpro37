class Question {

    constructor() {
      this.input1 = createInput("Enter your Name");
      this.input2=createInput("Enter your option")
      this.title = createElement('h2')
      this.button=createButton("Submit")
      this.question=createElement("h3")
      this.option=createElement("h4")
    }
    hide(){
      this.title.hide();
      this.input2.hide();
      this.input1.hide();
      this.button.hide();
    }
  
    display(){
      //var title = createElement('h2')
      this.title.html("My Quiz Game");
      this.title.position(130,30);
      //var question=createElement("h3")
      this.question.html("Question: What starts and ends with letter'E',but has only one letter?")
        this.question.position(130,150);
        //var option=createElement("h4")
        this.option.html("1: Everyone 2: Envelope 3: Estimate 4: Example")
        this.option.position(140,200)
      this.input1.position(130, 260);
      this.input2.position(250, 260);
        this.button.position(250,380);

      this.button.mousePressed(()=>{
         this.title.hide();
         this.button.hide();
         this.input1.hide();
         this.input2.hide();
        contestant.name = this.input1.value();
        contestant.answer=this.input2.value()
        contestantCount+=1;
        contestant.index = contestantCount;
        
        contestant.update();
        contestant.updateCount(contestantCount);
        
      });
  
    }
  }