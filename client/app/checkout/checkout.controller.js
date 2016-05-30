'use strict';

(function () {

  class CheckoutController {

    constructor($http, $window, orderService) {
      this.$http = $http;
      this.$window = $window;
      this.orderService = orderService;
      this.order = this.orderService.getOrder();
      this.deliveryCost = this.orderService.getDeliveryCost();
      this.total = this.orderService.calculateTotal();
      this.banks = [];
      this.payment = {
        name: '',
        form: '',
        street: '',
        houseNumber: '',
        city: '',
        postcode: '',
        bank: '',
        amount: 0,
        remarks: ''
      };
    }

    $onInit() {
      var self = this;
      this.$http.get('/api/payments').then(response => {
        self.banks = response;
      });
    }

    goToPayment(isValid) {
      if (isValid) {
        this.payment.amount = this.total;
        this.$http.post('/api/payments', this.payment).then(response => {
          if (response.data.request.result === '1') {
            this.$window.location.href = response.data.transaction.paymentURL;
          }
        });
      }
    }
  }

  angular.module('cretaApp')
    .component('checkout', {
      templateUrl: 'app/checkout/checkout.html',
      controller: CheckoutController
    })
    .component('thankyou', {
      templateUrl: 'app/checkout/thankyou.html',
      controller: CheckoutController
    });

})();
