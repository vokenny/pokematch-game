(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .service('CardStateService', CardStateService)

  CardStateService.$inject = ['$timeout', 'PokeDataService']
  function CardStateService($timeout, PokeDataService) {
    const cardState = this;
    const pokeData = PokeDataService;

    const MAX_FLIPPED_IN_PLAY_CARDS = 2;
    const FLIP_DELAY = 500;

    const uniqueCards = pokeData.data.map((pkmn) => {
      pkmn.isFaceUp = false;
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
      playingCards[idx].isFaceUp = !playingCards[idx].isFaceUp;

      matchCards();
    };

    function matchCards() {
      let flippedInPlay = playingCards.filter((card) => card.inPlay && card.isFaceUp);

      if (flippedInPlay.length === MAX_FLIPPED_IN_PLAY_CARDS) {
        let pkmnName = flippedInPlay[0].name;

        if (flippedInPlay.every((pkmn) => pkmn.name === pkmnName)) {
          removeFromPlay(flippedInPlay);
        } else {
          $timeout(faceDownCards, FLIP_DELAY, true, flippedInPlay);
        }
      }
    }

    function removeFromPlay(cards) {
      cards.map((card) => card.inPlay = false);
    }

    function faceDownCards(cards) {
      cards.map((card) => card.isFaceUp = false);
    }
  }
}());