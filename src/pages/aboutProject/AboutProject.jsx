import styles from './AboutProject.module.scss';

const AboutProject = () => {
    return (
        <section className={styles.about}>
            <div className={styles.sub_title}>
                <h2>Всероссийская благотворительная акция</h2>
                <span>
                    Установка скульптурных групп и монументов &quot;Дети Донбасса&quot; и
                    &quot;Герои России&quot;
                </span>
            </div>
            <div className={styles.background}></div>
        </section>
    );
};

export default AboutProject;
