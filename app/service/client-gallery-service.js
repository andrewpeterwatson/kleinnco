'use strict';

const angular = require('angular');

angular.module('kleinnco').factory('galleryService', [galleryService]);

function galleryService(){
  let service = {};
  service.galleryIndex = 2;

  service.cycleForward = function(galleryIndex, galleryLength){
    if(service.galleryIndex === galleryLength - 1) {
      return service.galleryIndex;
    }
    return service.galleryIndex++;
  };
  service.cycleBackward = function(galleryIndex){
    if(galleryIndex === 0) return service.galleryIndex;
    return service.galleryIndex--;
  };
  return service;

}
