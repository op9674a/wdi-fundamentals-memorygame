
console.log("Up and running!");

//array to store cards
var cards = [
{ rank: "queen",
   suit: "hearts",
   cardImage: "images/queen-of-hearts.png"},{
   	rank: "queen",
   	suit: "diamonds",
   	cardImage: "images/queen-of-diamonds.png"},
   	{rank: "king",
   	suit: "hearts",
   	cardImage: "images/king-of-hearts.png"},
   	{rank: "king",
   	suit: "diamonds",
   	cardImage: "images/king-of-diamonds.png"}];
//array for cards in play
var cardsInPlay = [];
//check for match function
var checkForMatch = function() {
	//set attribute to display image from source from card image in cards array
	if (cardsInPlay[0] === cardsInPlay[1]) { 
 	alert("You found a match!");
 	} else { alert("Try again!");
 }};
//flip card function
var flipCard = function (){
//get attribute data-id for cardId
cardId = this.getAttribute("data-id");	
//display rank flipped in console
console.log ("User flipped " + cards[cardId].rank);
cardsInPlay.push (cards[cardId].rank);
//display image flipped in console
console.log("User flipped " + cards[cardId].cardImage);
//dipslay suit flipped in console
console.log("User flipped " + cards[cardId].suit);

this.setAttribute("src", (cards)[cardId].cardImage);

//if cardsInPlay is two then do they match
if (cardsInPlay.length === 2) {
checkForMatch();}};
//createBoard
var createBoard = function() {
	//for loop card array
	 for (var i = 0; i < cards.length; i++) {
//create image element
var cardElement = document.createElement("img");
//set attribute as image source
cardElement.setAttribute("src", "images/back.png");
cardElement.setAttribute("data-id", i);
cardElement.addEventListener("click", flipCard);
document.getElementById("game-board").appendChild(cardElement);}}

//call board
createBoard();



 
 
