import React from 'react';
import ReactDOM from 'react-dom/client';
import { Normalize } from 'styled-normalize';
import GlobalStyle from 'styles/GlobalStyle';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { store, persistor } from 'redux/store';
import { App } from 'components/App';
import { BrowserRouter } from 'react-router-dom';
import { Loader } from 'components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/goit-react-hw-08-phonebook">
      <Normalize />
      <GlobalStyle />
      <Provider store={store}>
        <PersistGate loading={<Loader />} persistor={persistor}>
          <App />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
