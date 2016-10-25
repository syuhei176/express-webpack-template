var React = require('react');
var ReactDOM = require('react-dom');

var IndexComponent = require('./components');

var mainEl = (<IndexComponent/>);
ReactDOM.render(mainEl, document.getElementById('main'));
