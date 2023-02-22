import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from '../components/Layout';
import Home from '../pages/Home';

const AppRoutes: React.FC = () => {
    
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />}>
                  {/* após a barra indica a página que quero acessar */}
                  <Route path='/' element={<Home />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default AppRoutes;