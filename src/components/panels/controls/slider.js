import React from 'react';

class Slider extends React.Component{
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
    this.state = {
      value: ""
    }
  }

  _handleChange() {
    this.props.onUserInput(this.rangeInput.value);
    this.setState({value: this.rangeInput.value})
  }

  render() {
    return (
      <label className="lbl-range"> {this.props.name}
        <input
          type="range"
          defaultValue={this.props.defaultValue}
          min={this.props.min}
          max={this.props.max}
          step={this.props.step}
          ref={(input) => this.rangeInput = input}
          onChange={this._handleChange}
          onMouseUp={this._handleChange}
        />
      </label>
    );
  }
}

Slider.defaultProps = {
  defaultValue: 0
};

export default Slider;
