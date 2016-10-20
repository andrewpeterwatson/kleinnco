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
  this.currentGalleryIdx = 2;

  this.currentClientName = clients;
  this.currentClientWork = clients;

  this.cycleGalleryBack = function() {
    galleryService.cycleBackward(this.currentGalleryIdx);
    this.currentGalleryIdx = galleryService.galleryIndex
  }

  this.cycleGallerForward = function() {
    galleryService.cycleForward(this.currentGalleryIdx, clients.length);
    this.currentGalleryIdx = galleryService.galleryIndex;
  }


}
});




// function BrewGalleryController(brewMethodGalleryService, userSelectionsService){
//
//     this.brewMethods = require('json!../../assets/brew-method-data/brew-methods.json');
//     this.galleryIndex = 0;
//     this.currentBrewMethod = userSelectionsService.userSelections.methodId;
//
//     this.stepForward = function() {
//       brewMethodGalleryService.cycleForward(this.galleryIndex, this.brewMethods[userSelectionsService.userSelections.methodId].length);
//       this.galleryIndex = brewMethodGalleryService.galleryIndex;
//     };
//     this.stepBackward = function(){
//       brewMethodGalleryService.cycleBackward(this.galleryIndex);
//       this.galleryIndex = brewMethodGalleryService.galleryIndex;
//     };
//   }
