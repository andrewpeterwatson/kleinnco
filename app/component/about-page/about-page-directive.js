'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('aboutPage', function(){
  return {
    template: require('./about-page.html'),
    scope: {},
    controller: ['$location', AboutPageController],
    controllerAs: 'aboutCtrl',
    bindToController: true
  };
});

function AboutPageController($location) {
  this.goHome = function() {
    $location.path('/home')
  }
}
