var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.js');
var $ = require('jquery');

var Body = React.createClass({
  render: function() {
    return (
      <div className="content">
        <Kills />
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
      height: 400,
      width: 500
    };
    return (
      <div>
        <Plot handle="pie" data={this.state.data} layout={layout}></Plot>
      </div>
    );
  }
});


ReactDOM.render(
  <Body />,
  document.getElementById('content')
);

module.exports = Body;
