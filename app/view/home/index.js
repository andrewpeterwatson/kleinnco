'use strict';

require('./home.scss');

const angular = require('angular');
angular.module('kleinnco')
.controller('HomeController', ['$log', '$location', HomeController]);

function HomeController(){
  this.missionHit = function(){
    console.log('mission hit');
  };
}
