import React from 'react';
import { useNavigate } from 'react-router-dom';

const MainButton = ({ title }) => {
    const navigate = useNavigate();
    return (
        <div className='main_button'>
            <button onClick={() => navigate('/contacts')}>{title}</button>
        </div>
    );
};

export default MainButton;
