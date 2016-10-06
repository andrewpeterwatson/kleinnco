'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('ourWork', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./our-work.html'),
    scope: {}
  };
});
