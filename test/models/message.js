(function(){
  'use strict';

  // import our User mongoose model
  var should = require('should');
  var mongoose_test = require('../mongoose_test');
  var Message = require('../../models/message');

  describe('Models: Message', function () {

    describe('#create()', function () {
      it('should create a new Message', function (done) {
        // Create a User object to pass to User.create()
        var m = {
          content: 'Hello world !'
        };

        Message.create(m, function (err, createdMessage) {
          // Confirm that that an error does not exist
          should.not.exist(err);
          // verify that the returned user is what we expect
          createdMessage.content.should.equal('Hello world !');
          // Call done to tell mocha that we are done with this test
          done();
        });
      });
    });

    describe('#save()', function () {
      it('Should create a new Message and save it', function(done){
        var m = new Message({
          content: 'Hello world !'
        });

        m.save(function (err) {
          should.not.exist(err);
          done();
        });
      });
    });

    describe('#count()', function () {
      it('Create one element, count({}) should return one element', function(done){
        var m = new Message({
          content: 'Hello world !'
        });

        m.save(function (err) {
          should.not.exist(err);

          Message.count({}, function (err, count) {
            should.not.exist(err);
            count.should.equal(1);
            done();
          });
        });
      });
    });

    describe('#QQ()', function () {
      it('Creating an empty message, should return "QQ"', function(done){
        var m = new Message({
          content: null
        });

        m.QQ().should.equal('QQ');
        done();
      });


      it('Creating a regular message, should return the right content', function(done){
        var fakeContent = 'Lel';

        var m = new Message({
          content: fakeContent
        });

        m.QQ().should.equal(fakeContent);
        done();
      });
    });

  });

})();
