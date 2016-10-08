'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('network', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./network.html'),
    scope: {}
  };
});
