var React = require('react');

var Shape = React.createClass({
  render: function() {
    return (
      <div>
      <aside></aside>
      <div style={Object.assign({},this.props.shapeStyle)}></div>
      </div>
    );
  }
});

module.exports = Shape;
