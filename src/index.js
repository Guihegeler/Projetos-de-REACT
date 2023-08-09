import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.scss';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import Simulador from './pages/simulador';
import Sorveteria from './pages/sorveteria';
import Filmes from './pages/filmes';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<Simulador/>} />
          <Route path='/sorvete' element={<Sorveteria/>} />
          <Route path='/filmes' element={<Filmes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
