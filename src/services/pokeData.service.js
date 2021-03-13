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
      { name: 'Ivysaur', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/2.gif' },
      { name: 'Venusaur', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/3.gif' },
      { name: 'Charmander', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/4.gif' },
      { name: 'Charmeleon', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/5.gif' },
      { name: 'Charizard', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/6.gif' },
      { name: 'Squirtle', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/7.gif' },
      { name: 'Wartortle', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/8.gif' },
      { name: 'Blastoise', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/9.gif' },
      { name: 'Chikorita', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/152.gif' },
      { name: 'Bayleef', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/153.gif' },
      { name: 'Meganium', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/154.gif' },
      { name: 'Cyndaquil', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/155.gif' },
      { name: 'Quilava', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/156.gif' },
      { name: 'Typhlosion', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/157.gif' },
      { name: 'Totodile', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/158.gif' },
      { name: 'Croconaw', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/159.gif' },
      { name: 'Feraligatr', path: PokeApiSpriteBasePath + '/generation-v/black-white/animated/160.gif' }
    ];

    pokeData.data = pkmn;
  }
}());