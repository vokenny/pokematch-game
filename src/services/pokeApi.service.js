(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .service('PokeApiService', PokeApiService);

  PokeApiService.$inject = ['$http']
  function PokeApiService($http) {
    const pokeApi = this;

  }
}());