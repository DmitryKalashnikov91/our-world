import IMAGES from '../../constants/Images';
import MainButton from '../ui/MainButton';
import styles from './Main.module.scss';

const MainInfo = () => {
    return (
        <section className={styles.main}>
            <div className={styles.main_content}>
                <div className={styles.sub_title}>
                    <h1>ВСЕРОССИЙСКАЯ БЛАГОТВОРИТЕЛЬНАЯ АКЦИЯ</h1>

                    <h2>
                        Установка скульптурных групп и монументов &quot;Дети Донбасса&quot; и
                        &quot;Героям России&quot;
                    </h2>
                </div>
                <MainButton title='Присоединиться к акции' />

                <div className='sub_title' id='images'>
                    <h3>Скульптурные группы и эскизы</h3>
                </div>
                <div className={styles.butterfly}></div>
                <div className={styles.images}>
                    {IMAGES.map((img) => (
                        <img key={img.id} src={img.path} alt={img.alt}></img>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default MainInfo;
