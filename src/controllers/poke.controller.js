(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .controller('PokeController', PokeController);

  PokeController.$inject = ['PokeDataService']
  function PokeController(PokeDataService) {
    const poke = this;
    const pokeData = PokeDataService;

    poke.sprites = pokeData.data;
  }
}());