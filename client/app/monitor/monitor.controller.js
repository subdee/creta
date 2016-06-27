'use strict';

(function () {

  class MonitorController {

    constructor($http, $interval) {
      this.$http = $http;
      this.$interval = $interval;
      this.orders = [];
    }

    $onInit() {
      this.loadOrders();
      this.$interval(function () {
        this.loadOrders();
      }.bind(this), 30000);
    }

    printOrder(div) {
      var printContents = document.getElementById(div).innerHTML;
      var popupWin = window.open('', '_blank', 'width=300,height=300');
      popupWin.document.open();
      popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head>' +
        '<body onload="window.print()">' + printContents + '</body></html>');
      popupWin.document.close();
    }

    loadOrders() {
      var self = this;
      this.$http.get('/api/orders').then(orders => {
        self.orders = orders.data;
      });
    }
  }

  angular.module('cretaApp')
    .component('monitor', {
      templateUrl: 'app/monitor/monitor.html',
      controller: MonitorController
    });

})();
