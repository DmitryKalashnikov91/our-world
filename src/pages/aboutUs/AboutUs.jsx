import { Player } from 'video-react';
import media from '../../assets/videos/media1.mp4';
import styles from './AboutUs.module.scss';

const AboutUs = () => {
    return (
        <div className={styles.media}>
            <Player playsInline src={media} />
        </div>
    );
};

export default AboutUs;
