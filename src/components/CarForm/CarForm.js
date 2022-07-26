import React, {useEffect} from 'react';
import {useForm} from "react-hook-form";

import './CarFormStyle.css';
import {carsService} from "../../services";


function CarForm({addCar, carForUpdate, updateCar}) {

    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({mode: 'all'})

    const submit = async (newCar, params) => {
        if (!carForUpdate) {

            let {data} = await carsService.create(newCar);
            addCar(data)
            // console.log(newCar)
        } else {

            const {data} = await carsService.update(carForUpdate.id, newCar)
            updateCar(data)
            // console.log(data)
            // console.log(newCar)
            // console.log(params.isTrusted)
        }
        reset()
    }

    useEffect(() => {
        if (carForUpdate) {
            setValue('model', carForUpdate.model)
            setValue('price', carForUpdate.price)
            setValue('year', carForUpdate.year)
        }
    }, [carForUpdate])

    return (
        <div className={'form'}>
            <form onSubmit={handleSubmit(submit)}>
                <input type={"text"} placeholder={'model'} {...register('model', {required: true,})}/>
                <input type={"number"} placeholder={!errors.price ? ('price') : ('0-1000000$')} {...register('price',
                    {valueAsNumber: true, required: true, min: 0, max: 1000000})}/>
                {errors.price && <p className={'error'}>price 0 - 1000000$</p>}

                <input type={"number"} placeholder={'year'} {...register('year', {
                    valueAsNumber: true, required: true, min: 1960, max: new Date().getFullYear()
                })}/>
                {errors.year && <p className={'error'}>1960 - current year</p>}
                <button>{carForUpdate ? 'edit' : 'save'}</button>


            </form>
            <hr/>

        </div>
    );
}

export {CarForm};