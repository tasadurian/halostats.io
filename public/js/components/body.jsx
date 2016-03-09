var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.jsx');
var $ = require('jquery');

var ArenaProfile = require('./arena-profile.jsx');
var KillsDeaths = require('./kills-deaths.jsx');
var WinsLoss = require('./wins-loss.jsx');
var TopWeapons = require('./top-weapons.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <div>
        <div className="mdl-grid myContainer">
          <div className="mdl-cell mdl-cell--6-col"><ArenaProfile /></div>
          <div className="mdl-cell mdl-cell--6-col"><KillsDeaths /></div>
        </div>
        <div className="mdl-grid myContainer">
          <div className="mdl-cell mdl-cell--6-col"><TopWeapons /></div>
          <div className="mdl-cell mdl-cell--6-col"></div>
        </div>
      </div>
    );
  }
});

module.exports = Body;
