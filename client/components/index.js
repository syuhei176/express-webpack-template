var React = require('react');

var Router = require('react-router').Router;
var Route = require('react-router').Route;
var Link = require('react-router').Link;
var hashHistory = require('react-router').hashHistory;
var MainComponent = require('./main');

var NoMatch = React.createClass({
	render: function() {
		return (<div><Link to="/main">main component</Link></div>);
	}
});

let IndexComponent = React.createClass({

  getInitialState: function () {
    return {
    };
  },

  componentWillMount: function() {
  },

  componentDidMount: function () {
  },

  componentDidUpdate: function () {
  },

  componentWillUnmount : function() {
  },

  render: function () {
    return (
	  <Router history={hashHistory}>
		<Route path="/main" component={MainComponent}>
		</Route>
		<Route path="*" component={NoMatch}/>
	  </Router>
    );
  }
});

module.exports = IndexComponent;