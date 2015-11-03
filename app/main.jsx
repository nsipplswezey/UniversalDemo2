var React = require('react');
var ReactApp = require('./components/ReactApp');

var mountNode = document.getElementById('chart');

React.render(React.createElement(ReactApp), mountNode);
