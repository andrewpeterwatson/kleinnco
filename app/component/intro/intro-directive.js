'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('intro', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./intro.html'),
    controller: IntroController,
    controllerAs: 'introCtrl',
    scope: {}
  };

  function IntroController(){


  }
});
