(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .component('timer', {
      templateUrl: 'src/templates/timer.html',
      controller: 'GameController',
      controllerAs: 'gameCtrl'
    });
}());