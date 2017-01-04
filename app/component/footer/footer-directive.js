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

function FooterControler(){
}
