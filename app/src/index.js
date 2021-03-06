import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components'
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import { logger } from 'redux-logger'
import { Provider } from 'react-redux'
import { reducer } from './Redux/reducers'

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
    background: url('https://media.magic.wizards.com/images/wallpaper/raugrin-triome_iko_1920x1080_wallpaper.jpg');
    background-attachment: fixed;
    color: #fff;
    text-shadow: 4px 4px 4px #000;
    text-align: center;
    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 300;
    line-height: 1.6rem;
    letter-spacing: 2px;
    height: 100vh;
    width: 80%;
    margin: auto;
    padding: 2% 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    margin: 4% 0;
  }

  h1 {      
    font-size: 6rem;
  }

  h2 {      
    font-size: 4rem;
  }

  h3 {      
    font-size: 3rem;
  }

  h4 {      
    font-size: 2rem;
  }

  h5 {      
    font-size: 1rem;
  }

  h6 {      
    font-size: 0.5rem;
  }

  button, input {
    font-size: 2rem;
    font-weight: 700;
    border-radius: 5px;
    border: 0;
    padding: 1% 2%;
    margin: 2% 2%;   
  }

  button {
    box-shadow: 5px 5px 15px #222;
    &:hover {
      color: #444;
      background-color: #666;      
    }
  }

  label {
    font-size: 2rem;
  }

  input {
    box-shadow: inset 2px 2px 4px #222;
  }

`;

//Setup Redux Store
const store = createStore(reducer, applyMiddleware(thunk, logger));

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
