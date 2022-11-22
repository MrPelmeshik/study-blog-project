import React from 'react';
import ReactDOM from 'react-dom/client';
import {App} from './App';
import './index.module.css';
import './text.module.css';
import './variable.module.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
    <App />
);
