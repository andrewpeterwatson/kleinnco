'use strict';

require('./home.scss');

const angular = require('angular');
angular.module('kleinnco')
.controller('HomeController', ['$log', '$location', '$anchorScroll', HomeController]);

function HomeController($log, $location, $anchorScroll){
    this.showNav = false;


    this.closeNav = function() {
      this.showNav = false;
    };

    this.aboutGo = function() {
        $location.path('/about')
    }

    this.scrollTo = function(id) {
      console.log('scroll in');
        $location.hash(id);
        $anchorScroll();
     }
}
