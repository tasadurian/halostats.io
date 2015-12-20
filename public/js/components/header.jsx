var React = require('react');
var ReactDOM = require('react-dom');
var Refetch = require('react-refetch');
var $ = require('jquery');

var emblemUrl = function() {
  $.ajax({
    url: '/api/profile/emblem-image',
    type: "GET",
    dataType: "json",
    success: function(data) {
      console.log(data.url);
      return data.url;
    }
  });
};


var Header = React.createClass({
  render: function() {
    return (
      <div className="header">
        <ProfilePic />
      </div>
    );
  }
});

var ProfilePic = React.createClass({
  getInitialState: function() {
    return {
      profilePicUrl: ''
    };
  },

  componentDidMount: function() {
    $.get('/api/profile/emblem-image', function(data) {
      var lastGist = data.url;
      if (this.isMounted()) {
        this.setState({
          profilePicUrl: lastGist
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      // <img className="emblemImg" src={"https://content.halocdn.com/media/Default/games/halo-5-guardians/csr/csr_gold_array03-bcbc2b460a934f10b499ee7f9bec6315.png"} />
      <img className="emblemImg" src={ this.state.profilePicUrl } />
    );
  }
});


ReactDOM.render(
  <Header />,
  document.getElementById('header')
);

module.exports = Header;
