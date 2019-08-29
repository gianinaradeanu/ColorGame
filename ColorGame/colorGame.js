var numSquares = 6;
var colors = [];
var pickedColor;
var square = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeBottuns = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupModeButtons(){
	for(var i=0; i < modeBottuns.length; i++){
		modeBottuns[i].addEventListener("click", function(){
			modeBottuns[0].classList.remove("selected");
			modeBottuns[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares= 3: numSquares=6;	
			reset();
		});
	}
}

function setupSquares(){
	for(var i=0; i < square.length; i++){
		//add click listeners to squares
		square[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if(clickedColor ===pickedColor){
				messageDisplay.textContent = "Correct!";
				resetButton.textContent= "Play Again?"
				changeColors(clickedColor);
				h1.style.backgroundColor=clickedColor;
			}
			else{
				this.style.background = "#232323";
				messageDisplay.textContent = "Try Again!";
			}
		});
	}
}

function reset(){
	//generate all new colors
		colors = generateRandomColors(numSquares);
		//pick a new random color from array
		pickedColor = pickColor();
		//change colorDisplay to match picked color
		colorDisplay.textContent =pickedColor;
		resetButton.textContent = "New Colors";
		messageDisplay.textContent = "";
		//change colors of squares
		for(var i=0; i<square.length; i++){
			if(colors[i]){
				square[i].style.display ="block";
				square[i].style.backgroundColor=colors[i];
			} else{
				square[i].style.display="none";
		 }			
	}
	h1.style.backgroundColor="steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
});

function changeColors(color){
	//loop through all squares
	for(var i=0; i< square.length; i++){
		//change each color to match given color
		square[i].style.backgroundColor=color;
	}	
}

function pickColor(){
	//pick a random number
	var random = Math.floor(Math.random()* colors.length);
	//use that number to acces that color from the colors array and return that color
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr =[];
	//arepet num times
	for (var i=0; i< num; i++){
		//get random color and push into array
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random()*256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random()*256);
	//pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}