var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.js');
var $ = require('jquery');

var Body = React.createClass({
  render: function() {
    return (
      <div className="content">
        <Kills />
        <Wins />
      </div>
    );
  }
});


var Kills = React.createClass({
  getInitialState: function() {
    return {
      data: []
    };
  },

  componentDidMount: function() {
    $.get('/api/stats/arena', function(data) {
      var totalKills = data.Result.ArenaStats.TotalKills;
      var totalHeadshots = data.Result.ArenaStats.TotalHeadshots;
      if (this.isMounted()) {
        this.setState({
          data: [{
            values: [totalKills, totalHeadshots],
            labels: ['kills','headshots'],
            type: 'pie'
          }]
        });
      }
    }.bind(this));
  },

  render: function () {
    var layout = {
      height: 300,
      width: 300
    };
    return (
      <div>
        <Plot handle="kills" data={this.state.data} layout={layout}></Plot>
      </div>
    );
  }
});

var Wins = React.createClass({
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
          }]
        });
      }
    }.bind(this));
  },

  render: function () {
    var layout = {
      height: 300,
      width: 300
    };
    return (
      <div>
        <Plot handle="wins" data={this.state.data} layout={layout}></Plot>
      </div>
    );
  }
});


ReactDOM.render(
  <Body />,
  document.getElementById('content')
);

module.exports = Body;
