import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { createHashHistory } from 'history';
import { routerMiddleware, push } from 'connected-react-router';

import createRootReducer from '../reducers/index';

export const history = createHashHistory();

export const configureStore = initialState => {
  // Redux Configuration
  const middleware = [];
  const enhancers = [];

  // Thunk Middleware1
  middleware.push(thunk);

  // Router Middleware
  const router = routerMiddleware(history);
  middleware.push(router);

  // Redux DevTools Configuration
  const actionCreators = {
    push,
  };
  // If Redux DevTools Extension is installed use it, otherwise use Redux compose
  /* eslint-disable no-underscore-dangle */
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({ actionCreators })
    : compose;
  /* eslint-enable no-underscore-dangle */

  // Apply Middleware & Compose Enhancers
  enhancers.push(applyMiddleware(...middleware));
  const enhancer = composeEnhancers(...enhancers);

  // Create Store
  const store = createStore(createRootReducer(history), initialState, enhancer);

  if (module.hot) {
    module.hot.accept(
      '../reducers',
      () => store.replaceReducer(require('../reducers/index')), // eslint-disable-line global-require
    );
  }

  return store;
};
