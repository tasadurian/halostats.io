var express = require('express');
var router = express.Router();
var halo = require('../halo.js');

/* GET home page. */

router.get('/', function(req, res) {
  var matches = halo.matches;
  console.log(matches);
  res.render('index', {
    title: 'Express',
    matches: matches
  });
});

module.exports = router;
