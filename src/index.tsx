import React from 'react';
import ReactDOM from 'react-dom/client';
import "./app/styles/index.scss"
import App from './app/App';
import { BrowserRouter } from 'react-router-dom';
import { ScrollProvider } from './components/scrollProvider/ScrollProvider';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollProvider>
        <App />
      </ScrollProvider>
    </BrowserRouter>
  </React.StrictMode>
);
