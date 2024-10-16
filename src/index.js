// src/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';  // Import your Redux store

ReactDOM.render(
  <Provider store={store}>   {/* Wrap the entire app with Provider */}
    <App />
  </Provider>,
  document.getElementById('root')
);

// If there's a line like this, remove it:
// reportWebVitals();

