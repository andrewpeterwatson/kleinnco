'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('ourWork', function(){
  return {
    restrict: 'E',
    template: require('./our-work.html'),
    controller: [OurWorkController],
    controllerAs: 'ourWorkCtrl',
    scope: {}
  };

  function OurWorkController() {

    const clients = require('json!../../data/our-work-data.json');
    this.currentClient = clients;

    this.currentIndex = 0;


    this.setCurrentSlideIndex = function (index) {
      this.currentIndex = index;
    };
    this.isCurrentSlideIndex = function (index) {
      return this.currentIndex === index;
    };


    this.prevSlide = function() {
      this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.currentClient.length - 1;
    };
    this.nextSlide = function() {
      this.currentIndex = (this.currentIndex < this.currentClient.length - 1) ? ++this.currentIndex : 0;
    };
  }
})
