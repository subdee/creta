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
      this.deliveryTimeOptions = CheckoutController.getDeliveryTimeOptions();
      this.payment = {
        name: '',
        form: '',
        street: '',
        houseNumber: '',
        city: '',
        postcode: '',
        bank: '',
        amount: 0,
        remarks: '',
        deliveryTime: this.deliveryTimeOptions[0]
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

    static getDeliveryTimeOptions() {
      var options = [{value: 'Zo snel mogelijk'}];
      var currentHour = (new Date()).getHours();
      var currentMinutes = (new Date()).getMinutes();
      for (var hour = currentHour; hour < 21; hour++) {
        for (var minute = 0; minute < 60; minute += 15) {
          if (hour === currentHour) {
            if (minute > currentMinutes + 45 && minute < 60) {
              options.push({value: hour + ':' + minute});
            }
          } else {
            options.push({value: hour + ':' + (minute === 0 ? '00' : minute)});
          }
        }
      }
      return options;
    }
  }

  angular.module('cretaApp')
    .component('checkout', {
      templateUrl: 'app/checkout/checkout.html',
      controller: CheckoutController
    });

})();
