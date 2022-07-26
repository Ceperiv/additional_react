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
        // console.log(car)
        // console.log(cars)
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
        const find = res.find(value => value.id === car.id)
        console.log(find)
        console.log(car)
        console.log(res)
        Object.assign(find, car);
        setCars(res)
        setCarForUpdate(null)
    }

    return (
        <main>
            <CarForm
                addCar={addCar}
                carForUpdate={carForUpdate}
                updateCar={updateCar}/>

            {cars.map(value =>
                <Car
                    key={value.id}
                    item={value}
                    deleteCar={deleteCar}
                    setCarForUpdate={setCarForUpdate}/>)}
        </main>
    );
}

export {Cars};