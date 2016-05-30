'use strict';

angular.module('cretaApp')
  .config(function($stateProvider) {
    $stateProvider
      .state('monitor', {
        url: '/monitor',
        template: '<monitor></monitor>'
      });
  });
