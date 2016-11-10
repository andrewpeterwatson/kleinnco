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
    console.log('hit about');
    $location.path('/about');
  }
}
