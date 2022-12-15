import MainInfo from '../../components/mainInfo/MainInfo';

import { Player } from 'video-react';
import video from '../../assets/videos/video1.mp4';
import forum from '../../assets/videos/forum141222.mp4';
import AboutProject from '../aboutProject/AboutProject';
import AboutUs from '../aboutUs/AboutUs';
import Header from '../../components/header/Header';
import MainButton from '../../components/ui/MainButton';

const Main = () => {
    return (
        <>
            <Header />
            <section className='forum' id='main'>
                <video muted autoPlay preload='auto' loop playsInline src={forum} />
            </section>
            <MainInfo />
            <MainButton title='Поддержать проект' />

            <section className='media'>
                <Player playsInline src={video} />
            </section>
            <section className='ressurses'>
                <h3>Рессурсы организаторов:</h3>
                <div className='links'>
                    <a
                        href='https://xn-----7kc7aqdefshzj3d.xn--p1ai/'
                        target='_blank'
                        rel='noopener noreferrer'>
                        Форум-наш-мир.рф
                    </a>
                    <a href='https://rushelpfond.ru/' target='_blank' rel='noopener noreferrer'>
                        Rushelpfond.ru
                    </a>
                </div>
            </section>
            <AboutProject />
            <AboutUs />
        </>
    );
};

export default Main;
