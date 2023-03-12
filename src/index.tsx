import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import Loading from './components/Loading';

import './firebase';
import './18n';
import './fonts/stylesheet.css';



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loading />}>
      <App />
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

