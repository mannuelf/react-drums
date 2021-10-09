import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Footer } from '../Footer';
import { LoginForm } from 'components/forms/login/LoginForm';
import { Machine } from 'components/machine/Machine';
import { Welcome } from 'components/welcome/Welcome';
import '../../styles/normalize.css';
import GlobalStyle from '../../styles/global-styles';

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
