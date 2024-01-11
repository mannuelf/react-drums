import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Machine from '../../features/machine/Machine';
import Footer from '../footer/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Machine />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
