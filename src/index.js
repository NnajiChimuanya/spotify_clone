import React, { createContext } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initialState } from './reducer';

export const DataLayerContext = createContext({})



ReactDOM.render(
  <React.StrictMode>
    <DataLayerContext.Provider value={initialState}>
      <App />
    </DataLayerContext.Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


