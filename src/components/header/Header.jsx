import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import styles from './Header.module.scss';

const Header = () => (
    <header className={styles.header}>
        <img src={logo} alt='logo' className={styles.logo} id='logo' width={70} height='auto' />
        <nav className={styles.navigate}>
            <ul>
                <li>
                    <Link to='/'>Главная</Link>
                </li>
                <li>
                    <Link to='/project'>О проекте</Link>
                </li>
                <li>
                    <Link to='/aboutUs'>О нас</Link>
                </li>
                <li>
                    <Link to='/partners'>Попечительский совет</Link>
                </li>
                <li>
                    <Link to='/contacts'>Контакты</Link>
                </li>
            </ul>
        </nav>
    </header>
);

export default Header;
