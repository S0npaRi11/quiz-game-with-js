function populate(){
    if(quiz.isEnded()) {
        showScores()
    }
    else{
        //show Qoestion
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;

        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i<choices.length; i++){
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn"+ i, choices[i]);

        }
        showProgress();
    }
};

function guess(id,guess ) {
    var button = document.getElementById(id);
    button.onclick = function (){
        quiz.guess (guess);
        populate();
    }
};

function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
    var gameOverhtml = "<h1> Result </h1>";
    gameOverhtml += "<h2 id='score'> Your score :" + quiz.score +"</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverhtml;
};

var questions = [
    new Question("Which one is not an object oriented programming language?", ["Java", "C#", "C++", "C"], "C"),
    new Question("Which language is used foe styling web pages?", ["HTML", "Jquery", "CSS", "XML"], "CSS"),
    new Question("There are __________ main components of object oriented programming.", ["1", "6", "2", "4"], "4"),
    new Question("Which language is used for web apps?", ["PHP", "Python", "Javascript", "All"], "All"),
    new Question("MVC is a ___________ .", ["Language", "Library", "Framework", "All"], "Framework"),
];

var quiz = new Quiz(questions);

populate();