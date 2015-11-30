var React = require('react');
var Tour = require('./tour')

Function.prototype.bind = function() {
  var fn = this;
  return function(context, arguments) {
    fn.apply(context, arguments);
  }
}

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