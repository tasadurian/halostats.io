var HaloAPI = require('haloapi');
var config = require('./config.js');
var h5 = new HaloAPI(config.apiKey);

var character = 'Major Nelson';


module.exports = {
  matches: h5.profile.emblemImage("Frankie").then(function(url) {
    console.log(url);
    return url;
  })


};
