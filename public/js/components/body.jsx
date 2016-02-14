var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.jsx');
var $ = require('jquery');

var KillsDeaths = require('./kills-deaths.jsx');
var WinsLoss = require('./wins-loss.jsx');

var Body = React.createClass({
  render: function() {
    return (
        <div className="mdl-grid myContainer">
          <div className="mdl-cell mdl-cell--6-col"><KillsDeaths /></div>
          <div className="mdl-cell mdl-cell--6-col"><WinsLoss /></div>
        </div>
    );
  }
});

module.exports = Body;
