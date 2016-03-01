var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.jsx');
var $ = require('jquery');

var Header = require('./header.jsx');

var ArenaProfile = React.createClass({
  getInitialState: function() {
    return {
      totalKills: '',
      totalDeaths: '',
      totalAssists: '',
      totalHeadshots: '',
      totalWins: '',
      totalLosses: ''
    };
  },

  componentDidMount: function() {
    $.get('/api/stats/arena', function(data) {
      var haloData = this.haloData = data;
      var totalKills = data.Result.ArenaStats.TotalKills;
      var totalDeaths = data.Result.ArenaStats.TotalDeaths;
      var totalAssists = data.Result.ArenaStats.TotalAssists;
      var totalHeadshots = data.Result.ArenaStats.TotalHeadshots;
      var totalWins = data.Result.ArenaStats.TotalGamesWon;
      var totalLosses = data.Result.ArenaStats.TotalGamesLost;
      if (this.isMounted()) {
        this.setState({
          totalKills: totalKills,
          totalDeaths: totalDeaths,
          totalAssists: totalAssists,
          totalHeadshots: totalHeadshots,
          totalWins: totalWins,
          totalLosses: totalLosses
        });
      }
    }.bind(this));
  },


  render: function() {
    return (
      <div>
        <p>Arena Stats</p>
        <p>Total Arena Kills: {this.state.totalKills}</p>
        <p>Total Arena Deaths: {this.state.totalDeaths}</p>
        <p>Total Arena Assists: {this.state.totalAssists}</p>
        <p>Total Arena Headshots: {this.state.totalHeadshots}</p>
        <p>Total Arena Wins: {this.state.totalWins}</p>
        <p>Total Arena Losses: {this.state.totalLosses}</p>
      </div>
    );
  }
});

module.exports = ArenaProfile;
