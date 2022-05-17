const buildDeck = () => {
  var suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
  var values = ["A", 2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];
  var deck = [];

  suits.forEach(function (suit) {
    values.forEach(function (value) {
      deck.push(`${value} of ${suit}`);
    });
  });
  return deck
};

const shuffle = () => {
  let deck = buildDeck();
  var unshuffledCards = deck.length - 1; //start with all cards unshuffled

  function shuffleCard(deck, unshuffledCards) {
    if (unshuffledCards === 0) {
      //once all cards have been shuffled, the function is complete
      return deck;
    }
    var randomIndex = Math.floor(
      Math.random() * (deck.length - 1 - unshuffledCards) + unshuffledCards
    ); //calculate a random index within the deck length and based on the number of unshuffled cards
    var cardToShuffle = deck[randomIndex]; //find the card at that index
    deck.splice(randomIndex, 1); //remove the card from its current position...
    deck.splice(deck.length - 1 - unshuffledCards, 0, cardToShuffle); //and place it at the end of the unshuffled cards
    return shuffleCard(deck, unshuffledCards - 1); //now re-run the function with one less shuffled card to choose from
  }

  shuffleCard(deck, unshuffledCards); //run inner function to shuffle cards one at a time
  return deck
};