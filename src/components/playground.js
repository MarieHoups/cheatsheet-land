import React from 'react';
import Slider from './slider';
import Shape from './shape';
import ColorInput from './colorInput';
import Fieldset from './fieldset';
import Radio from './radio';
import Thumbnail from './in_progress/thumbnail';

class Playground extends React.Component {
  constructor() {
    super();
    this.state = {
      baseShape: {
        background: '#EC185D',
        width: '10em',
        height: '10em'
      },
      bShadow: { x: 0, y: 0, blur: 0, spread: 0, colorShadow: '' },
      gradient: {
        type: '',
        angle: '',
        color: '',
        position: ''
      },
      thumbnails: []
    };
  }
  componentDidMount() {
    var shapes = this._getAllShapes();
    this.setState({thumbnails: shapes});
  }
  handleUserInput(property, value) {
    let style, propertyName;
    const shadowValues = ["x","y","blur","spread", "colorShadow"];
    const gradientValues = ["type", "angle", "color", "position"];

    if (gradientValues.includes(property) || shadowValues.includes(property)) {
      let concatable = [];
      style = gradientValues.includes(property) ? this.state.gradient : this.state.bShadow;
      propertyName = gradientValues.includes(property) ? 'backgroundImage' : 'boxShadow';
      style[property] = interpolate(property, value);

      for (let p in style) {
        concatable.push(style[p]);
      }

      let newstyle = this.state.baseShape;
      newstyle[propertyName] = concatable
                                .filter((v) => v !== '')
                                .join(' ')
                                .replace(/\(\s(.*$)/, '($1)');
      this.setState(newstyle);
    } else {
      style = this.state.baseShape;
      style[property] = interpolate(property, value);
    }
    this.setState(style);
  }
  _getAllShapes() {
    var shapes = localStorage.getItem('shapes');
    if (shapes) {
      return JSON.parse(shapes);
    }
    return [];
  }
  _saveShape() {
    var shapes = this._getAllShapes();
    var style = this.state.baseShape;
    shapes.push(style);
    localStorage.setItem('shapes', JSON.stringify(shapes));
    this._displayShapes();
    return true;
  }
  _clearShapes() {
    localStorage.removeItem('shapes');
    this.setState({thumbnails: []});
    this._displayShapes();
  }
  _displayShapes() {
    var shapes = this._getAllShapes();
    this.setState({thumbnails: shapes});
  }
  render() {
    const shape = this.state.baseShape;
    const borderStyles = ["none", "solid", "double", "dashed", "dotted"];
    const gradientTypes = ["linear", "repeating-linear", "radial"];
    var thumbnails = this.state.thumbnails.map(function(thumbnail, i) {
                      return ( <div className="storage" style={thumbnail} key={i}></div> );
                    });
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
        <Fieldset name="Gradient">
          <Slider
            name="angle"
            min="0"
            max="360"
            step="1"
            onUserInput={this.handleUserInput.bind(this, "angle")}
          />
          <Slider
            name="position"
            min="0"
            max="100"
            step="0.5"
            onUserInput={this.handleUserInput.bind(this, "position")}
          />
          <hr/>
          {gradientTypes.map((c,i) => (
            <Radio
              key={i}
              value={c}
              name="gradient-type"
              onUserInput={this.handleUserInput.bind(this, "type")}
            />
          ))}
          <ColorInput
            name="color"
            onUserInput={this.handleUserInput.bind(this, "color")}
          />
        </Fieldset>
      </section>
      <section className="shape">
        <button onClick={this._saveShape.bind(this)}>Save me!</button>
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
          box-shadow: {shape.boxShadow}
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
          {'\n'}
          background-image:
          {shape.backgroundImage}
        </code>
        </pre>
      <div><button onClick={this._clearShapes.bind(this)}>Clear</button></div>
      <aside className="thumbnails">
        { thumbnails }
      </aside>
      </section>
      </div>
    );
  }
}

const interpolate = function (property, value) {
  switch(property) {
    case 'color':
    case 'colorShadow':
    case 'background':
    case 'borderStyle':
    case 'borderColor':
      return value;
    case 'type':
      return `${value}-gradient(`;
    case 'angle':
      return `${value}deg,`;
    case 'position':
      return `${value}%`;
    default: return `${value}em`;
  }
}

export default Playground;
