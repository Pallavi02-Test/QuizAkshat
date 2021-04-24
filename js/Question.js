class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("");
    // this.input1.placeholder = "Enter Your Name Here...." 
    this.input1.attribute("placeholder", "Enter Your Name Here...." )
    this.input2 = createInput("");
    this.input2.attribute("placeholder", "Enter Correct Option No.." )
    this.button = createButton('Submit');
    this.question = createElement('h3');
    this.option1 = createElement('h4');
    this.option2 = createElement('h4');
    this.option3 = createElement('h4');
    this.option4 = createElement('h4');
    this.text = createElement('h1');
    this.button2 = createButton('Next');
  }

  hide() {
    this.title.hide();
    this.input1.hide();
    this.button.hide();
    this.input2.hide();
  }

  display() {
    this.title.html("My Quiz Game");
    this.title.position(350, 0);

    this.question.html("Question:- Who invented Electric Cars? ");
    this.question.position(150, 80);
    this.option1.html("1: Jeff Bezoz ");
    this.option1.position(150, 100);
    this.option2.html("2: Elon Musk");
    this.option2.position(150, 120);
    this.option3.html("3: Bill Gates ");
    this.option3.position(150, 140);
    this.option4.html("4: Warren Buffet");
    this.option4.position(150, 160);

    this.input1.position(150, 230);
    this.input2.position(350, 230);
    this.button.position(290, 300);

    this.button.mousePressed(() => {
      this.title.hide();
      this.input1.hide();
      this.input2.hide();
      this.button.hide();
      this.question.hide();
      this.option1.hide();
      this.option2.hide();
      this.option3.hide();
      this.option4.hide();

      contestant.name = this.input1.value();
      contestant.answer = this.input2.value();
      contestantCount += 1;
      contestant.index = contestantCount;
      contestant.update();
      contestant.updateCount(contestantCount);

      
      this.button2.position(150, 160);

      fill("White");
      //textSize(35);

      this.text.html("Correct Answer is Elon Musk");
      this.text.position(200, 200);
    });

    this.button2.mousePressed(() => {
      this.button2.hide();
      this.text.hide();
      fill("White");
      textSize(35);
      text("Question:- Who is Eminem? ", 150, 80);
    });

  }
}
