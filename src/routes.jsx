var React = require('react');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;

var Main = require('./components/main')
var Menu = require('./components/menu')
var Category = require('./components/category')

module.exports = (
  <Router>
    <Route path="/" component={Main}>
      <Route path="menu" component={Menu}>
        <Route path=":category" component={Category} />
      </Route>
    </Route>
  </Router>
)