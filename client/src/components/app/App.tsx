import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import LoginForm from '../../features/login/LoginForm';
import Machine from '../../features/machine/Machine';
import GlobalStyle from '../../styles/global-styles';
import Footer from '../footer/Footer';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <Routes>
        <Route path='/' element={<Machine />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
