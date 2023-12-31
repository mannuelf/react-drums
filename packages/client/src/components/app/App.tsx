import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useQuery } from 'urql';
import LoginForm from '../../features/login/LoginForm';
import Machine from '../../features/machine/Machine';
import { GetUsersDocument } from '../../graphql/generated';
import Footer from '../footer/Footer';

const App: React.FC = () => {
  const [results] = useQuery({ query: GetUsersDocument });
  console.log('⭐', results);
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Machine />} />
        <Route path='/login' element={<LoginForm />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
