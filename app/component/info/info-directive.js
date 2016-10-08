'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('info', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./info.html'),
    scope: {}
  };
});
