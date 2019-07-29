import { connect } from 'react-redux';
import { LOADINGS } from '../../common/Constants';
import { errorObjectForTypeSelector } from '../../common/ErrorDuck';
import { isLoadingSelector } from '../../common/LoadingDuck';
import { clientsItemsSelector } from './ClientsDataDuck';
import ClientSearchPage from './ClientSearchPage';
import {searchForClients} from './ClientsSearchPageDuck';

function mapStateToProps(state) {
  return {
    clients: clientsItemsSelector(state),
    isLoading: isLoadingSelector(LOADINGS.CLIENT.FETCH)(state),
    errors: errorObjectForTypeSelector(LOADINGS.CLIENT.FETCH)(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    searchForClient: searchTerm => dispatch(searchForClients(dispatch, searchTerm)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ClientSearchPage);
