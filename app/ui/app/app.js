import React from 'react';
import ReactDOM from 'react-dom';
import Container from './components/container';
import libraries from './reducers/libraries';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const store = createStore(libraries)

ReactDOM.render(
  <Provider store={store}>
    <Container />  
  </Provider>,
  document.getElementById('app')
);