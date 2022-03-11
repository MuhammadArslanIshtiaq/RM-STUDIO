import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AboutPage from './pages/about/AboutPage';
import HomePage from './pages/home/HomePage';

const Paths = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/about' element={<AboutPage />} />
    </Routes>
  );
};

export default Paths;
