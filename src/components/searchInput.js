import React from 'react';

class SearchInput extends React.Component{
  _handleChange() {
    this.props.onUserInput(this.filterTextInput.value);
  }

  render() {
    return (
      <form>
        <input
          className="search"
          type="text"
          placeholder="Search by name..."
          value={this.props.filterText}
          ref={(input) => this.filterTextInput = input}
          onChange={this._handleChange.bind(this)}
        />
        </form>
    );
  }
}

export default SearchInput;
