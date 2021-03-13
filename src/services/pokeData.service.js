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
      { name: 'Venusaur', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/3.gif' },
      { name: 'Charizard', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/6.gif' },
      { name: 'Blastoise', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/9.gif' },
      { name: 'Meganium', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/154.gif' },
      { name: 'Typhlosion', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/157.gif' },
      { name: 'Feraligatr', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/160.gif' }
    ];

    pokeData.data = pkmn;
  }
}());