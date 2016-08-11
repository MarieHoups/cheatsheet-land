import React from 'react';
import SearchInput from './SearchInput';
import ColorTable from './ColorTable';

class TableContainer extends React.Component{
  constructor() {
    super();
    this.state = {
      filterText: ''
    };
    this._handleUserInput = this._handleUserInput.bind(this);
  }

  _handleUserInput(filterText) {
    this.setState({
      filterText: filterText
    });
  }

  render() {
    return (
      <div>
        <SearchInput
          filterText={this.state.filterText}
          onUserInput={this._handleUserInput}
        />
        <ColorTable
          url="https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json"
          colors={this.props.data}
          filterText={this.state.filterText}/>
      </div>
    );
  }
}

export default TableContainer;
