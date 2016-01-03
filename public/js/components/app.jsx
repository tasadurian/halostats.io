var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.js');
var $ = require('jquery');

var header = require('./header.jsx');
var body = require('./body.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <Body />
      </div>
    );
  }
});
