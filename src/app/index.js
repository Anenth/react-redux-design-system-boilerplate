import '@babel/polyfill';

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import FontFaceObserver from 'fontfaceobserver';
import 'sanitize.css/sanitize.css';
import AppContainer from './components/AppContainer';

import '!file-loader?name=[name].[ext]!./images/favicon.ico';

import { configureStore, history } from './store/configureStore';

const openSansObserver = new FontFaceObserver('Open Sans', {});
openSansObserver.load().then(() => {
  document.body.classList.add('fontLoaded');
});

const initialState = {};
const store = configureStore(initialState);
const render = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <AppContainer />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );
};

if (module.hot) {
  module.hot.accept(['./components/App'], () => {
    render();
  });
}

render();
