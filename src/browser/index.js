import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {Router, browserHistory } from 'react-router'
import routes from './routes'
import reducers from './reducers';
import promise from 'redux-promise'


import styles from './styles/style.scss'

const createStoreWithMiddleware = applyMiddleware(
  promise
)(createStore);


const store = createStoreWithMiddleware(reducers)

ReactDOM.render(
  <Provider store={store} >
    <Router history={browserHistory} routes={routes}/>
  </Provider>
  , document.querySelector('.container'));
