'use strict';

angular.module('cretaApp')
  .service('orderService', function (localStorageService) {
    var order = localStorageService.get('order') ? localStorageService.get('order') : [];
    var total = 0;

    return {
      addToOrder: function (item) {
        for (var i = 0; i < order.length; i++) {
          if (order[i].item.name === item.name) {
            return this.increaseQty(i);
          }
        }
        order.push({qty: 1, item: item});
        total += item.price;
        return this.getOrder();
      },

      increaseQty: function (idx) {
        total += order[idx].item.price;
        if (order[idx].qty < 10) {
          order[idx].qty++;
        }
        return this.getOrder();
      },

      decreaseQty: function (idx) {
        total -= order[idx].item.price;
        if (order[idx].qty > 1) {
          order[idx].qty--;
        } else {
          order.splice(idx, 1);
        }
        return this.getOrder();
      },

      getTotal: function () {
        return total + this.getDeliveryCost();
      },

      calculateTotal: function () {
        total = 0;
        for (var i = 0; i < order.length; i++) {
          total += order[i].qty * order[i].item.price;
        }
        return this.getTotal();
      },

      getOrder: function () {
        localStorageService.set('order', order);
        return order;
      },

      getDeliveryCost: function () {
        return total < 17 ? 1.5 : 0;
      },

      canOrder: function () {
        return total > 12;
      }
    }
  });
