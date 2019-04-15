// Page loads as a start of the game
$(document).ready(function () {
    //start of the game - start timer
    //alert("Let's get R-E-A-D-Y👾!!!");

    //======VARIABLES========
    var questions = [{ q: "what?", c: ["a", "b", "c"], a: "b" }, { q: "When?", c: ["a", "b", "c"], a: "c" }];
    var time = 30;
    var score = 0;
    var incorrect = 0;
    var total = 10;

    var selectedObj = [];

    $("#submit").hide();

    $("#submit").on('click', function () {
        alert("Checking Answers...");
        selectedAnswerFn();
    });


    $("#start").on('click', function () {
        alert("Starting Game");
        timerStarts();
        timeOutStarts();
        //displayQs();
        var anskey = 0;
        for (var qIndex = 0; qIndex < questions.length; qIndex++) {
            var myQuestion = questions[qIndex];
            var qText = myQuestion.q;
            var qValues = myQuestion.c;
            var qAnswer = myQuestion.a;
            $("#quiz").append(qText);
            for (var i = 0; i < qValues.length; i++) {
                var questionsList = "<input type='radio' onchange='selectedAnswerFn(this, \"" + qAnswer + "\" )' name=" + anskey + " value=" + qValues[i] + ">&nbsp;" + qValues[i];
                var htmlQ = "<BR/>" + questionsList + "<BR/>";
                $("#quiz").append(htmlQ);
            }
            anskey = anskey + 1;
        };
        $("#start").hide();
        $("#submit").show();
    });







    //=============MAIN PROCESS===================

    //Only one answer is allowed per question







    //=============FUNCTIONS===================

    //display timer
    function timeOutStarts() {
        setTimeout(function () { alert("Timeout"); }, 60000);

    };
    function count() {
        //time = 30;
        time--;
        if (time === 0) {
            alert("Time is up");
            clearInterval(intervalId);
        };
        $("#timing").text(time);
    };


    function timerStarts() {
        intervalId = setInterval(count, 1000);

    };








    //End Game - End Timer
    //Check Wronng Answers -- -- reveal answers


    //Reveal all answers
});

//Check Wins - score
//var correctAnswers = ["b", "c"];
var myAnswers = [];
score = 0;

function selectedAnswerFn(selectedObj, correctAnswer) {
    myAnswers[selectedObj.name] = selectedObj.value;
    if (correctAnswer === myAnswers[selectedObj.name]) {
        //alert("Got the correct answer! " + myAnswers[selectedObj.name]);
        score++;
        $("#cor").text(score);
    }
};



