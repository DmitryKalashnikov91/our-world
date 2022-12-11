import React from 'react';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <img
                    src='https://thumb.tildacdn.com/tild3232-3134-4133-a431-373835393739/-/resize/476x/-/format/webp/21__.png'
                    alt='logo'
                    width={200}
                    height={50}
                />
            </div>
            <section className={styles.content}>
                <span>По вопросам сотрудничества:</span>
                <div className={styles.contacts}>
                    <p>Официальный представитель МФКЭС "НАШ МИР-XXI ВЕК"</p>
                    <strong>Тимошенко Н.А.</strong>
                    <a href='tel:+79263271004'>+7 (926) 327-10-04</a>
                    <p>Глава дирекции развития</p>
                    <strong>Лисицина Л.</strong>
                    <a href='tel:+79035447575'>+7 (903) 544-75-75</a>
                    <p>Глава дирекции PR</p>
                    <strong>Баранов В.Р.</strong>
                    <a href='tel:+79169967768'>+7 (916) 996-77-68</a>
                </div>
            </section>
            <div className={styles.conf}>
                <a
                    href='https://xn-----7kc7aqdefshzj3d.xn--p1ai/page27721924.html'
                    target='_blank'
                    rel='noreferrer'>
                    Политика конфиденциальности
                </a>
            </div>
        </footer>
    );
};

export default Footer;
