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
      bShadow: { x: 0, y: 0, blur: 0, spread: 0, colorShadow: '' }
    };
  },
  handleUserInput: function(property, value) {
    var style;
    var multProps = ["x","y","blur","spread", "colorShadow"];
    if (_.indexOf(multProps, property) >= 0) {
      var concatable = [];
      style = this.state.bShadow;
      style[property] = value == 0 || value.match(/^[^-\d]./) ? value : value + 'em';
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
    var shape = this.state.baseShape;
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
          <legend>Border-radius</legend>
          <Slider
            name="top-left"
            min="0"
            max="50"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "borderTopLeftRadius")}
          />
          <Slider
            name="top-right"
            min="0"
            max="50"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "borderTopRightRadius")}
          />
                    <Slider
            name="bottom-right"
            min="0"
            max="50"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "borderBottomRightRadius")}
          />
          <Slider
            name="bottom-left"
            min="0"
            max="50"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "borderBottomLeftRadius")}
          />
          </fieldset>
        <fieldset>
          <legend>Color</legend>
          <ColorInput
            name="background"
            color={this.state.baseShape.background}
            onUserInput={this.handleUserInput.bind(this, "background")}
          />
          <ColorInput
            name="color-shadow"
            onUserInput={this.handleUserInput.bind(this, "colorShadow")}
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
          background: {shape.background}
          {'\n'}
          height: {shape.height}
          {'\n'}
          width: {shape.width}
          {'\n'}
          box-shadow: {this.state.boxShadow}
          {'\n'}
          border-radius: {
            `${shape.borderTopLeftRadius || 0} ${shape.borderTopRightRadius || 0} ${shape.borderBottomLeftRadius || 0} ${shape.borderBottomRightRadius || 0}`}
        </code>
        </pre>
      </section>
      </div>
    );
  }
});

module.exports = Playground;
