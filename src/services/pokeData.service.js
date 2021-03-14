(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .service('PokeDataService', PokeDataService)
    .constant('PokeApiSpriteBasePath', 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions');

  PokeDataService.$inject = ['PokeApiSpriteBasePath']
  function PokeDataService(PokeApiSpriteBasePath) {
    const pokeData = this;

    const pkmn = [
      { name: 'Bulbasaur', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/1.gif' },
      { name: 'Charmander', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/4.gif' },
      { name: 'Squirtle', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/7.gif' },
      { name: 'Chikorita', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/152.gif' },
      { name: 'Cyndaquil', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/155.gif' },
      { name: 'Totodile', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/158.gif' },
      { name: 'Treecko', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/252.gif' },
      { name: 'Torchic', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/255.gif' },
      { name: 'Mudkip', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/258.gif' }
    ];

    pokeData.data = pkmn;
  }
}());