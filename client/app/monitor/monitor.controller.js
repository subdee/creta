'use strict';

(function () {

  class MonitorController {

    constructor($http, socket) {
      this.$http = $http;
      this.socket = socket;
      this.orders = [];
    }

    $onInit() {
      var self = this;
      this.$http.get('/api/orders').then(orders => {
        self.orders = orders.data;
        self.socket.syncUpdates('Order', self.orders);
      });
    }

    printOrder(div) {
      var printContents = document.getElementById(div).innerHTML;
      var popupWin = window.open('', '_blank', 'width=300,height=300');
      popupWin.document.open();
      popupWin.document.write('<html><head><link rel="stylesheet" type="text/css" href="style.css" /></head>' +
        '<body onload="window.print()">' + printContents + '</body></html>');
      popupWin.document.close();
    }
  }

  angular.module('cretaApp')
    .component('monitor', {
      templateUrl: 'app/monitor/monitor.html',
      controller: MonitorController
    });

})();
