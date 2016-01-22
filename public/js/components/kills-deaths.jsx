var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.jsx');
var $ = require('jquery');

var Header = require('./header.jsx');

var KillsDeaths = React.createClass({
  getInitialState: function() {
    return {
      data: [],
      layout: {
        height: 650,
        width: 1000,
        paper_bgcolor: 'rgb(14, 133, 178)'
      },
      plotHandle: 'kills',
      charName: ''
    };
  },

  componentDidMount: function() {
    $.get('/api/stats/arena', function(data) {
      var haloData = this.haloData = data;
      var totalKills = data.Result.ArenaStats.TotalKills;
      var totalHeadshots = data.Result.ArenaStats.TotalHeadshots;
      if (this.isMounted()) {
        this.setState({
          data: [{
            values: [totalKills, totalHeadshots],
            labels: ['kills','headshots'],
            type: 'pie'
          }],
          plotHandle: 'kills',
          charName: this.haloData.Id
        });
      }
    }.bind(this));
  },

  nextPlot: function() {
    var totalWins = this.haloData.Result.ArenaStats.TotalGamesWon;
    var totalLosses = this.haloData.Result.ArenaStats.TotalGamesLost;
    this.setState({
      data: [{
        values: [totalWins, totalLosses],
        labels: ['Wins','Losses'],
        type: 'pie'
      }],
      plotHandle: 'wins'
    });
  },

  render: function() {
    return (
      <div>
        <Header characterName={this.state.charName}/>
        <button className="leftButton" onClick={this.nextPlot}>Left</button>
        <div className="plot">
          <Plot handle={this.state.plotHandle}
                data={this.state.data}
                layout={this.state.layout}>
          </Plot>
        </div>
        <button className="rightButton">Right</button>
    </div>
    );
  }
});

module.exports = KillsDeaths;
