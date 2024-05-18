import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
// entry
import './public-path';
const root = ReactDOM.createRoot(document.getElementById('subroot'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
