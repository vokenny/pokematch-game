(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .service('TimerService', TimerService);

  TimerService.$inject = ['$interval', '$filter', 'GameStateService'];
  function TimerService($interval, $filter, GameStateService) {
    const timer = this;
    const gameState = GameStateService

    var duration = null;
    var time = null;
    var timerCountdown = null;

    timer.setTimer = () => {
      switch (gameState.difficulty) {
        case 'hard':
          duration = 30000;
          break;
        case 'med':
          duration = 45000;
          break;
        default: duration = 60000;
      };

      time = duration;
    }

    function countdown() {
      time = time - 1000;

      if (time <= 0) { $interval.cancel(timerCountdown) }
    }

    timer.triggerCountdown = () => timerCountdown = $interval(countdown, 1000);

    timer.getTime = () => $filter('date')(time, 'mm:ss');

  }
}());