'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('navBar', function(){
  return {
    restrict: 'E',
    template: require('./nav.html'),
    controller: ['$location', NavController],
    controllerAs: 'navCtrl',
    bindToController: true,
    scope: {}
  };
});


function NavController($location) {
  this.goAbout = function() {
    $location.path('/about');
  }
  this.goHome = function() {
    $location.path('/home');
  }
}
