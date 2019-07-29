import { connect } from 'react-redux';
import { LOADINGS } from '../common/Constants';
import { isLoadingSelector } from '../common/LoadingDuck';
import App from './App';
import { fetchAppData } from './AppDuck';

function mapStateToProps(state) {
  return {
    isLoading: isLoadingSelector(LOADINGS.APP_LOADING)(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    initData: () => {
      dispatch(fetchAppData(dispatch));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
