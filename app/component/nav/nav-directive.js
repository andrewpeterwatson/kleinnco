'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('navBar', function(){
  return {
    restrict: 'E',
    template: require('./nav.html'),
    scope: {}
  };
});
