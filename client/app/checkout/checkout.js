'use strict';

angular.module('cretaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('checkout', {
        url: '/checkout',
        template: '<checkout></checkout>'
      });
  });
