'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('contact', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./contact.html'),
    scope: {}
  };
});
