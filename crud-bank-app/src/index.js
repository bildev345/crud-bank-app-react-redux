import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App6 from './App6'
import { Provider } from 'react-redux';
import { legacy_createStore } from 'redux';
import reducer from './Config/reducer'
const root = ReactDOM.createRoot(document.getElementById('root'));
const store = legacy_createStore(reducer);
root.render(
  <Provider store={store}>
      <App6/>
  </Provider>
);


