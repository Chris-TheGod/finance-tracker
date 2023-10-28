import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul>
        <li className={styles.title}>myMoney</li>
        <li>
          <Link to='/login'>Login</Link>
          <Link to='/signup'>Signup</Link>
        </li>
      </ul>
    </nav>
  );
};
