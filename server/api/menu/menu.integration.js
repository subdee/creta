'use strict';

var app = require('../..');
import request from 'supertest';

var newMenu;

describe('Menu API:', function() {

  describe('GET /api/menus', function() {
    var menus;

    beforeEach(function(done) {
      request(app)
        .get('/api/menus')
        .expect(200)
        .expect('Content-Type', /json/)
        .end((err, res) => {
          if (err) {
            return done(err);
          }
          menus = res.body;
          done();
        });
    });

    it('should respond with JSON array', function() {
      menus.should.be.instanceOf(Array);
    });

  });

});
