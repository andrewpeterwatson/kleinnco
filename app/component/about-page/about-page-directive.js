'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('aboutPage', function(){
  return {
    restrict: 'E',
    template: require('./about-page.html'),
    scope: {}
  };
});
