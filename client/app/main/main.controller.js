'use strict';

(function () {

  class MainController {

    constructor($http) {
      this.$http = $http;
      this.menu = [];
      this.map = {};
    }

    $onInit() {
      //this.$http.get('/api/menu').then(response => {
      //  this.menu = response.data;
      //});
      this.menu = [
        {
          'name': 'Pita wrap',
          'items': [
            {'name': 'Pita Giros', 'price': 4},
            {'name': 'Pita Kip', 'price': 4},
            {'name': 'Pita Suzuki', 'price': 4},
            {'name': 'Pita Worst', 'price': 4}
          ]
        },
        {
          'name': 'Bakjes',
          'items': [
            {'name': 'Giros', 'price': 4.8},
            {'name': 'Kip', 'price': 4.8},
            {'name': 'Suzuki', 'price': 4.8},
            {'name': 'Worst', 'price': 4.8}
          ]
        },
        {
          'name': 'Bakjes',
          'items': [
            {'name': 'Giros', 'price': 4.8},
            {'name': 'Kip', 'price': 4.8},
            {'name': 'Suzuki', 'price': 4.8},
            {'name': 'Worst', 'price': 4.8}
          ]
        },
        {
          'name': 'Bakjes',
          'items': [
            {'name': 'Giros', 'price': 4.8},
            {'name': 'Kip', 'price': 4.8},
            {'name': 'Suzuki', 'price': 4.8},
            {'name': 'Worst', 'price': 4.8}
          ]
        },
        {
          'name': 'Bakjes',
          'items': [
            {'name': 'Giros', 'price': 4.8},
            {'name': 'Kip', 'price': 4.8},
            {'name': 'Suzuki', 'price': 4.8},
            {'name': 'Worst', 'price': 4.8}
          ]
        },
        {
          'name': 'Bakjes',
          'items': [
            {'name': 'Giros', 'price': 4.8},
            {'name': 'Kip', 'price': 4.8},
            {'name': 'Suzuki', 'price': 4.8},
            {'name': 'Worst', 'price': 4.8}
          ]
        },
        {
          'name': 'Bakjes',
          'items': [
            {'name': 'Giros', 'price': 4.8},
            {'name': 'Kip', 'price': 4.8},
            {'name': 'Suzuki', 'price': 4.8},
            {'name': 'Worst', 'price': 4.8}
          ]
        },
        {
          'name': 'Bakjes',
          'items': [
            {'name': 'Giros', 'price': 4.8},
            {'name': 'Kip', 'price': 4.8},
            {'name': 'Suzuki', 'price': 4.8},
            {'name': 'Worst', 'price': 4.8}
          ]
        }
      ];
      this.map = {center: {latitude: 52.013797, longitude: 4.281024}, zoom: 8};
    }

    addToOrder() {
    }
  }

  angular.module('cretaApp')
    .component('main', {
      templateUrl: 'app/main/main.html',
      controller: MainController
    });

})();
