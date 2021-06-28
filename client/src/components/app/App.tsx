import { Switch, Route } from 'react-router-dom';
import LoginForm from 'components/forms/login/LoginForm';
import Machine from 'components/machine/Machine';
import Footer from '../Footer';
import GlobalStyle from '../../global-styles';
import '../../css/normalize.css';

const App = (): JSX.Element => {
  return (
    <>
      <GlobalStyle />
      <Switch>
        <Route exact path='/' />
        <Route exact path='/machine' component={Machine} />
        <Route exact path='/login' component={LoginForm} />
      </Switch>
      <Footer />
    </>
  );
};

export default App;
