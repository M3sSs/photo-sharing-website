import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import NoteState from './components/NoteState';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <NoteState>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </NoteState>
  </React.StrictMode>
);


