'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('info', function(){
  return {
    restrict: 'E',
    template: require('./info.html'),
    scope: {},
    controller: ['$location', InfoController],
    controllerAs: 'infoCtrl',
    bindToController: true
  };
});

function InfoController($location){
  this.meetUs = function(){
    console.log('hit meetUs');
    $location.path('/about');
  };
}
