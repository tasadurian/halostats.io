var React = require('react');
var ReactDOM = require('react-dom');

var KillsDeaths = require('./kills-deaths.jsx');
var WinsLoss = require('./wins-loss.jsx');

var componentArray = [<KillsDeaths />, <WinsLoss />];
var i = 0;

var Controller = React.createClass({
  getInitialState: function() {
    return {
      component: componentArray[i]
    };
  },

  handleNextComponent: function() {
    this.setState = ({component: componentArray[i++]});
    console.log('clicked!');
  },

  handlePreviousComponent: function() {

  },

  render: function() {
    return (
      <div>
        <button>Previous</button>
          <div>{this.state.component}</div>
        <button onClick={this.handleNextComponent}>Next</button>
      </div>
    );
  }
});

module.exports = Controller;
