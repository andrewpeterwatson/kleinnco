'use strict';

const angular = require('angular');

angular.module('kleinnco', ['ngAnimate'])
    .controller('OurWorkController', function () {
})
.animation('.slide-animation', function () {
        return {
            addClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    TweenMax.to(element, 0.5, {left: -element.parent().width(), onComplete: done });
                }
                else {
                    done();
                }
            },
            removeClass: function (element, className, done) {
                if (className == 'ng-hide') {
                    // ANIMATION CODE GOES HERE
                }
                else {
                    done();
                }
            }
        };
    });
