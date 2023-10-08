import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/global.css';
import App from './Components/App';
import { BrowserRouter } from 'react-router-dom';
import store from './Store/store';
import { Provider } from 'react-redux/es/exports';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

