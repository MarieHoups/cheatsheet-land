import React from 'react';

class ColorInput extends React.Component{
  constructor() {
    super();
    this._handleChange = this._handleChange.bind(this);
  }

  _handleChange() {
    this.props.onUserInput(this.colorInput.value);
  }
  render() {
    return (
      <label className="lbl-color">{this.props.name}
        <input
          type="text"
          value={this.props.inputValue}
          ref={(input) => this.colorInput = input}
          onChange={this._handleChange}
        />
      </label>
    );
  }
}

export default ColorInput;
