import React from 'react';

class ColorInput extends React.Component{

  _handleChange() {
    this.props.onUserInput(this.refs.colorInput.value);
  }

  render() {
    return (
      <label className="lbl-hex">{this.props.name}
        <input
          type="text"
          defaultValue={this.props.defaultValue}
          ref="colorInput"
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
