import styles from './Main.module.scss';
import IMAGES from '../../assets/Images';

const MainInfo = () => {
    return (
        <section className={styles.main}>
            <div className={styles.main_content}>
                <div className={styles.main_text}>
                    <h1>ВСЕРОССИЙСКАЯ БЛАГОТВОРИТЕЛЬНАЯ АКЦИЯ</h1>
                    <h2>
                        Установка скульптурных групп и монументов &quot;Дети Донбасса&quot; и
                        &quot;Героям России&quot;
                    </h2>
                    <div className={styles.images}>
                        {IMAGES.map((img) => (
                            <img key={img.id} src={img.path} alt={img.alt}></img>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MainInfo;