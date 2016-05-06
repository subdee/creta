'use strict';

(function () {

  class MainController {

    constructor($http, NgMap, orderService) {
      this.$http = $http;
      this.ngMap = NgMap;
      this.menu = [];
      this.orderService = orderService;
      this.order = orderService.getOrder();
      this.total = orderService.getTotal();
      this.canOrder = orderService.canOrder();
    }

    $onInit() {
      this.$http.get('/api/menus').then(response => {
        this.menu = response.data;
      });
    }

    addToOrder(item) {
      this.order = this.orderService.addToOrder(item);
      this.total = this.orderService.getTotal();
      this.canOrder = this.orderService.canOrder();
    }

    increaseQty(idx) {
      this.order = this.orderService.increaseQty(idx);
      this.total = this.orderService.getTotal();
      this.canOrder = this.orderService.canOrder();
    }

    decreaseQty(idx) {
      this.order = this.orderService.decreaseQty(idx);
      this.total = this.orderService.getTotal();
      this.canOrder = this.orderService.canOrder();
    }

    getOrder() {
      return this.orderService.getOrder();
    }

    getDeliveryCost() {
      return this.orderService.getDeliveryCost();
    }
  }

  angular.module('cretaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

})();
