// shuffles (randomizes an array)
// e.g. myArray.shuffle()
Array.prototype.shuffle = function() {
  var currentIndex = this.length, temporaryValue, randomIndex;
  while (0 !== currentIndex) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;
    temporaryValue = this[currentIndex];
    this[currentIndex] = this[randomIndex];
    this[randomIndex] = temporaryValue;
  }
  return this;
}

// returns a deck of cards
// e.g. getDeck()
window.getDeck = function() {
  var ranks = [2, 3, 4, 5, 6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];
  var suits = ['clubs', 'diamonds', 'hearts', 'spades'];
  var cards = [];
  ranks.forEach(function(rank, index) {
    suits.forEach(function(suit, index) {
      cards.push(rank + "_of_" + suit);
    });
  });
  return cards;
}

$(function() {
  $(".deal").on("click", function(event) {
    event.preventDefault()
    var deck = getDeck().shuffle()
    var card1 = deck[0]
    var card2 = deck[1]
    var card3 = deck[2]
    var card4 = deck[3]
    var card5 = deck[4]
    var im1 = "http://golearntocode.com/images/cards/" + card1 + ".png"
    var im2 = "http://golearntocode.com/images/cards/" + card2 + ".png"
    var im3 = "http://golearntocode.com/images/cards/" + card3 + ".png"
    var im4 = "http://golearntocode.com/images/cards/" + card4 + ".png"
    var im5 = "http://golearntocode.com/images/cards/" + card5 + ".png"
    $("#c1").attr("src", im1)
    $("#c2").attr("src", im2)
    $("#c3").attr("src", im3)
    $("#c4").attr("src", im4)
    $("#c5").attr("src", im5)
  })
})
