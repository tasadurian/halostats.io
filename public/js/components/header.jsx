var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        Header
      </div>
    );
  }
});
ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

module.exports = Header;
