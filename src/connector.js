import { connect } from 'react-redux';

//import TableContainer from './tableContainer';

const SET_SEARCH_TERM = 'setSearchTerm';

const mapStateToProps = (state) => {
  return { searchTerm: state.searchTerm }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setSearchTerm (term) {
      dispatch({type: SET_SEARCH_TERM, value: term})
    }
  }
}

const connector = connect(mapStateToProps, mapDispatchToProps);

export default connector;
