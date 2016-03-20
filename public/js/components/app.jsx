var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Header = require('./header.jsx');
var Body = require('./body.jsx');

var App = React.createClass({

  getInitialState: function() {
    return {
      headerData: {
        emblemUrl: '',
        spartanUrl: ''
      },
      arenaStatsData: [],
      warzoneStatsData: [],
      arenaGameData: [],
      warzoneGameData: []
    };
  },

  componentDidMount: function() {

    $.get('/api/profile/emblem-image', function(data) {
      var emblemUrl = data.url;
      if (this.isMounted()) {
        this.setState({
          headerData: {
            emblemUrl
          }
        });
      }
    }.bind(this));

    $.get('/api/profile/spartan-image', function(data) {
      var spartanUrl = data.url;
      if (this.isMounted()) {
        this.setState({
          headerData: {
            spartanUrl
          }
        });
      }
    }.bind(this));

    $.get('/api/stats/arena', function(data) {
      var haloData = this.haloData = data;
      var totalKills = data.Result.ArenaStats.TotalKills;
      var totalHeadshots = data.Result.ArenaStats.TotalHeadshots;
      if (this.isMounted()) {
        this.setState({

        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div>
        <Header emblemUrl={ this.state.headerData.emblemUrl } spartanUrl={ this.state.headerData.spartanUrl }/>
        <Body />
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

module.exports = App;
