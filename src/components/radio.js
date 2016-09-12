import React from 'react';

class Radio extends React.Component{
  _handleChange() {
    this.props.onUserInput(this.refs.radioInput.value);
  }

  render() {
    return (
      <label className="lbl-radio">
        <input
          type="radio"
          name={this.props.name}
          ref="radioInput"
          onChange={this._handleChange.bind(this)}
          value={this.props.value}
        />{this.props.value}
        <span></span>
      </label>
    );
  }
}

export default Radio;
