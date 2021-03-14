(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .service('CardStateService', CardStateService)

  CardStateService.$inject = ['PokeDataService']
  function CardStateService(PokeDataService) {
    const cardState = this;
    const pokeData = PokeDataService;

    const MAX_FLIPPED_IN_PLAY_CARDS = 2;

    const uniqueCards = pokeData.data.map((pkmn) => {
      pkmn.isFlipped = false;
      pkmn.inPlay = true;
      return pkmn;
    });

    // Deep cloning uniqueCards; this method is only safe for JSON-safe objects
    const playingCards = [...uniqueCards, ...JSON.parse(JSON.stringify(uniqueCards))];

    shuffle(playingCards);

    function shuffle(arr) {
      // Fisher-Yates shuffle
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    cardState.cards = playingCards;

    cardState.flipCard = (idx) => {
      playingCards[idx].isFlipped = !playingCards[idx].isFlipped;

      let flippedInPlay = playingCards.filter((card) => card.inPlay && card.isFlipped);

      // If two cards are flipped, check if they match
      // If they match, set inPlay to false
      // If they don't match, set isFlipped to false
      if (flippedInPlay.length === MAX_FLIPPED_IN_PLAY_CARDS) {
        let pkmnName = flippedInPlay[0].name;

        if (flippedInPlay.every((pkmn) => pkmn.name === pkmnName)) {
          flippedInPlay.map((card) => card.inPlay = false);
        } else {
          flippedInPlay.map((card) => card.isFlipped = !card.isFlipped);
        }
      }
    };
  }
}());