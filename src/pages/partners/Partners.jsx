import styles from './Partners.module.scss';
import PARTNERS from '../../constants/Partners';

const Partners = () => {
    console.log(PARTNERS);
    return (
        <div id='partners'>
            <div className='sub_title'>
                <h3>Наш МИР поддержали:</h3>
            </div>
            <div className={styles.partners_container}>
                {PARTNERS.map(({ id, path, alt }) => (
                    <div key={id} className={styles.avatars}>
                        <img src={path} alt={alt} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Partners;
