var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.js');
var $ = require('jquery');

var KillsDeaths = require('./kills-deaths.jsx');
var WinsLoss = require('./wins-loss.jsx');

var Body = React.createClass({
  render: function() {
    return (
      <div className="content">
        <KillsDeaths />
        <WinsLoss />
      </div>
    );
  }
});

module.exports = Body;
