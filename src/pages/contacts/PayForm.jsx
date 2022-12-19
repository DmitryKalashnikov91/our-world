import React from 'react';
import styles from './PayForm.module.scss';
import qr from '../../assets/QR-code.png';
import Modal from '../../components/ui/Modal';
import PayValues from '../../constants/PayValues';

const PayForm = () => {
    const [modalActive, setModalActive] = React.useState(false);

    return (
        <div className={styles.container}>
            <img src={qr} alt='' />
            <div className={styles.pay_form}>
                {PayValues?.map(({ id, value, color }) => (
                    <button
                        className={styles.payBtn}
                        type='button'
                        onClick={() => setModalActive(true)}
                        key={id}
                        style={{ backgroundColor: color }}>
                        <span>{value}</span>
                    </button>
                ))}
            </div>
            <Modal active={modalActive} setActive={setModalActive}>
                <input type='number' value={PayValues.value} />
                <button>оплатить</button>
            </Modal>
        </div>
    );
};

export default PayForm;
