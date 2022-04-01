import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from '../footer/Footer';
import GlobalStyle from '../../styles/global-styles';
import LoginForm from '../../features/login/LoginForm';
import Machine from '../../features/machine/Machine';

const App: React.FC = (): JSX.Element => {
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
