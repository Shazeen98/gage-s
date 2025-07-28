// src/index.js
import React from 'react';
import { createRoot } from 'react-dom/client';  // ← named import here
import App from './App';
import './App.css';

const container = document.getElementById('root');
const root = createRoot(container);             // ← call createRoot, not ReactDOM.render
root.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
