import MainInfo from '../../components/mainInfo/MainInfo';
import { useNavigate } from 'react-router-dom';
import { Player } from 'video-react';
import video from '../../assets/videos/video1.mp4';

const Main = () => {
    const navigate = useNavigate();

    return (
        <>
            <MainInfo />
            <div className='main_button'>
                <button onClick={() => navigate('/contacts')}>Стать участником акции</button>
            </div>

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
        </>
    );
};

export default Main;
