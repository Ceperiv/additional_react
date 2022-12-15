import React from 'react';

import {RegisterForm} from "../components";
import './Pages.style.css'

function RegisterPage(props) {
    return (
        <div className={'forms'}>
           <RegisterForm/>
        </div>
    );
}

export {RegisterPage};