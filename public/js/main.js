var React = require('react');
var ReactDOM = require('react-dom');

var CommentBox = React.createClass({
  displayName: 'CommentBox',
  render: function() {
    return (
      React.createElement('div', {
          className: "commentBox"
        },
        "Hello, world! I am a CommentBox. gbnfgxngfn."
      )
    );
  }
});
ReactDOM.render(
  React.createElement(CommentBox, null),
  document.getElementById('content')
);

var two = require('./components/reactTest.js');
