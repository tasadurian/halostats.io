var React = require('react');
var ReactDOM = require('react-dom');
var Plot = require('./plot.jsx');
var $ = require('jquery');

var Header = require('./header.jsx');
var Body = require('./body.jsx');

var App = React.createClass({
  render: function() {
    return (
      <div>
        <Header />
        <div className="divOne"><Body /></div>
        <div className="divTwo"></div>
        <div className="divThree"></div>
      </div>
    );
  }
});

ReactDOM.render(
  <App />,
  document.getElementById('content')
);

module.eports = App;
