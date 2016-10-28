'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('ourWork', function(){
  return {
    restrict: 'E',
    template: require('./our-work.html'),
    controller: ['galleryService', OurWorkController],
    controllerAs: 'ourWorkCtrl',
    scope: {}
  };

  function OurWorkController(galleryService){

    const clients = require('json!../../data/our-work-data.json');
    // this.currentGalleryIdx = 0;
    this.currentClient = clients;
    // this.Microsoft = true;
    // this.Amazon = false;
    // this.Netflix = false;

    this.currentIndex = 0;


    this.setCurrentSlideIndex = function (index) {
      this.currentIndex = index;
    };
    this.isCurrentSlideIndex = function (index) {
      return this.currentIndex === index;
    };


    this.prevSlide = function () {
      this.currentIndex = (this.currentIndex < this.currentClient.length - 1) ? ++this.currentIndex : 0;
    };
    this.nextSlide = function () {
      console.log('next clicked');
      this.currentIndex = (this.currentIndex > 0) ? --this.currentIndex : this.currentClient.length - 1;
    };

    // this.cycleGalleryBack = function() {
    //   this[this.currentClient[this.currentGalleryIdx].name] = false;
    //   galleryService.cycleBackward(this.currentGalleryIdx, clients.length);
    //   this.currentGalleryIdx = galleryService.galleryIndex;
    //   this[this.currentClient[this.currentGalleryIdx].name] = true;
    // };
    //
    // this.cycleGallerForward = function() {
    //   this[this.currentClient[this.currentGalleryIdx].name] = false;
    //   galleryService.cycleForward(this.currentGalleryIdx, clients.length);
    //   this.currentGalleryIdx = galleryService.galleryIndex;
    //   this[this.currentClient[this.currentGalleryIdx].name] = true;
    // };





  }
});
