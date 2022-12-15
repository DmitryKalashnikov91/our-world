// import { Link } from 'react-router-dom';
import { Link } from 'react-scroll';

import LINKS from '../../constants/Links';
import styles from './MobileMenu.module.scss';
import { BiMenu } from 'react-icons/bi';
import { useState } from 'react';

const MobileMenu = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen((prev) => !prev);
    };
    return (
        <>
            <BiMenu className={styles.burger} size='40px' onClick={handleClick} />
            {open && (
                <nav className={styles.mob_nav}>
                    <ul>
                        {LINKS.map(({ id, path, value }) => (
                            <li key={id}>
                                <Link
                                    activeClass='nav-active'
                                    spy={true}
                                    smooth={true}
                                    to={path}
                                    onClick={() => setOpen(false)}>
                                    {value}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </>
    );
};

export default MobileMenu;
