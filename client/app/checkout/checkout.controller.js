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
      this.closed = false;
      this.deliveryTimeOptions = CheckoutController.getDeliveryTimeOptions();
      this.payment = {
        items: this.order,
        name: '',
        form: '',
        street: '',
        houseNumber: '',
        city: '',
        postcode: '',
        bank: '',
        amount: 0,
        remarks: '',
        deliveryTime: this.deliveryTimeOptions[0].value
      };
      this.orderService.clearOrder();
    }

    $onInit() {
      var self = this;
      var currentHour = (new Date()).getHours();
      if (currentHour >= 21) {
        this.closed = true;
        return;
      }
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
      var currentHour = (new Date()).getHours();
      var currentMinutes = (new Date()).getMinutes();
      var options = [{value: 'Zo snel mogelijk'}];
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
