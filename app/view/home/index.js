'use strict';

require('./home.scss');

const angular = require('angular');
angular.module('kleinnco')
.controller('HomeController', ['$log', '$location', HomeController]);

function HomeController($log, $location){
  $log.debug('init homeCtrl');

}
