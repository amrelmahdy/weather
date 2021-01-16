import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App';
import { Provider } from 'react-redux'
import reportWebVitals from './reportWebVitals';
import rootReducer from './App/store//reducers/rootReducer'
import thunk from "redux-thunk"
import logger from "redux-logger";
import { createStore, applyMiddleware } from 'redux'
const applied_middleware = applyMiddleware(logger, thunk);

const store = createStore(rootReducer, applied_middleware)

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
