import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';



const app = document.querySelector('#app');
const root = ReactDOM.createRoot(app);
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);