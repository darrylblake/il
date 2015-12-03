var React = require('react');
var Link = require('react-router').Link

module.exports = React.createClass({
  render: function() {
    return <div id="category">
      <Link to="/menu" className="exit">Back</Link>
      <h1>{this.props.params.category}</h1>
      <ul>
        <li>a</li>
        <li>b</li>
        <li>c</li>
        <li>d</li>
      </ul>
    </div>
  }
});