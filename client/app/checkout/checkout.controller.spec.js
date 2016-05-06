'use strict';

describe('Component: mainComponent', function () {

  // load the controller's module
  beforeEach(module('cretaApp'));
  beforeEach(module('stateMock'));

  var scope;
  var mainComponent;
  var state;
  var $httpBackend;

  // Initialize the controller and a mock scope
  beforeEach(inject(function (_$httpBackend_,
                              $http,
                              $componentController,
                              $rootScope,
                              $state) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('/api/things')
      .respond(['HTML5 Boilerplate', 'AngularJS', 'Karma', 'Express']);

    scope = $rootScope.$new();
    state = $state;
    mainComponent = $componentController('checkout', {
      $http: $http,
      $scope: scope
    });
  }));
});
