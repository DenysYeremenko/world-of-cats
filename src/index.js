import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'App';
import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react';
import { persistor, store } from './redux/store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename='/world-of-cats/'>
    <React.StrictMode>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={null}>
          <App />
        </PersistGate>
      </Provider>
    </React.StrictMode>
  </BrowserRouter>,
);
