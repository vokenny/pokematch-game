(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .service('TimerService', TimerService);

  TimerService.$inject = ['$interval', '$filter', 'GameStateService'];
  function TimerService($interval, $filter, GameStateService) {
    const timer = this;
    const gameState = GameStateService;

    // Milliseconds
    const TIMER_INTERVAL = 250;
    const EASY_DURATION = 60000;
    const MED_DURATION = 45000;
    const HARD_DURATION = 30000;

    var duration = 0;
    var time = 0;
    var timerCountdown = null;

    timer.setTimer = () => {
      switch (gameState.difficulty) {
        case 'hard':
          duration = HARD_DURATION;
          break;
        case 'med':
          duration = MED_DURATION;
          break;
        default: duration = EASY_DURATION;
      };

      time = duration;
    }

    function countdown() {
      time = time - TIMER_INTERVAL;

      if (time <= 0) {
        gameState.isEndOfRound = true;
        $interval.cancel(timerCountdown);
      }
      else if (gameState.hasWon) {
        $interval.cancel(timerCountdown);
      }
    }

    timer.triggerCountdown = () => {
      timerCountdown = $interval(countdown, TIMER_INTERVAL);
    }

    timer.getTime = () => $filter('date')(time, 'mm:ss');

  }
}());