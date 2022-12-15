import React from 'react';
import {useDispatch, useSelector} from "react-redux";


import {carActions} from "../../redux/slice/car.slice";


function Car({car}) {
    const {id, model, price, year} = car;
    const {carForUpdate} = useSelector(state => state.cars);
    const dispatch = useDispatch();

    let createButton = document.querySelector('.create-button');
    // createButton.disabled = !!carForUpdate;


    return (
        <div className={'cars-block'}>
            <h4 className={'car-info'}>ID:{id}</h4>
            <h4 className={'car-info'}>name: {model}</h4>
            <h4 className={'car-info'}>price: {price}</h4>
            <h4 className={'car-info'}>year: {year}</h4>

            <button className={'car-button'} disabled={false} onClick={() => {
                dispatch(carActions.deleteById({id}))
            }}>delete
            </button>
            <button className={'car-button'} onClick={() => {
                if (!carForUpdate) {
                    dispatch(carActions.setCarForUpdate(car))
                } else {
                    dispatch(carActions.setCarForUpdate(null))
                }
            }}>{carForUpdate ? 'cancel' : 'edit'}</button>
        </div>

    );
}

export {Car};