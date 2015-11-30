var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <h1>Testing</h1>
    {this.props.children}
  }
})