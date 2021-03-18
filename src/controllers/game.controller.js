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

    game.testModeEnabled = false;

    game.start = (level) => {
      gameState.difficulty = level;
      gameState.start();
      timer.setTimer();
      timer.triggerCountdown();
    }

    game.restart = () => {
      gameState.isEndOfRound = false;
      gameState.hasWon = false;
    }

    game.checkEndOfRound = () => gameState.isEndOfRound;

    game.checkHasWon = () => gameState.hasWon;

    game.getTime = () => timer.getTime();

    game.getCards = () => gameState.cards;

    game.flipCard = (idx) => gameState.flipCard(idx);

    game.solve = () => gameState.testWin();
  }
}());