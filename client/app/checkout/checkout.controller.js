'use strict';

(function () {

  class CheckoutController {

    constructor($http, orderService) {
      this.$http = $http;
      this.orderService = orderService;
      this.order = this.orderService.getOrder();
      this.deliveryCost = this.orderService.getDeliveryCost();
      this.total = this.orderService.calculateTotal();
    }

    $onInit() {
      this.$http.get('/api/payments').then(response => {
        console.log(response);
      });
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
