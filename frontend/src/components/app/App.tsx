import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from '../footer/Footer';
import GlobalStyle from '../../styles/global-styles';
import LoginForm from '../../features/login/LoginForm';
import Machine from '../../features/machine/Machine';

const App: React.FC = (): JSX.Element => {
  return (
    <Router>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' component={Machine} />
        <Route exact path='/login' component={LoginForm} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
