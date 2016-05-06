'use strict';

(function () {

  class CheckoutController {

    constructor($http, orderService) {
      this.$http = $http;
      this.orderService = orderService;
    }

    goToPayment() {

    }
  }

  angular.module('cretaApp')
    .component('checkout', {
      templateUrl: 'app/checkout/checkout.html',
      controller: CheckoutController
    });

})();
