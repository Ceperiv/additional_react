import React from 'react';
import ReactLoading from "react-loading";

import './Pages.style.css'
import {useNavigate} from "react-router-dom";

function NotFoundPage(props) {
    const navigate = useNavigate()

    return (
        <div className={'not-found-page'}>
         <h1>NOT FOUND PAGE</h1>
            <ReactLoading color={'#1c5b5d'}/>
            <button onClick={()=>{
                navigate('/')
            }}>back to main</button>
        </div>
    );
}

export {NotFoundPage};
