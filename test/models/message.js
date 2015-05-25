(function(){
  'use strict';

  // import our User mongoose model
  var should = require('should');
  var mongoose_test = require('../mongoose_test');
  var Message = require('../../models/message');
  var User = require('../../models/user');

  describe('Models: Message', function () {

    describe('#create()', function () {
      var testContent = 'Hello world !';

      it('Should create a new Message', function (done) {
        var m = {
          content: testContent
        };

        Message.create(m, function (err, createdMessage) {
          should.not.exist(err);
          createdMessage.content.should.equal(testContent);
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
      it('Should create one message and count() should return one element', function(done){
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

    describe('#getSenderName()', function () {
      it('Should create a message with a sender and return his very name', function(done){
        var sender_name = 'Kevbac <3';

        var u = new User({
          username: sender_name,
          login: null,
          password: null
        });

        var m = new Message({
          content: null,
          sender: u
        });

        m.getSenderName().should.equal(sender_name);
        done();
      });
    });

  });

})();
