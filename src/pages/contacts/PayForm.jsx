import React from 'react';
import styles from './PayForm.module.scss';
import qr from '../../assets/QR-code.png';

const PayForm = () => {
    const payValue = [
        {
            id: 1,
            value: '100',
            color: '#f87171',
        },
        {
            id: 2,
            value: '200',
            color: '#fb923c',
        },
        {
            id: 3,
            value: '400',
            color: '#818cf8',
        },
        {
            id: 4,
            value: '1000',
            color: '#4ade80',
        },
        {
            id: 4,
            value: 'Другая сумма',
            color: '#4ade80',
        },
    ];
    return (
        <div className={styles.container}>
            <img src={qr} alt='' />
            <div className={styles.pay_form}>
                {payValue?.map(({ id, value, color }) => (
                    <button
                        className={styles.payBtn}
                        type='button'
                        key={id}
                        style={{ backgroundColor: color }}>
                        <span>{value}</span>
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PayForm;
