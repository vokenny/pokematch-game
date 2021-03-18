(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .controller('GameController', GameController);

  GameController.$inject = ['GameStateService', 'TimerService']
  function GameController(GameStateService, TimerService) {
    const game = this;
    const gameState = GameStateService;
    const timer = TimerService;

    game.setDifficulty = (level) => {
      gameState.difficulty = level;
      timer.setTimer();
      timer.triggerCountdown();
    };

    game.checkEndOfRound = () => gameState.isEndOfRound;

    game.checkHasWon = () => gameState.hasWon;

    game.getTime = () => timer.getTime();

    game.getCards = () => gameState.cards;

    game.flipCard = (idx) => gameState.flipCard(idx);

    game.restart = () => {
      gameState.shuffleAndResetCards();
      gameState.isEndOfRound = false;
    };
  }
}());