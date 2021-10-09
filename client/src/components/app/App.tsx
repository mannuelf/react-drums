import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Welcome } from 'components/welcome/Welcome';
import LoginForm from 'components/forms/login/LoginForm';
import Machine from 'components/machine/Machine';
import Footer from '../Footer';
import GlobalStyle from '../../styles/global-styles';
import '../../css/normalize.css';

export const App = (): JSX.Element => {
  return (
    <>
      <Router>
        <GlobalStyle />
        <Switch>
          <Route exact path='/' component={Welcome} />
          <Route exact path='/machine' component={Machine} />
          <Route exact path='/login' component={LoginForm} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};
