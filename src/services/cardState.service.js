(function () {
  'use strict';

  angular
    .module('PokeMatchApp')
    .service('CardStateService', CardStateService)

  function CardStateService() {
    const cardState = this;
  }
}());