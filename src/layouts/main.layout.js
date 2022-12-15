import React from 'react';
import {Outlet} from "react-router-dom";
import {useSelector} from "react-redux";

import './layout.style.css';
import {Header} from "../components";

function MainLayout(props) {

    return (
        <div className={'main-layout'}>
            <Header/>
        </div>
    );
}

export {MainLayout};
