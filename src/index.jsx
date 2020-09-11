import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import configureStore from './store';

import './style.scss';

const store = configureStore();
// store.subscribe(() => console.log(store.getState()));
// store.dispatch(loadProduct());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
