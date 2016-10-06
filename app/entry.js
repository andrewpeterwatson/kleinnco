'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');

// angular modules
angular.module('kleinnco', [ngRoute])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', {
    template: require('./view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCrtl'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);

// angular services

// angular controllers
require('./view/home/index.js');
require('./component/intro');
require('./component/our-work');
require('./component/network');
