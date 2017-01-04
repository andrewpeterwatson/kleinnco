'use strict';

require('./home.scss');

const angular = require('angular');
angular.module('kleinnco')
.controller('HomeController', ['$log', '$location', HomeController]);

function HomeController($log, $location){
  this.showNav = false;


  this.closeNav = function() {
    this.showNav = false;
  };

  this.aboutGo = function() {
    console.log('hit about');
      $location.path('/about')
  }

}
