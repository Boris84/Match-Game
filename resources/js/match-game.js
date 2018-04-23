var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function() {
var myCards = [];
for (var i = 1; i < 9; i++){
  myCards.push(i);
  myCards.push(i); 
}
var roa = [];
while (myCards.length > 0) {
var randomIndex = Math.floor(Math.random() * myCards.length);
  // var removePush = myCards.splice(randomIndex, 1)[0]; 
  roa.push(myCards[randomIndex]);
}
  roa.splice(myCards[randomIndex]);
}
/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};
