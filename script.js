
//list of questions


var questions = [{
    question: "What is the official language of China?",
    choices: ["Mandarian", "Cantonese", "English"],
    correctAnswer: 0
}, {
    question: "How tall is the Empire State Building?",
    choices: ["1399 Feet", "1454 Feet", "1776 Feet"],
    correctAnswer: 0
}, {
    question: "What is the busiest train station in the world?",
    choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord"],
    correctAnswer: 0
}, {
    question: "What is the longest river?",
    choices: ["Nile", "Amazon", "Mississippi"],
    correctAnswer: 0
}, {
    question: "What is the busiest tube station in the London?",
    choices: ["Waterloo", "Baker Street", "Kings Cross"],
    correctAnswer: 0
}];

var currentQuestion = 0;
var correctAnswers = 0;
var quizOver = false;

function displayCurrentQuestion() {

    console.log("In display current Question");

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".question");
    var choiceList = $(document).find(".answer");
    var numChoices = questions[currentQuestion].choices.length;

    
    $(questionClass).text(question);
    $(choiceList).find(".answer").remove();
 

    var choice;
    for (i = 0; i < numChoices; i++) {
        choice = questions[currentQuestion].choices[i];
 $('<div class="answer"><input type="radio" value=' + i + ' name="dynradio" />' + choice + '</div>').appendTo(choiceList);
    }
}




$(document).ready(function() {
	displayCurrentQuestion();
    $(this).find(".question").hide;

    // On clicking submit, display the next question
    $(this).find(".submitButton").on("click", function () {
        if (!quizOver) {

            value = $("input[type='radio']:checked").val();

            if (value == undefined) {
                $(document).find(".submitButton").text("Please select an answer");
                // $(document).find(".question").show();
            } else {
                
                $(document).find(".question");

                if (value == questions[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }

                currentQuestion++;
                if (currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
               
                    
                    $(document).find(".submitButton").text("Play Again?");
                    quizOver = true;
                }
            }
        } else { // quiz is over and clicked the next button (which now displays 'Play Again?'
            quizOver = false;
            $(document).find(".submitButton").text("Next Question");
            resetQuiz();
            displayCurrentQuestion();
            
        }
    });

});











































//display current question



 //        $("#answer").on("click", function (e) {
	// $("#answer").css("background", "orange")	
	// $('#answer:not(#' + this.id + ')').css("background-color", "gray");
	// // e.stopPropagation();

 //    })


// this changes the background of the answer when you hover over it

// $(".answer").on("click", function (a) {
// 	$("#answer").css("color", "#6bcfe3");
// 	$('#answer:not(#' + this.id + ')').css("color", "black");
// 	a.stopPropagation();
// })


// This changes the background color of the selected answer to orange

// $("#answer").on("click", function (e) {
// 	$("#answer").css("background", "orange")
// 	$('#answer:not(#' + this.id + ')').css("background-color", "gray");
// 	// e.stopPropagation();
// })





