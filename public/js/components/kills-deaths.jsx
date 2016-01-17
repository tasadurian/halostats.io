var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.jsx');
var $ = require('jquery');

var Header = require('./header.jsx');

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
            height: 650,
            width: 1000,
            paper_bgcolor: 'rgb(14, 133, 178)'
          }
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <Header />
        <button className="leftButton">Left</button>
        <div className="plot">
          <Plot handle="kills"
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
