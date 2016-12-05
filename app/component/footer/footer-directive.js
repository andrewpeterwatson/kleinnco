'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('allFooter', function(){
  return {
    restrict: 'E',
    template: require('./footer.html'),
    scope: {},
    controller: ['$location', FooterControler],
    controllerAs: 'footerCtrl',
    bindToController: true
  };
});

function FooterControler($location){
  this.meetUs = function(){
    console.log('hit meetUs');
    $location.path('/about');
  };
}
