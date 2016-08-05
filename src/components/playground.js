var React = require('react');
var Slider = require('./slider'),
    Shape = require('./shape'),
    ColorInput = require('./colorInput');

var Playground = React.createClass({
  getInitialState: function() {
    return {
      baseShape: {
        background: '#f53373',
        width: '10em',
        height: '10em',
        boxShadow: '0 0 0 0'
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

      if (property === "background") {
        style[property] = value;
      } else {
        style[property] = value + 'em';
      }
    }
    this.setState(style);
  },
  render: function() {
    return (
      <div className="playground">
      <section className="sliders">
        <fieldset>
          <legend>Size</legend>
          <Slider
            name="height"
            min="0"
            max="20"
            step="0.1"
            initialValue={this.state.baseShape.height}
            onUserInput={this.handleUserInput.bind(this, "height")}
          />
          <Slider
            name="width"
            min="0"
            max="20"
            step="0.1"
            initialValue={this.state.baseShape.width}
            onUserInput={this.handleUserInput.bind(this, "width")}
          />
        </fieldset>
        <fieldset>
          <legend>Box-shadow</legend>
          <Slider
            name="x-offset"
            min="-20"
            max="30"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "x")}
          />
          <Slider
            name="y-offset"
            min="-20"
            max="30"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "y")}
          />
          <Slider
            name="blur"
            min="0"
            max="10"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "blur")}
          />
          <Slider
            name="spread"
            min="-20"
            max="30"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "spread")}
          />
        </fieldset>
        <fieldset>
          <legend>Color</legend>
          <ColorInput
            name="background"
            color={this.state.baseShape.background}
            onUserInput={this.handleUserInput.bind(this, "background")}
          />
        </fieldset>
      </section>
      <section className="shape">
        <Shape
          shapeStyle={this.state.baseShape}/>

      </section>
      <section className="code">
      <pre>
        <code>
          background: {this.state.baseShape.background}
          {'\n'}
          height: {this.state.baseShape.height}
          {'\n'}
          width: {this.state.baseShape.width}
          {'\n'}
          box-shadow: {this.state.baseShape.boxShadow}
        </code>
        </pre>
      </section>
      </div>
    );
  }
});

module.exports = Playground;
