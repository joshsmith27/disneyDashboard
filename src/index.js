import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import promiseMiddleware from 'redux-promise-middleware';
import reducers from './Redux/Reducer';
import {eventDispatcher} from './api';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
    applyMiddleware(
      promiseMiddleware()
    )
  ))
eventDispatcher(store.dispatch)

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>, document.getElementById('root'));
    registerServiceWorker();
