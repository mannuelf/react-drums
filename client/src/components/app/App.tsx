import '../../styles/normalize.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import GlobalStyle from '../../styles/global-styles';
import Machine from 'components/machine/Machine';
import Footer from '../../features/footer/Footer';
import LoginForm from '../../features/login/LoginForm';

export const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Machine} />
          <Route exact path='/machine' component={Machine} />
          <Route exact path='/login' component={LoginForm} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
