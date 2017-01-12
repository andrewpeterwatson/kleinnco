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
    controllerAs: 'homeCtrl'
  })
  .when('/about', {
    template: require('./view/about-page/about-page.html'),
    controller: 'AboutPageController',
    controllerAs: 'aboutCtrl'
  })
  .when('/additional-clients', {
    template: require('./view/additional-client-page.html'),
    controller: 'AdditionalClientsController',
    controllerAs: 'addCtrl'
  })
  .otherwise({
    redirectTo: '/home'
  });
}]);

// angular services
// angular controllers
require('./view/home/index.js');
require('./view/about-page/index.js');
require('./view/additional-client-page/index.js');
require('./component/intro');
require('./component/our-work');
require('./component/info');
require('./component/contact');
require('./component/buzz-words');
require('./component/quotes');
require('./component/about-page');
// require('./component/footer');
