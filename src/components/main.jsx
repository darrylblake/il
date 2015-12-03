var React = require('react');
var Tour = require('./tour');
var Logo = require('./logo');
var Nav = require('./nav');

module.exports = React.createClass({
  render: function() {
    return <div>
      <Tour />
      {this.content()}
      <Logo title="JS Tea" />
      <Nav />
    </div>
  },
  content: function() {
    if (this.props.children) {
      console.log('there are kids!')
      return this.props.children
    } else {
      return null
    }
  }
})