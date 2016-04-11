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
      this.order = [
        {qty: 1, item: item}
      ];
    }
  }

  angular.module('cretaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

})();
