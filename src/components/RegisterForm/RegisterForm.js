import React, {useState} from 'react';
import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {authActions} from "../../redux/slice";
import {useNavigate} from "react-router-dom";
import ReactLoading from "react-loading";
import './RegiserForm.style.css'

function RegisterForm(props) {
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const {errors} = useSelector(state => state.auth);

    const submit = async (data) => {
        setIsLoading(true)
        const {error} = await dispatch(authActions.register({user: data}));
         if (!error) {
            navigate('/login')
             setIsLoading(false)
        } else if (error.message) {
            navigate('/error', {replace: true, state: 'server error:('})
             setIsLoading(false)
        }
    }

    return (

        <form onSubmit={handleSubmit(submit)}>
            {errors && <p>{errors.detail}</p>}
            {isLoading ?
                (<div><ReactLoading className={'isLoading'} type={'bubbles'} color={'cadetblue'}/></div>) :
                (<div><input type={"text"} placeholder={'username'} {...register('username')}/>
                    <input type={"text"} placeholder={'password'} {...register('password')}/>
                    <button>Register</button>
                </div>)}
        </form>

    );
}

export {RegisterForm};
