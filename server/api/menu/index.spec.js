'use strict';

var proxyquire = require('proxyquire').noPreserveCache();

var menuCtrlStub = {
  index: 'menuCtrl.index',
  show: 'menuCtrl.show',
  create: 'menuCtrl.create',
  update: 'menuCtrl.update',
  destroy: 'menuCtrl.destroy'
};

var routerStub = {
  get: sinon.spy(),
  put: sinon.spy(),
  patch: sinon.spy(),
  post: sinon.spy(),
  delete: sinon.spy()
};

// require the index with our stubbed out modules
var menuIndex = proxyquire('./index.js', {
  'express': {
    Router: function() {
      return routerStub;
    }
  },
  './menu.controller': menuCtrlStub
});

describe('Menu API Router:', function() {

  it('should return an express router instance', function() {
    menuIndex.should.equal(routerStub);
  });

  describe('GET /api/menus', function() {

    it('should route to menu.controller.index', function() {
      routerStub.get
        .withArgs('/', 'menuCtrl.index')
        .should.have.been.calledOnce;
    });

  });

});
