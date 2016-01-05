var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.jsx');
var $ = require('jquery');

var WinsLoss = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },

  componentDidMount: function() {
    $.get('/api/stats/arena', function(data) {
      var totalWins = data.Result.ArenaStats.TotalGamesWon;
      var totalLosses = data.Result.ArenaStats.TotalGamesLost;
      if (this.isMounted()) {
        this.setState({
          data: [{
            values: [totalWins, totalLosses],
            labels: ['Total Wins','Total Losses'],
            type: 'pie'
          }],
          layout: {
            height: 300,
            width: 300
          }
        });
      }
    }.bind(this));
  },

  render: function () {
    return (
      <div>
        <Plot handle="wins"
              data={this.state.data}
              layout={this.state.layout}>
        </Plot>
      </div>
    );
  }
});

module.exports = WinsLoss;
