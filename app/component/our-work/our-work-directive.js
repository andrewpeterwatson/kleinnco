'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('ourWork', function(){
  return {
    restrict: 'E',
    template: require('./our-work.html'),
    controller: [OurWorkController],
    controllerAs: 'ourWorkCtrl',
    bindToController: true,
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
}
)
// .animation('.slide-animation', function () {
//     return {
//         beforeAddClass: function (element, className, done) {
//             var scope = element.scope();
//
//             if (className == 'ng-hide') {
//                 var finishPoint = element.parent().width();
//                 if(scope.direction !== 'right') {
//                     finishPoint = -finishPoint;
//                 }
//                 TweenMax.to(element, 0.5, {left: finishPoint, onComplete: done });
//             }
//             else {
//                 done();
//             }
//         },
//         removeClass: function (element, className, done) {
//             var scope = element.scope();
//
//             if (className == 'ng-hide') {
//                 element.removeClass('ng-hide');
//
//                 var startPoint = element.parent().width();
//                 if(scope.direction === 'right') {
//                     startPoint = -startPoint;
//                 }
//
//                 TweenMax.fromTo(element, 0.5, { left: startPoint }, {left: 0, onComplete: done });
//             }
//             else {
//                 done();
//             }
//         }
//     };
// });
