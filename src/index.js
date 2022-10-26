import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import App from './App';
import Header from './components/elements/header/Header';
import './firebase'
import './index.scss';
import { store } from './redux';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Header />
      <App />
    </Provider>
  </React.StrictMode>
);