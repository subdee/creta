'use strict';

describe('Service: orderService', function () {

  // load the service's module
  beforeEach(module('cretaApp.orderService'));

  // instantiate service
  var orderService;
  beforeEach(inject(function (_orderService_) {
    orderService = _orderService_;
  }));

});
