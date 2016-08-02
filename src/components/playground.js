var React = require('react');
var Slider = require('./slider'),
    Shape = require('./shape');

var Playground = React.createClass({
  getInitialState: function() {
    return {
      baseShape: {
        background: 'deeppink',
        width: '10em',
        height: '10em'
      },
      bShadow: { x: 0, y: 0, blur: 0, spread: 0 }
    };
  },
  handleUserInput: function(property, value) {
    var style;

    if (property === "x" || property === "y" || property === "blur" || property === "spread") {
      var concatable = [];
      style = this.state.bShadow;
      style[property] = value + 'em';
      for (var p in style) {
        concatable.push(style[p] );
      }

      var newstyle = this.state.baseShape;
      newstyle.boxShadow = concatable.join(' ');
      this.setState(newstyle);

    } else {
      style = this.state.baseShape;
      style[property] = value + 'em';
    }

    this.setState(style);
  },
  render: function() {
    return (
      <div className="playground">
      <section className="sliders">
        <Slider
          min="0"
          max="20"
          step="0.1"
          initialValue={this.state.baseShape.height}
          onUserInput={this.handleUserInput.bind(this, "height")}
        />
        <Slider
          min="0"
          max="20"
          step="0.1"
          initialValue={this.state.baseShape.width}
          onUserInput={this.handleUserInput.bind(this, "width")}
        />
        <Slider
          min="-20"
          max="30"
          step="0.1"
          onUserInput={this.handleUserInput.bind(this, "x")}
        />
        <Slider
          min="-20"
          max="30"
          step="0.1"
          onUserInput={this.handleUserInput.bind(this, "y")}
        />
        <Slider
          min="0"
          max="10"
          step="0.1"
          onUserInput={this.handleUserInput.bind(this, "blur")}
        />
        <Slider
          min="-20"
          max="30"
          step="0.1"
          onUserInput={this.handleUserInput.bind(this, "spread")}
        />
      </section>
      <section className="shape">
        <Shape
          shapeStyle={this.state.baseShape}/>

      </section>
      <section className="code">
        <code>
          box-shadow: {this.state.baseShape.boxShadow}
        </code>
      </section>
      </div>
    );
  }
});

module.exports = Playground;
