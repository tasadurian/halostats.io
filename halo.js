var HaloAPI = require('haloapi');
var config = require('./config.js');
var h5 = new HaloAPI(config.apiKey);

var character = 'Major Nelson';


module.exports = {
  matches: h5.stats.playerMatches("Frankie")
    .then(function(data) {
      data.Results.forEach(function(match) {
        console.log(match[1].MatchDuration);
        return match[1].MatchDuration;
      });
    })

};
