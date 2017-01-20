'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('ourWork', function(){
  return {
    restrict: 'E',
    template: require('./_our-work.html'),
    controller: ['$location', OurWorkController],
    controllerAs: 'ourWorkCtrl',
    bindToController: true,
    scope: {}
  };

  function OurWorkController($location) {
    const clientInfo = require('json!../../data/our-work-data.json');

    this.addClients = function() {
      $location.path('/additional-clients')
    }

    this.currentClient = clientInfo;

    this.currentIndex = 0;
    this.showWorkGallery = false;




    this.setCurrentSlideIndex = function (index) {
      this.currentIndex = index;
    };
    this.isCurrentSlideIndex = function (index) {
      return this.currentIndex === index;
    };

    this.showWorkGalleryAt = function(idx) {
      this.currentIndex = idx;
      this.showWorkGallery = true;
    };

    this.closeGallery = function() {
      this.showWorkGallery = false;
    }


    this.prevSlide = function() {
      this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.currentClient.length - 1;
    };
    this.nextSlide = function() {
      this.currentIndex = (this.currentIndex < this.currentClient.length - 1) ? ++this.currentIndex : 0;
    };
  }
}

);
