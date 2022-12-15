import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useForm} from "react-hook-form";
import {useNavigate} from "react-router-dom";
import ReactLoading from 'react-loading';

import './LoginForm.style.css'
import {authActions} from "../../redux/slice";

function LoginForm(props) {
    const [isLoading, setIsLoading] = useState(false)
    const {register, handleSubmit} = useForm();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {errors} = useSelector(state => state.auth);

    const submit = async (data) => {
        setIsLoading(true)
        const {error} = await dispatch(authActions.login({user: data}));
        if (!error) {
            setIsLoading(false)
            navigate('/cars')
        } else if (error.message === 'Rejected') {
            setIsLoading(false)

            navigate('/error', {replace: true, state: 'server error:('})
        }
    };

    return (
        <form className={'login-form'} onSubmit={handleSubmit(submit)}>
            {errors && <p>{errors.detail}</p>}
            {isLoading ?
                (<div><ReactLoading className={'isLoading'} type={'bubbles'} color={'cadetblue'}/></div>) :
                (<div><input type={"text"} placeholder={'username'} {...register('username')}/>
                    <input type={"text"} placeholder={'password'} {...register('password')}/>
                    <button>Login</button>
                </div>)}
        </form>

    );
}

export {LoginForm};
