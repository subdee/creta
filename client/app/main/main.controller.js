'use strict';

(function () {

  class MainController {

    constructor($http, NgMap) {
      this.$http = $http;
      this.ngMap = NgMap;
      this.menu = [];
      this.order = [];
      this.canOrder = false;
      this.deliveryCost = true;
    }

    $onInit() {
      this.$http.get('/api/menus').then(response => {
        this.menu = response.data;
      });
    }

    addToOrder(item) {
      for (var i = 0; i < this.order.length; i++) {
        if (Object.is(this.order[i].item, item) === true) {
          this.increaseQty(i);
          return;
        }
      }
      this.order.push({qty: 1, item: item});
    }

    increaseQty(idx) {
      if (this.order[idx].qty < 10) {
        this.order[idx].qty++;
      }
    }

    decreaseQty(idx) {
      if (this.order[idx].qty > 1) {
        this.order[idx].qty--;
      } else {
        this.order.splice(idx, 1);
      }
    }

    getTotal() {
      var total = 0;
      for (var i = 0; i < this.order.length; i++) {
          total += this.order[i].qty * this.order[i].item.price;
      }
      if (total < 17) {
        this.deliveryCost = true;
        total = total + 1.5;
      } else {
        this.deliveryCost = false;
      }
      this.canOrder = total > 12;
      return total;
    }
  }

  angular.module('cretaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

})();
