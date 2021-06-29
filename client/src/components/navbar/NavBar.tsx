import { useHistory } from 'react-router';
import { Link, withRouter } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  const history = useHistory();
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </nav>
  );
};

export default NavBar;
