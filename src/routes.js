(function () {

  'use strict'

  angular
    .module('PokeMatchApp')
    .config(RoutesConfig);

  RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
  function RoutesConfig($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('start', {
        url: '/',
        templateUrl: 'src/templates/start.html'
      })
      .state('play', {
        url: '/',
        templateUrl: 'src/templates/game.html',
        controller: 'GameController as gameCtrl'
      })
  }

})();