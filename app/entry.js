'use strict';

// webpack assets
require('!!file?name=[name].[ext]!./html/index.html');
require('./scss/base.scss');

// npm modules
const angular = require('angular');
const ngRoute = require('angular-route');
const ngAnimate = require('angular-animate');


// angular modules
angular.module('kleinnco', [ngRoute, ngAnimate])
.config(['$routeProvider', function($routeProvider){
  $routeProvider
  .when('/home', {
    template: require('./view/home/home.html'),
    controller: 'HomeController',
    controllerAs: 'homeCtrl'
  })
  .when('/about', {
    template: require('./view/about-page/about-page.html'),
    controller: 'AboutPageController',
    controllerAs: 'aboutCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);

// angular services
// angular controllers
require('./view/home/index.js');
require('./view/about-page/index.js');
require('./component/nav');
require('./component/intro');
require('./component/our-work');
require('./component/network');
require('./component/info');
require('./component/contact');
require('./component/buzz-words');
require('./component/quotes');
require('./component/about-page');
require('./component/footer');
