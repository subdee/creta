'use strict';

(function () {

  class MainController {

    constructor($http, NgMap) {
      this.$http = $http;
      this.ngMap = NgMap;
      this.menu = [];
      this.order = [];
    }

    $onInit() {
      this.$http.get('/api/menus').then(response => {
        this.menu = response.data;
      });
    }

    addToOrder(item) {
      for (var i = 0; i < this.order.length; i++) {
        if (Object.is(this.order[i].item, item) === true) {
          this.order[i].qty++;
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
      }
    }
  }

  angular.module('cretaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

})();
