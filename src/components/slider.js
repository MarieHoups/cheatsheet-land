import React from 'react';

class Slider extends React.Component{
  _handleChange() {
    this.props.onUserInput(this.refs.rangeInput.value);
    this.setState({currentValue: this.refs.rangeInput.value})
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
          ref="rangeInput"
          onChange={this._handleChange.bind(this)}
          onMouseUp={this._handleChange.bind(this)}
        />
      </label>
    );
  }
}

Slider.defaultProps = {
  defaultValue: 0
};

export default Slider;
