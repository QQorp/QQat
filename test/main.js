(function(){
  'use strict';

  var should = require("should");

  describe('Basics', function() {
    it('1 + 1 should equal 2', function(done){
      (1 + 1).should.equal(2);
      done();
    });
  });
})();
