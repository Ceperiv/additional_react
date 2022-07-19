import React, {useEffect, useState} from 'react';
import {useForm} from "react-hook-form";
import {carsService} from "../../services";


function CarForm({addCar, carForUpdate, updateCar}) {

    const {register, handleSubmit, reset, setValue, formState: {errors}} = useForm({mode: 'all'})

    const submit = async (newCar) => {
        if (!carForUpdate) {

            let {data} = await carsService.create(newCar);
            addCar(data)
            console.log(newCar)
        } else {
            const {data} = await carsService.update(carForUpdate.id, newCar)
            updateCar(data)

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
        <div>
            <form onSubmit={handleSubmit(submit)}>
                <input type={"text"} placeholder={'model'} {...register('model', {required: true,})}/>
                <input type={"number"} placeholder={!errors.price ? ('price') : ('0-1000000$')} {...register('price',
                    {valueAsNumber: true, required: true, min: 0, max: 1000000})}/>
                {errors.price && <p>price 0 - 1000000$</p>}

                <input type={"number"} placeholder={'year'} {...register('year', {
                    valueAsNumber: true, required: true, min: 1960, max: new Date().getFullYear()
                })}/>
                {errors.year && <p>from 1960 till current year</p>}
                <button>{carForUpdate ? 'edit' : 'save'}</button>


            </form>

        </div>
    );
}

export {CarForm};