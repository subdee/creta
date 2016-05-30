'use strict';

(function () {

  class ThankyouController {

    constructor($http, $window, $stateParams, $state, orderService) {
      this.$http = $http;
      this.$window = $window;
      this.$stateParams = $stateParams;
      this.$state = $state;
      this.orderService = orderService;
      this.cssClass = 'info';
      this.message = 'Betaling verifiëren...';
    }

    $onInit() {
      if (!this.$stateParams.orderId) {
        this.cssClass = 'danger';
        this.message = 'Er is iets fout met je bestelling. Probeer opnieuw alsjeblieft.'
      }
      if (!this.$stateParams.orderStatusId || this.$stateParams.orderStatusId !== '100') {
        this.cssClass = 'danger';
        this.message = 'Je betaling is misgelukt. Probeer opnieuw!'
      }

      this.$http.get('/api/payments/' + this.$stateParams.orderId).then(response => {
        var req = response.data.request;
        if (req.result === '0' || (req.paymentDetails && req.paymentDetails.state !== 100)) {
          this.cssClass = 'danger';
          this.message = 'Je betaling is misgelukt. Neem contact met ons.';
        } else {
          this.cssClass = 'success';
          this.message = 'Dank je wel voor je bestelling.';
          this.$http.put('/api/payments/' + this.$stateParams.orderId);
        }
      });
    }
  }

  angular.module('cretaApp')
    .component('thankyou', {
      templateUrl: 'app/thankyou/thankyou.html',
      controller: ThankyouController
    });

})();
