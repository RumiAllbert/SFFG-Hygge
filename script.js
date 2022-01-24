
// var data;
let front = true;
var data = [
  {
    "text": "\
    <strong>Fun:</strong> Do you think you will get married one day?<br>\
    <strong>Life:</strong> What is one of your biggest regrets?<br>\
    <strong>Cultivation:</strong> If you were to name one of your biggest attachments, what would it be?"
  },
  {
    "text": "\
    <strong>Fun:</strong> If you could set one rule that all generation Z have to follow, what would it be?<br>\
    <strong>Life:</strong> What is your favorite movie?<br>\
    <strong>Cultivation:</strong> Is there anything you truly don’t understand in ZFL and always wanted to ask?"
  },
  {
    "text": "\
    <strong>Fun:</strong> If you could have one superpower what would it be?<br>\
    <strong>Life:</strong> Is 20 too young to get married?<br>\
    <strong>Cultivation:</strong> Are there any habits you know you need to give up, but you consciously continue doing?"
  }
]
console.log(data);

// Getting the front and the back texts
const texts = document.querySelectorAll(".text");

// Getting the body
const body = document.getElementById("body");

// Getting the buttons
const button = document.querySelectorAll(".new-question");

const blockFront = document.querySelector(".block__front");
const blockBack = document.querySelector(".block__back");

const textFront = texts[0];
const textBack = texts[1];

const buttonFront = button[0];
const buttonBack = button[1];


// An arrow function used to get a question randomly
const displayQuestion = () =>{

	// Generates a random number between 0
	// and the length of the dataset
	let index = Math.floor(Math.random()*data.length);

	// Stores the question present at the randomly generated index
	let questions = data[index].text;

	if(front){
		// Changing the front if back-side is displayed
		textFront.innerHTML = questions;
	}else{
		// Changing the back if front-side is displayed
		textBack.innerHTML = questions;
	}
	front = !front;
}

displayQuestion()

// fetch("/questions.json")
// 	.then(function(response) {
// 		return response.json();
// 	}) // Getting the raw JSON data
// 	.then(function(data) {

// 		// Storing the questions internally upon
// 		// successful completion of request
// 		this.data = data;
// 		console.log(data);

// 		// Displaying the quote When the Webpage loads
// 		displayQuestion()
// });


// Adding an onclick listener for the button
function newQuestion(){
	
	// Rotating the Quote Box
	blockBack.classList.toggle('rotateB');
	blockFront.classList.toggle('rotateF');

	// Displaying a new question when the webpage loads
	displayQuestion();
}
