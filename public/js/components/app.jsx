var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Header = require('./header.jsx');
var Body = require('./body.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
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
