(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .component('card', {
      templateUrl: 'src/templates/card.html',
      controller: 'GameController',
      controllerAs: 'gameCtrl'
    });
}());