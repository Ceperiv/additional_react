import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {type} from "@testing-library/user-event/dist/type";
import {authService, carService} from "../../services";

function CarForm(props) {
   const {register, handleSubmit, watch, formState:{errors, isDirty}} = useForm()


    // const [formValue, setFormValue] = useState([])

    async function submit(data) {
       await carService.create(data)
        console.log(data)
        if(errors) console.log(errors)
        // data.preventDefault()
    }

    return (
 <form onSubmit={handleSubmit(submit)}>
     <input type={"text"} {...register('model', {required:true})}/>
     <input type={"text"} {...register('price', {required:true})}/>
     <input type={"number"} {...register('year', {required:true})}/>
     <button type={"submit"}>ok</button>

 </form>

    );
}

export {CarForm};
