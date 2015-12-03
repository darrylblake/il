var React = require('react');
var Link = require('react-router').Link

module.exports = React.createClass({
  render: function() {
    return <div id="menu">
      {this.props.children}
      <Link to="/" className="exit">Exit</Link>
      <div className="categories">
        <Link to="/menu/staters">Starters</Link>
        <Link to="/menu/mains">Mains</Link>
        <Link to="/menu/drinks">Drinks</Link>
      </div>
    </div>
  }
});