var React = require('react');
var Link = require('react-router').Link;
var Main = require('./main');

module.exports = React.createClass({
  render: function() {
    return <nav>
      <Link to="/">Home</Link>
      <Link to="/menu">Menu</Link>
      <a href="tel:+64224501100">Phone</a>
      <a href="http://maps.apple.com/?saddr=Current Location&daddr=919 Dominion Road, Mt Roskill, Auckland, New Zealand">Directions</a>
    </nav>
  }
})