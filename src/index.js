// vendor modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
// utils
import store from './store/index';
// components
import DemoApp from 'components/containers/DemoApp';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <DemoApp store={store} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
