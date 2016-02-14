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
        height: 400,
        width: 550,
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


  render: function() {
    return (
      <div>
        <div>
          <Plot handle={this.state.plotHandle}
                data={this.state.data}
                layout={this.state.layout}>
          </Plot>
        </div>
    </div>
    );
  }
});

module.exports = KillsDeaths;
