(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .controller('CardController', CardController);

  CardController.$inject = ['CardStateService']
  function CardController(CardStateService) {
    const card = this;
    const cardState = CardStateService;

    card.getCards = () => {
      console.log(cardState.cards);
      return cardState.cards;
    }
  }
}());