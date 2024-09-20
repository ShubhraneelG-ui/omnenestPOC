import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './services/App.tsx';
import './styles/base.scss';

ReactDOM.createRoot(    document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <App />
    </React.StrictMode>
);
