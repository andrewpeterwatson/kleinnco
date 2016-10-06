'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('intro', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./intro.html'),
    scope: {}
  };
});
