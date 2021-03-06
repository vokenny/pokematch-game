(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .service('GameStateService', GameStateService);

  GameStateService.$inject = ['$timeout', 'PokeDataService'];
  function GameStateService($timeout, PokeDataService) {
    const gameState = this;
    const pokeData = PokeDataService;

    gameState.difficulty = 'easy';
    gameState.isEndOfRound = false;
    gameState.hasWon = false;

    const MAX_FLIPPED_IN_PLAY_CARDS = 2;
    const HIDE_DELAY = 150;

    const uniqueCards = pokeData.data.map((pkmn) => {
      pkmn.isFaceUp = false;
      pkmn.inPlay = true;
      return pkmn;
    });

    // Deep cloning uniqueCards; this method is only safe for JSON-safe objects
    const playingCards = [...uniqueCards, ...JSON.parse(JSON.stringify(uniqueCards))];

    gameState.start = () => {
      shuffleAndResetCards();
      gameState.isEndOfRound = false;
    }

    function shuffle(arr) {
      // Fisher-Yates shuffle
      for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }

    function shuffleAndResetCards() {
      shuffle(playingCards);

      playingCards.forEach((card) => {
        card.isFaceUp = false;
        card.inPlay = true;
      });
    };

    gameState.cards = playingCards;

    gameState.flipCard = (idx) => {
      playingCards[idx].isFaceUp = !playingCards[idx].isFaceUp;

      matchCards();
      checkWinState();
    };

    function matchCards() {
      let flippedInPlay = playingCards.filter((card) => card.inPlay && card.isFaceUp);

      if (flippedInPlay.length === MAX_FLIPPED_IN_PLAY_CARDS) {
        let pkmnName = flippedInPlay[0].name;

        if (flippedInPlay.every((pkmn) => pkmn.name === pkmnName)) {
          removeFromPlay(flippedInPlay);
        } else {
          $timeout(faceDownCards, HIDE_DELAY, true, flippedInPlay);
        }
      }
    }

    function removeFromPlay(cards) {
      cards.map((card) => card.inPlay = false);
    }

    function faceDownCards(cards) {
      cards.map((card) => card.isFaceUp = false);
    }

    function checkWinState() {
      if (playingCards.every(_ => _.isFaceUp && !_.inPlay)) {
        gameState.isEndOfRound = true;
        gameState.hasWon = true;
      }
    }

    gameState.testWin = () => {
      playingCards.forEach((card) => {
        card.isFaceUp = true;
        card.inPlay = false;
      });

      checkWinState();
    }
  }
}());