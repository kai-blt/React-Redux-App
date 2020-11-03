import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'
import { createStore } from 'redux';
import { Provider } from 'react-redux'
import { reducer } from './reducers'

const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: border-box;
  }

  /** FONTS **************************
    font-family: 'Roboto', sans-serif;
    font-family: 'Roboto Slab', serif;
  ***********************************/

  html {
    font-size: 62.5%;
  }

  body {
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    line-height: 1.6rem;
    height: 100vh;
    width: 80%;
    margin: auto;
    border: 1px solid red;
    padding: 2% 0;
  }
`;

//Setup Redux Store
const store = createStore(reducer);

//Store debug
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
