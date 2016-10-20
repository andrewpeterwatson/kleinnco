'use strict';

const angular = require('angular');
angular.module('kleinnco')
.directive('intro', function(){
  return {
    restrict: 'E',
    replace: true,
    template: require('./intro.html'),
    controller: IntroController,
    controllerAs: 'introCtrl',
    scope: {}
  };

  function IntroController(){

    // $(function() {
    //   var controller = new ScrollMagic.Controller();
    //   var tween = TweenMax.to('.intro-image', 0.5, {
    //     scale: (0.5)
    //   });
    //   var containerScene = new ScrollMagic.Scene({
    //     triggerElement: '.image-container',
    //     duration: 500
    //   })
    // .setPin('.image-block')
    // .setTween(tween)
    // .addIndicators()
    // .addTo(controller);
    // });

  }
});
