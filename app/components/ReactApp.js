var React = require('react/addons');


//var Griddle = React.createFactory(require('griddle-react'));

var Chart = React.createFactory(require('./chart.jsx'));

//pull in data
var fakeData = require('../data/monster.js').monster;

var ReactApp = React.createClass({

  componentDidMount : function() {
    console.log(fakeData);
  },

  render: function(){
    return(
      <div id="chart-area">
      <Chart data={fakeData}/>
      </div>
    );
  }
});

//export, which is turned into a function with React.createFactory elsewhere
module.exports = ReactApp;
