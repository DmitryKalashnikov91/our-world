import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import LINKS from '../../constants/Links';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt='logo' className={styles.logo} id='logo' width={70} height='auto' />
            <nav className={styles.navigate}>
                <ul>
                    {LINKS.map(({ id, path, value }) => (
                        <li key={id}>
                            <Link to={path}>{value}</Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
