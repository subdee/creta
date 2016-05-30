'use strict';

angular.module('cretaApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('thankyou', {
      url: '/thankyou?orderId&orderStatusId',
      template: '<thankyou></thankyou>'
    });
  });
