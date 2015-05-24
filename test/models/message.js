(function(){
  'use strict';

  // import our User mongoose model
  var should = require('should');
  var mongoose_test = require('../mongoose_test');
  var Message = require('../../models/message');

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

    describe('#QQ()', function () {
      it('Should create a message with an empty string and should return "QQ"', function(done){
        var m = new Message({
          content: ''
        });

        m.QQ().should.equal('QQ');
        done();
      });


      it('Should create a regular message and should return the right content', function(done){
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
