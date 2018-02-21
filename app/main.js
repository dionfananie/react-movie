import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import promiseMiddleware from 'redux-promise';
import reducers from './reducers';
import Root from './config/Root';
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware)(createStore)

const render = (Component) => {
  ReactDOM.render(
    <Provider store={createStoreWithMiddleware(reducers)}>
      <AppContainer warnings={false}>
        <Component />
      </AppContainer>
    </Provider>
    ,document.getElementById('root'),
  );
};

render(Root);

if (module.hot) {
  // module.hot.accept('./config/Root', () => {
  //   const newApp = require('./config/Root').default;
  //   render(newApp);
  // });
  module.hot.accept('./reducers', () => {
    const nextRootReducer = require('./reducers');
    store.replaceReducer(nextRootReducer);
  });
}
