import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initialState } from './reducer';
import reducer from './reducer';
import { DataLayer} from "./Datalayer"



ReactDOM.render(
  <React.StrictMode>
    <DataLayer reducer={reducer} initialState={initialState}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById('root')
);


