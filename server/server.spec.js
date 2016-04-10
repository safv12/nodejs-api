var request = require('./supertest.js');

describe('server', function() {
  'use strict';

  it('should run server', function(done) {
    request.get('/').expect(200, function(err) {
      if (err) return done(err);
      done();
    });
  });

});
