import styles from './Modal.module.scss';

const Modal = ({ active, setActive, children }) => {
    let popUpStyle = styles.modal;
    popUpStyle += active ? ` ${styles.active}` : '';
    return (
        <div className={popUpStyle} onClick={() => setActive(false)}>
            <div className={styles.modal_content} onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;
