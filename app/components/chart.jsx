var React = require('react');
var Radar = require('./radar.jsx');

var Chart = React.createClass({

  getDefaultProps: function(){
    return {
      data: [],
      height: 250,
      width: 400
    };
  },

  render: function(){
    var x = this.props.width / 2;
    var y = this.props.height / 2;
    var radius = Math.min(x,y);

    return(
      
      <svg
        height={this.props.height}
        width={this.props.width}>

        <title>
          Monster Stats
        </title>

        <Radar
          data={this.props.data}
          x={x}
          y={y}
          r={radius} />

      </svg>
    );
  }
});

module.exports = Chart;
