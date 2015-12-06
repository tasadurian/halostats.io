var React = require('react');
var ReactDOM = require('react-dom');
var $ = require('jquery');

var two = React.createClass({
  displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {
          className: "two"
        },
        "Hello, world! This is react components #2"
      )
    );
  }
});
ReactDOM.render(
  React.createElement(two, null),
  document.getElementById('two')
);

module.exports = two;
