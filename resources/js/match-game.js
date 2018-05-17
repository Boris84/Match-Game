$(document).ready(function() {
  MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));
});

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
  $game.data('flippedCards', []);
  $game.data('pairsFound', 0);
  var color = ['hsl(25,85%,65%)','hsl(55,85%,65%)','hsl(90,85%,65%)','hsl(160,85%,65%)',
  'hsl(220,85%,65%)','hsl(265,85%,65%)','hsl(310,85%,65%)','hsl(360,85%,65%)'];
  for (var i = 0; i < cardValues.length;  i++) {
  var $newCard = $('<div class="card col-xs-3 col-sm-3 col-md-3 col-lg-3"> </div>');
      $newCard.data('value', cardValues[i]);
      $newCard.data('isFlipped', false);
      $newCard.data('color', color[cardValues[i]-1]);
      $game.append($newCard);
} 
$('.card').on('click', function() {
        MatchGame.flipCard($(this), $('#game'));
  
      });

   }

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
  
  if ($card.data('isFlipped') === true) {

    return;
  }
  
  var fCards = $game.data('flippedCards');
  $card.css('background-color', $card.data('color'));
  $card.text($card.data('value'));
  $card.data('isFlipped', true);
  $game.data('flippedCards').push($card);
     
  

  if (fCards.length === 2) {

    if (fCards[0].data('value') === fCards[1].data('value')) {
      
      fCards[0].css('background-color', 'rgb(153, 153, 153)');
      fCards[0].css('color', 'rgb(204, 204, 204)');
      fCards[1].css('background-color', 'rgb(153, 153, 153)');
      fCards[1].css('color', 'rgb(204, 204, 204)');
      
      var matches = $game.data('pairsFound');
      $game.data('pairsFound', matches +1); 


    if ($game.data('pairsFound') === 8) { 
       alert('YOU WIN!!');
     }
    } else {
       
      setTimeout(function() {
      fCards[0].css('background-color', 'rgba(32, 64, 86)');
      fCards[0].text('');
      fCards[0].data('isFlipped', false);
      fCards[1].css('background-color', 'rgba(32, 64, 86)');
      fCards[1].text('');
      fCards[1].data('isFlipped', false);

    }, 270);
   }
    $game.data('flippedCards', []);
  }

}