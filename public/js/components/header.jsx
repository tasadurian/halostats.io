var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <div className="profilePic"></div>
        <h1 className="headerProfileName">Character Name</h1>
      </div>
    );
  }
});
ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

module.exports = Header;
