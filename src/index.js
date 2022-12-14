import React from 'react';
import ReactDOM from 'react-dom/client';
import { PokemonApp } from './PokemonApp';
import { Provider } from 'react-redux';
import { store } from './store/store';

import './index.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
    <Provider store={ store }>
      <PokemonApp />
    </Provider>
  // </React.StrictMode>
);
