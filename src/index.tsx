import React, {Suspense} from 'react';
import { createRoot } from 'react-dom/client';
import { Provider} from 'react-redux';
import { setupStore } from './app/redux/store';
import App from './App';
import './index.css';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import {routes} from 'pages/routes/index';

const container = document.getElementById('root')!;
const root = createRoot(container);
const router = createBrowserRouter(routes);
root.render(
  <React.StrictMode>
    <Provider store={setupStore()}>
      <Suspense fallback={<div>Loading...</div>}>
        <RouterProvider router={router} fallbackElement={<div>Loading Routes..</div>}/>
        <App/>
      </Suspense>
    </Provider>
  </React.StrictMode>
);
