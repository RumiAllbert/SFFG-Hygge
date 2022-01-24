
// var data;
let front = true;
let data = [{text: '<li>What do you consider to be the most critical attachment in other practitioners?<div><li>Have you ever intervened in a conflict between practitioners? How did it go?<br><li>What is the biggest difference between YPs and veteran practitioners?' }]

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
const displayQuote = () =>{

	// Generates a random number between 0
	// and the length of the dataset
	let index = Math.floor(Math.random()*data.length);

	// Stores the question present at the randomly generated index
	let quote = data[index].text;

	if(front){
		// Changing the front if back-side is displayed
		textFront.innerHTML = quote;
	}else{
		// Changing the back if front-side is displayed
		textBack.innerHTML = quote;
	}
	
	front = !front;

}

displayQuote()
// // Fetching the quotes from the type.fit API using promises
// fetch("https://type.fit/api/quotes")
// 	.then(function(response) {
// 		return response.json();
// 	}) // Getting the raw JSON data
// 	.then(function(data) {

// 		// Storing the quotes internally upon
// 		// successful completion of request
// 		this.data = data;

// 		// Displaying the quote When the Webpage loads
// 		displayQuote()
// });


// Adding an onclick listener for the button
function newQuote(){
	
	// Rotating the Quote Box
	blockBack.classList.toggle('rotateB');
	blockFront.classList.toggle('rotateF');

	// Displaying a new quote when the webpage loads
	displayQuote();
}
