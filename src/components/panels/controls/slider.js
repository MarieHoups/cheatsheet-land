import React from 'react';

class Slider extends React.Component{
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange() {
    this.props.onUserInput(this.rangeInput.value);
  }
  render() {
    return (
      <label className="lbl-range"> {this.props.name}
        <input
          type="range"
          value={this.props.inputValue}
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

export default Slider;
