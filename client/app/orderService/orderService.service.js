'use strict';

angular.module('cretaApp')
  .service('orderService', function () {
    var order = [];
    var total = 0;

    return {
      addToOrder: function (item) {
        for (var i = 0; i < order.length; i++) {
          if (Object.is(order[i].item, item) === true) {
            return this.increaseQty(i);
          }
        }
        order.push({qty: 1, item: item});
        total += item.price;
        return order;
      },

      increaseQty: function (idx) {
        total += order[idx].item.price;
        if (order[idx].qty < 10) {
          order[idx].qty++;
        }
        return order;
      },

      decreaseQty: function (idx) {
        total -= order[idx].item.price;
        if (order[idx].qty > 1) {
          order[idx].qty--;
        } else {
          order.splice(idx, 1);
        }
        return order;
      },

      getTotal: function () {
        return total + this.getDeliveryCost();
      },

      getOrder: function () {
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
