import {Navigate, Route, Routes} from "react-router-dom";
import React from 'react';

import './App.css';
import {MainLayout} from "./layouts";
import {CarsPage, CustomErrors, LoginPage, RegisterPage} from "./pages";
import {NotFoundPage} from "./pages/NotFoundPage";

function App() {
    return (

        <Routes>

            <Route path={''} element={<MainLayout/>}>
                <Route index element={<Navigate to={'login'}/>}/>
                <Route path={'login'} element={<LoginPage/>}/>
                <Route path={'register'} element={<RegisterPage/>}/>
                <Route path={'error'} element={<CustomErrors/>}/>
            </Route>
            <Route path={'cars'} element={<CarsPage/>}/>
            <Route path={'*'} element={<NotFoundPage/>}/>

        </Routes>


    );
}

export default App;
