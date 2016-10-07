import React from 'react';

class ColorInput extends React.Component{

  _handleChange() {
    this.props.onUserInput(this.colorInput.value);
  }

  render() {
    return (
      <label className="lbl-color">{this.props.name}
        <input
          type="text"
          defaultValue={this.props.defaultValue}
          ref={(input) => this.colorInput = input}
          onChange={this._handleChange.bind(this)}
        />
      </label>
    );
  }
}

ColorInput.defaultProps = {
  defaultValue: ""
};

export default ColorInput;
