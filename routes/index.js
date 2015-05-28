var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.render('index');
});

router.get('/chat', function (req, res) {
  res.render('chat');
});

router.get('/tryout', function (req, res) {
  res.render('tryout');
});

router.get('/interface', function (req, res) {
  res.render('interface');
});

module.exports = router;
