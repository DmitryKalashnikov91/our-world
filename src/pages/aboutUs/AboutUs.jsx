import styles from './AboutUs.module.scss';

const AboutUs = () => {
    return (
        <div className={styles.about_us} id='aboutUs'>
            <section className={styles.content}>
                <div className={styles.logo}></div>
                <div className={styles.description}>
                    <h3>Уполномоченные партнеры общероссийской акции</h3>
                    <p>
                        Международное сообщество писательских союзов (преемник Союза писателей
                        СССР), в лице Коноплянникова Ю.В, заслуженного работника культуры РФ.
                    </p>
                    <p>
                        Межгосударственный союз городов-героев, в лице генерал-полковника Шумилова
                        Л.В.
                    </p>
                    <p>ВОСВОД, в лице генерал-полковника Нелезина П.В.</p>
                    <p>Консорциум «Достоинство», в лице Лиханчина Д.П.</p>
                    <p>
                        Художественная студия мемориальной архитектуры, в лице Дениса Нетяжука и
                        Александра Козинцева
                    </p>
                    <p>Образовательный Центр «КИТ», в лице рук. Аникина Т.А.</p>
                    <p>
                        Фонд «ЭКОТЕХ», в лице академика Мурадуллаева Р.С. и Тимошенко Н.А.
                        (общественный координатор общероссийской акции, исп. продюсер МФКЭС «Наш
                        Мир-21 век»).
                    </p>
                    <p>
                        Маркетинговое агентство GREENKEDS, в лице Ольги Стрелковой и Анастасии
                        Литвиновой{' '}
                    </p>
                    <p>Главный информационный партнер – газета «Президент», в лице Удалова В.С.</p>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
