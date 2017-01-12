'use strict';

require('./_add-client-page.scss');

const angular = require('angular');
angular.module('kleinnco')
.controller('AdditionalClientsController', ['$log', '$location', '$anchorScroll', AdditionalClientsController]);

function AdditionalClientsController(){}
