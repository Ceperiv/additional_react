import React, {useEffect, useState} from 'react';
import {Outlet, useNavigate} from "react-router-dom";

import './Heder.style.css';
import {useSelector} from "react-redux";

function Header(props) {
    const [active, setActive] = useState(null)
    const {errors} = useSelector(state => state.auth);
    let navigate = useNavigate();

    const queryAuth = window.location.href.split('/').splice(-1)

    useEffect(() => {
        setActive(queryAuth[0])
    }, [queryAuth])



    return (
        <header className={'header'}>
            {!errors ? <Outlet/> : <p>{JSON.stringify(errors)}</p>}
            <button
                    disabled={active === 'login'}
                    onClick={() => {
                        navigate('/login')
                    }}
            >Login
            </button>
            <button
                    disabled={active === 'register'}
                    onClick={() => {

                        navigate('/register')
                    }}
            >Register
            </button>
        </header>

    );
}

export {Header};
