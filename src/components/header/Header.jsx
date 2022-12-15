// import { Link } from 'react-router-dom';

import { Link } from 'react-scroll';
import logo from '../../assets/logo.png';
import LINKS from '../../constants/Links';
import MobileMenu from '../mobileMenu/MobileMenu';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <img src={logo} alt='logo' className={styles.logo} id='logo' width={70} height='auto' />
            <nav className={styles.navigate}>
                <ul>
                    {LINKS.map(({ id, path, value }) => (
                        <li key={id}>
                            <Link activeClass='nav-active' spy={true} smooth={true} to={path}>
                                {value}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>

            <MobileMenu />
        </header>
    );
};

export default Header;
