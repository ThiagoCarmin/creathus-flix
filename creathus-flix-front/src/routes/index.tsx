import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React from 'react';
import Layout from '../components/Layout';
import Home from '../pages/Home';
import AddMovie from '../pages/AddMovie';
import { links } from '../constant';

const AppRoutes: React.FC = () => {
    const {addMovie, home} = links
  return (
      <BrowserRouter>
          <Routes>
              <Route path='/' element={<Layout />}>
                  {/* após a barra indica a página que quero acessar */}
                  <Route path={home} element={<Home />} />
                  <Route path={addMovie} element={<AddMovie />} />
              </Route>
          </Routes>
      </BrowserRouter>
  );
}

export default AppRoutes;