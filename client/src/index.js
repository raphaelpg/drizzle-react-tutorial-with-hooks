import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Drizzle } from '@drizzle/store';
import MyStringStore from './contracts/MyStringStore.json';

const options = {
  contracts: [MyStringStore],
  web3: {
    fallback: {
      type: "ws",
      url: "ws://127.0.0.1:9545",
    },
  },
};

const drizzle = new Drizzle(options);

ReactDOM.render(
  <React.StrictMode>
    <App drizzle={ drizzle }/>
  </React.StrictMode>,
  document.getElementById('root')
);