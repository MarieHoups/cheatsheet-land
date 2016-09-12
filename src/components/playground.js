import React from 'react';
import Slider from './slider';
import Shape from './shape';
import ColorInput from './colorInput';
import Fieldset from './fieldset';
import Radio from './radio';

class Playground extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      baseShape: {
        background: '#EC185D',
        width: '10em',
        height: '10em',
        boxShadow: '0 0 0 0'
      },
      bShadow: { x: 0, y: 0, blur: 0, spread: 0, colorShadow: '' }
    };
  }

  handleUserInput(property, value) {
    let style;
    const multProps = ["x","y","blur","spread", "colorShadow"];
    if (multProps.includes(property)) {
      let concatable = [];
      style = this.state.bShadow;
      style[property] = value == 0 || value.match(/^[^-\d]./) ? value : value + 'em';
      for (let p in style) {
        concatable.push(style[p] );
      }

      let newstyle = this.state.baseShape;
      newstyle.boxShadow = concatable.join(' ');
      this.setState(newstyle);

    } else {
      style = this.state.baseShape;
      if (property === "background" || property === "borderColor" || property === "borderStyle") {
        style[property] = value;
      } else {
        style[property] = value + 'em';
      }
    }
    this.setState(style);
  }

  render() {
    const shape = this.state.baseShape;
    const borderStyles = ["none", "solid", "double", "dashed", "dotted"];
    return (
      <div className="playground">
      <section className="controls">
        <Fieldset name="Size">
          <Slider
            name="height"
            min="0"
            max="20"
            step="0.1"
            defaultValue={this.state.baseShape.height}
            onUserInput={this.handleUserInput.bind(this, "height")}
          />
          <Slider
            name="width"
            min="0"
            max="20"
            step="0.1"
            defaultValue={this.state.baseShape.width}
            onUserInput={this.handleUserInput.bind(this, "width")}
          />
        </Fieldset>
        <Fieldset name="Box-shadow">
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
        </Fieldset>
        <Fieldset name="Border-radius">
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
        </Fieldset>
        <Fieldset name="Border">
          <Slider
            name="top-width"
            min="0"
            max="20"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "borderTopWidth")}
          />
          <Slider
            name="right-width"
            min="0"
            max="20"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "borderRightWidth")}
          />
          <Slider
            name="bottom-width"
            min="0"
            max="20"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "borderBottomWidth")}
          />
          <Slider
            name="left-width"
            min="0"
            max="20"
            step="0.1"
            onUserInput={this.handleUserInput.bind(this, "borderLeftWidth")}
          />
          <hr />
          {borderStyles.map((c,i) => (
          <Radio
            key={i}
            value={c}
            name="border-style"
            onUserInput={this.handleUserInput.bind(this, "borderStyle")}
          />
          ))}
        </Fieldset>
        <Fieldset name="Color">
          <ColorInput
            name="background"
            defaultValue={this.state.baseShape.background}
            onUserInput={this.handleUserInput.bind(this, "background")}
          />
          <ColorInput
            name="shadow"
            onUserInput={this.handleUserInput.bind(this, "colorShadow")}
          />
          <ColorInput
            name="border"
            onUserInput={this.handleUserInput.bind(this, "borderColor")}
          />
        </Fieldset>
      </section>
      <section className="shape">
        <Shape shapeStyle={this.state.baseShape}/>
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
          {'\n'}
          border-style: {shape.borderStyle}
          {'\n'}
          border-width: {
            `${shape.borderTopWidth || 0} ${shape.borderRightWidth || 0} ${shape.borderBottomWidth || 0} ${shape.borderLeftWidth || 0}`}
          {'\n'}
          border-color: {shape.borderColor}
        </code>
        </pre>
      </section>
      </div>
    );
  }
}

export default Playground;
