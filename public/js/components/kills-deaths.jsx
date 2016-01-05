var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.jsx');
var $ = require('jquery');

var KillsDeaths = React.createClass({
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
          }],
          layout: {
            height: 450,
            width: 800
          }
        });
      }
    }.bind(this));
  },

  render: function () {
    return (
      <div>
        <Plot handle="kills"
              data={this.state.data}
              layout={this.state.layout}>
        </Plot>
      </div>
    );
  }
});

module.exports = KillsDeaths;
