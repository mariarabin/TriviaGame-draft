// Page loads as a start of the game
$(document).ready(function () {
    //start of the game - start timer
    //alert("Let's get R-E-A-D-Y👾!!!");

    //======VARIABLES========
    var questions = [{ q: "what?", c: ["a", "b", "c"], a: "b" }, { q: "When?", c: ["a", "b", "c"], a: "c" }];
    var time = 5;
    var score = 0;
    var incorrect = 0;
    var total = 10;

    $("#start").on('click', function () {
        alert("Starting Game");
        disableStartBtn();
        //displayQs();
        // timerStarts();
        // timeOutStarts();
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
        }
    });


    //$("#reset").on('click', function () {
    //  resetGame();
    //alert("Resetting Game")
    //});


    //$("#submit").on('click', function () {
    //  alert("Checking Score")
    //checkScore();
    //timerStops();
    //timeOutStops();


    //});





    //display




    //=============MAIN PROCESS===================

    //Only one answer is allowed per question



    //display timer



    //$("button").click(function () {
    //  resetGame();
    //});

    //=============FUNCTIONS===================

    //Display Qs
    function disableStartBtn() {
        $("#start").disabled = true;
    }

    function displayQs() {
        alert("Displaying Qs");
        $("#quiz").text(questions.q);
    };


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

    //Reset Game
    function resetGame() {
        alert("Game ends. Resetting💻");
        //setting back to original value

        //display
        $("#timing").text(time);
        $("#cor").text(correct);
        $("#inc").text(incorrect);
        $("#numQ").text(total);
        //alert("Get Ready again🤖!!!");
    };


    //Check Wins - score

    //Check Wronng Answers -- -- reveal answers


    //Reveal all answers
});

//var correctAnswers = ["b", "c"];
var myAnswers = [];

function selectedAnswerFn(selectedObj, correctAnswer) {
    myAnswers[selectedObj.name] = selectedObj.value;
    if (correctAnswer === myAnswers[selectedObj.name]) {
        alert("Got the correct answer! " + myAnswers[selectedObj.name]);
    }
}