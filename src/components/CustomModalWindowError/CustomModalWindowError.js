import React, {useState} from 'react';
import Modal from 'react-modal';
import {useLocation, useNavigate} from "react-router-dom";

import './CustomModalWindowError.style.css';

function CustomModalWindowError(props) {

    const location = useLocation()

    const [modalIsOpen, setIsOpen] = useState(true);
    const navigate = useNavigate()
    const navigateTo = (path) => {
        setIsOpen(false)
        navigate(`/${path}`)
    }


    const customStyles = {
        content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
        },
    };
    let subtitle;

    function afterOpenModal() {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                style={customStyles}
                contentLabel="Error Modal"
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>ERROR</h2>
                <div>{location.state ? location.state : 'Error'}</div>
                <form className={'error-form'}>
                    <button onClick={() => navigateTo('login')}>login</button>
                    <button onClick={() => navigateTo('register')}>register</button>
                </form>
            </Modal>
        </div>
    );
}


export {CustomModalWindowError};
