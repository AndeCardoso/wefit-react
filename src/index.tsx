import React from 'react';
import ReactDOM from 'react-dom/client';
import { GlobalStyle } from 'global/GlobalStyle';
import { Main } from 'pages/Main';

import { Provider } from 'react-redux';
import store from 'store';

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <GlobalStyle />
      <Main />
    </Provider>
  </React.StrictMode>
);
