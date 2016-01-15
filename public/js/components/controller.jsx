var React = require('react');
var ReactDOM = require('react-dom');

var KillsDeaths = require('./kills-deaths.jsx');
var WinsLoss = require('./wins-loss.jsx');

var componentArray = [<KillsDeaths />, <WinsLoss />];

var Controller = React.createClass({
  getInitialState: function() {
    return {
      component: componentArray[1]
    };
  },
  render: function() {
    return (
      <div>{this.state.component}</div>
    );
  }
});

module.exports = Controller;
