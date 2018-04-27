$(document).ready(function() {
$MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));
$MatchGame.generateCardValues();
}

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
    myCards.splice(randomIndex, 1); 
  }
  return roa; 
}
  

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
  $game.empty();
  var color = ['hsl(25,85%,65%)','hsl(55,85%,65%)','hsl(90,85%,65%)','hsl(160,85%,65%',
  'hsl(220,85%,65%)','hsl(265,85%,65%)','hsl(310,85%,65%)','hsl(360,85%,65%)'];
  for (var i = 0; i < cardValues.length;  i++) {
    var $newCard = $('<div class="card col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>')
    $newCard.data('value', cardValues[i]);
    $newCard.data('isFlipped', false);
    $newCard.data('color', [cardValues[i]-1]);
    $game.append($newCard);
   }
}

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

}
