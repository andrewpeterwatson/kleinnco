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

  this.scrollTo = function (id) {
   $anchorScroll(id);
 }



// for this to work, you need to adjust where it is looking to scroll... i.e $('html, body')
// $(function() {
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
//       var target = $(this.hash);
//       target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
//       if (target.length) {
//         $('html, body, main').animate({
//           scrollTop: target.offset().top
//         }, 500);
//         return false;
//       }
//     }
//   });
// });

}
