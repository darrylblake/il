var React = require('react');

module.exports = React.createClass({
  render: function() {
    return <input type="file" accept="image/*;capture=camera" />
  }
})