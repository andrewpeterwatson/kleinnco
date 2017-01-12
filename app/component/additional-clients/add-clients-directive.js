'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('additionalClients', function(){
  return {
    template: require('./_add-clients.html'),
    scope: {},
    controller: ['$location', AdditionalClientsController],
    controllerAs: 'addCtrl',
    bindToController: true
  };
});

function AdditionalClientsController($location) {
  this.goHome = function() {
    $location.path('/home')
  }
}
