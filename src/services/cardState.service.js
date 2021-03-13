(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .service('CardStateService', CardStateService)

  CardStateService.$inject = ['PokeDataService']
  function CardStateService(PokeDataService) {
    const cardState = this;
    const pokeData = PokeDataService;

    const uniqueCards = pokeData.data.map((pkmn) => {
      pkmn.isFlipped = false;
      return pkmn;
    });

    const duplicatedCards = [...uniqueCards, ...uniqueCards];

    shuffle(duplicatedCards);

    function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * i)
        const temp = array[i]
        array[i] = array[j]
        array[j] = temp
      }
    }

    cardState.cards = duplicatedCards;
  }
}());