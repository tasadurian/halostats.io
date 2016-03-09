var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.jsx');
var $ = require('jquery');

var Header = require('./header.jsx');

var ArenaProfile = React.createClass({
  getInitialState: function() {
    return {
      totalXp: '',
      totalKills: '',
      kdRatio: '',
      totalDeaths: '',
      totalMeleeKills: '',
      totalAssists: '',
      totalHeadshots: '',
      totalWins: '',
      totalLosses: ''
    };
  },

  componentDidMount: function() {
    $.get('/api/stats/arena', function(data) {
      var haloData = this.haloData = data;
      var totalXp = data.Result.Xp;
      var totalKills = data.Result.ArenaStats.TotalKills;
      var totalDeaths = data.Result.ArenaStats.TotalDeaths;
      var kdRatio = (Number(totalKills/totalDeaths).toFixed(2));
      var totalMeleeKills = data.Result.ArenaStats.TotalMeleeKills;
      var totalAssists = data.Result.ArenaStats.TotalAssists;
      var totalHeadshots = data.Result.ArenaStats.TotalHeadshots;
      var totalWins = data.Result.ArenaStats.TotalGamesWon;
      var totalLosses = data.Result.ArenaStats.TotalGamesLost;
      if (this.isMounted()) {
        this.setState({
          totalXp: totalXp,
          totalKills: totalKills,
          totalDeaths: totalDeaths,
          kdRatio: kdRatio,
          totalMeleeKills: totalMeleeKills,
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
      <div className="demo-card-wide mdl-card mdl-shadow--2dp">
        <div className="mdl-card__title">
          <h2 className="mdl-card__title-text">Arena Stats</h2>
        </div>
        <div className="mdl-card__supporting-text">
          <p>Total Arena XP: {this.state.totalXp}</p>
          <p>Total Arena Kills: {this.state.totalKills}</p>
          <p>Total Arena Deaths: {this.state.totalDeaths}</p>
          <p>K/D Ratio: {this.state.kdRatio}</p>
          <p>Total Arena Melee Kills: {this.state.totalMeleeKills}</p>
          <p>Total Arena Assists: {this.state.totalAssists}</p>
          <p>Total Arena Headshots: {this.state.totalHeadshots}</p>
          <p>Total Arena Wins: {this.state.totalWins}</p>
          <p>Total Arena Losses: {this.state.totalLosses}</p>
        </div>
      </div>
  );
  }
});

module.exports = ArenaProfile;
