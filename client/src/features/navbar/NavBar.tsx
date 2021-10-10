import { useHistory } from 'react-router';
import { Link } from 'react-router-dom';

const NavBar = (): JSX.Element => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/login'>Login</Link>
    </nav>
  );
};

export default NavBar;
