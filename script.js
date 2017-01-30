
//list of questions


var questions = [{
    question: "What is the official language of China?",
    choices: ["Mandarian", "Cantonese", "English", "Japanese"],
    correctAnswer: 0
}, {
    question: "How tall is the Empire State Building?",
    choices: ["1399 Feet", "1454 Feet", "408 Feet", "1776 Feet"],
    correctAnswer: 1
}, {
    question: "What is the busiest train station in the world?",
    choices: ["Grand Central, NY", "Shibuya, Tokyo", "Beijing Central, Chine", "Gard du Nord, Paris"],
    correctAnswer: 1
}, {
    question: "What is the longest river?",
    choices: ["Nile", "Amazon", "Mississippi", "Yangtze"],
    correctAnswer: 0
}, {
    question: "What is the busiest tube station in the London?",
    choices: ["Waterloo", "Baker Street", "Kings Cross", "Victoria"],
    correctAnswer: 0
}];

//this changes the background of the answer when you hover over it

$(".answer").on("mouseover", function (a) {
	$(this).css("background-color", "#6bcfe3");
	$('.answer:not(#' + this.id + ')').css("background-color", "gray");
	a.stopPropagation();
})


//This changes the background color of the selected answer to orange

$(".answer").on("click", function (e) {
	$(this).css("background", "orange")
	$('.answer:not(#' + this.id + ')').css("background-color", "gray");
	// e.stopPropagation();
})