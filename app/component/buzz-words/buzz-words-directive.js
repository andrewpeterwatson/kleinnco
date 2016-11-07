'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('buzzWords', function(){
  return {
    restrict: 'E',
    template: require('./buzz-words.html'),
    scope: {}
  };
});
