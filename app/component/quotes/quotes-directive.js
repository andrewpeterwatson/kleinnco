'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('quotes', function(){
  return {
    restrict: 'E',
    template: require('./quotes.html'),
    scope: {}
  };
});
