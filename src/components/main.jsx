var React = require('react');
var Tour = require('./tour')

module.exports = React.createClass({
  render: function() {
    return <Tour />
  },
  content: function() {
    if (this.props.children) {
      return this.props.children
    } else {
      return null
    }
  }
})