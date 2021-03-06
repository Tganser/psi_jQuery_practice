/*
  Write the code to make clicking on the 'change-highlight' button give a box on the DOM
  the 'highlight' class to turn the box red.
  Each time the 'change-highlight' button is clicked, it should give the next square
  the 'highlight' class.
  Only 1 box should be highlighted at a time.
  You will need to add to the highlightASquare function,
  you are also welcome to write more than the given functions.
*/
var numberOfSquares = 10;
var whichSquare = 0;


$(document).ready(onReady);

//Function that runs when html is fully loaded:
function onReady(){
  //click listener to button:
  $('.change-highlight').on('click', highlightASquare);
  // whichSquare++;
  //call to put starting squares on DOM
  appendSquaresToDom(numberOfSquares);
  //myTimer();
}

var intervalId = setInterval(myTimer, 1000);
var counter = 0;
function myTimer() {
  console.log("in myTimer");
    var d = new Date();
    $(".timer").text(d.toLocaleTimeString());
    counter++;
    $(".timer").append(counter);
}

function highlightASquare(){
  //This variable stores an array of the elements with the 'square' class
  var arrayOfSquares = $('.square');
  var previousSquare = whichSquare-1;
  // whichSquare = 0;
  var onSquare = $(arrayOfSquares[whichSquare]);
  var oldSquare = $(arrayOfSquares[previousSquare]);

  onSquare.addClass("highlight");
  oldSquare.removeClass("highlight");
  console.log("on square: ", arrayOfSquares[whichSquare]);
  whichSquare++;
  console.log(whichSquare);
  console.log(previousSquare);

  if ( whichSquare > numberOfSquares){
    whichSquare = 0;
    previousSquare = -1;
  }
}


//You don't need to change this function:
function appendSquaresToDom(number){
  var squaresToAppend = "";
 //concatenate string of squares
  for(var i = 0; i < number; i++){
    squaresToAppend += "<div class='square'></div>";
  }
  //append string of html
  $(".container").append(squaresToAppend);

}
