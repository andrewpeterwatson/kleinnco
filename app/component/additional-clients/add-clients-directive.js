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

  this.addClients = [
    { name: 'Bevara',
      link: 'http://shopbevara.com/'},
    { name: 'Egencia, an Expedia Inc. Company',
      link: 'https://www.egencia.com/public/us/'},
    { name: 'EMC',	
      link: 'https://www.emc.com/en-us/index.htm'},
    { name: 'Equinix',
      link: 'http://www.equinix.com/'},
    { name: 'Integrated Talent',
      link: 'http://www.integratedtalent.com/#1'},
    { name: 'New Relic',
      link: 'https://newrelic.com/'},
    { name: 'Oakland Adult Career & Education',
      link: 'http://www.ousd.org/oace'},
    { name: 'Pitney Bowes',
      link: 'http://www.pitneybowes.com'},
    { name: 'San Francisco Dept. of Public Health',
      link: 'https://www.sfdph.org/dph/default.asp'},
    { name: 'The Center on School Turnaround',
      link: 'http://centeronschoolturnaround.org/'},
    { name: 'Skytap, Inc.',
      link: 'https://www.skytap.com/'},
    { name: 'Teradata',
      link: 'http://www.teradata.com/?LangType=1033'}
  ]



  this.goHome = function() {
    $location.path('/home')
  }
}
