import React from 'react';
import {useEffect, useState} from 'react';

import {carsService} from "../../services";
import {Car} from "../Car/Car";
import {CarForm} from "../CarForm/CarForm";

function Cars(props) {

    const [cars, setCars] = useState([])
    const [carForUpdate, setCarForUpdate] = useState(null)

    useEffect(() => {
        carsService.getInfo().then(({data}) => setCars(data))
    }, [])

    let addCar = (car) => {
        setCars([...cars, car])
    }

    const deleteCar = async (id) => {
        await carsService.deleteById(id);
        const res = [...cars]
        const index = res.findIndex(value => value.id === id)
        if (index !== -1) {
            res.splice(index, 1)
            setCars(res)
        }

    }

    const updateCar = (car) => {
        const res = [...cars]
        const find = res.find(value => value.id === carForUpdate.id)
        Object.assign(find, car);
        setCars(res)
        setCarForUpdate(null)
    }

    return (
        <div>
            <CarForm addCar={addCar} carForUpdate={carForUpdate} updateCar={updateCar}/>
            <hr/>
            {cars.map(value => <Car key={value.id} item={value} deleteCar={deleteCar}
                                    setCarForUpdate={setCarForUpdate}/>)}
        </div>
    );
}

export {Cars};