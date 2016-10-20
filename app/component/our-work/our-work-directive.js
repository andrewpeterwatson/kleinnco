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

  const clients = require('json!../../data/our-work-data.json')
  this.currentGalleryIdx = 0;
  this.currentClientName = clients;
  this.currentClientWork = clients;
  this.Microsoft = true;
  this.Amazon = false
  this.Netflix = false


  this.cycleGalleryBack = function() {
    this[this.currentClientName[this.currentGalleryIdx].name] = false;
    galleryService.cycleBackward(this.currentGalleryIdx);
    this.currentGalleryIdx = galleryService.galleryIndex
    this[this.currentClientName[this.currentGalleryIdx].name] = true;
  }

  this.cycleGallerForward = function() {
    this[this.currentClientName[this.currentGalleryIdx].name] = false;
    galleryService.cycleForward(this.currentGalleryIdx, clients.length);
    this.currentGalleryIdx = galleryService.galleryIndex;
    this[this.currentClientName[this.currentGalleryIdx].name] = true
  }

this.testToggle = function(){
  this.currentPosition = !this.currentPosition;
}



}
});
