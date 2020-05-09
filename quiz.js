// Getting all element........

const start = document.getElementById("start");
const quiz = document.getElementById("quiz");
const question = document.getElementById("question");
const qImg = document.getElementById("qImg");
const choiceA = document.getElementById("A");
const choiceB = document.getElementById("B");
const choiceC = document.getElementById("C");
const progress = document.getElementById("progress");
const scoreDiv = document.getElementById("scoreContainer");

//Creating Questions.............

let questions = [
    {
        question : "What is the Full meaning of HTML?",
        imgSrc : "images/html.png",
        choiceA : "HYPERTEXT MARKUP LANGUAGE",
        choiceB : "HYPERTEXT MAKE LANGUAGE",
        choiceC : "HYPERTOKEN MAKE UP LANGUAGE",
        correct : "A"

    }, {
        question: "WHAT IS HTML?",
        imgSrc : "images/html.png",
        choiceA : "IT IS A PROCESSING LANGUAGE",
        choiceB : "A STANDARD MARKUP LANGUAGE FOR CREATING WEB PAGES",
        choiceC : "A SOFTWARE PROGRAM",
        correct : "B"

    },{
        question: "WHAT IS THE FULL MEANING OF CSS?",
        imgSrc : "images/css.png",
        choiceA : "CASCADING SCORE SHEET",
        choiceB : "CASCADING STYLE SHEET",
        choiceC : "CUSOR STYLE SHEET",
        correct : "B"
    },{
        question: "WHAT YEAR DID CSS CAME TO BE?",
        imgSrc : "images/css.png",
        choiceA : "1990",
        choiceB : "1992",
        choiceC : "1994",
        correct : "C"
    },{
        question: "WHAT IS THE FULL MEANING OF JS AND IN WHAT YEAR WAS IT FORMED?",
        imgSrc : "images/js.png",
        choiceA : "JAVASCRIPT, 1995",
        choiceB : "JAVASCRIPT, 1998",
        choiceC : "JAVASCRIPT,2000",
        correct : "A"
    }
];

//Creating Variables..................

const lastQuestion = questions.length -1;
let runningQuestion = 0;
let score = 0;

//rendering question..............

function renderQuestion(){
    let q = questions[runningQuestion];

    question.innerHTML= "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+q.imgSrc +">";
    choiceA.innerHTML= q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener('click', startQuiz);

//start quiz-----------

function startQuiz(){

    start.style.display ="none";
    renderQuestion();
    quiz.style.display="block";
    renderProgress();
}

//render progress

function renderProgress(){
    for(let qIndex= 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML +="<div class='prog' id="+qIndex +"></div>";
    }
}

// creating checkAnswer-----------

function checkAnswer(answer){
    if (answer == questions[runningQuestion].correct){
        //correct answer
        score ++;
        //change the progress bar green
        answerIsCorrect();
    }else{
        //incorrect answer
        //change the progress bar to red

        answerIsInCorrect();

    }

    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }
    else{
        //end the quiz and show the total score

        scoreRender();
    }
}

//correct answer----------------------------

function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "green";
}

//incorrect answer----------------------------

function answerIsInCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "red";
}

//scoreRender---------------

function scoreRender(){
    scoreDiv.style.display = "block";

    //calculate the score

    const scorePercent = Math.round((100*score)/questions.length); 

    let img = (scorePercent >=80)? "images/5.png":
              (scorePercent >=60)? "images/4.png":
              (scorePercent >=40)? "images/3.png":
              (scorePercent >=20)? "images/2.png":
              "images/1.png";
    scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+scorePercent+"%</p>";
}