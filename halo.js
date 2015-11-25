var HaloAPI = require('haloapi');
var config = require('./config.js');
var h5 = new HaloAPI(config.apiKey);

var character = 'Major Nelson';


module.exports = {
  weapons: function() {
    h5.metadata.weapons()
      .then(function(weapons) {
        return weapons;
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};
