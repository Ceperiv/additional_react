import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {carActions} from "../../redux/slice/car.slice";
import {Car} from "../Car/Car";
import {useSearchParams} from "react-router-dom";
import {CarForm} from "../CarForm/CarForm";


function Cars(props) {
    const {cars, isLoading, errors, prev, next} = useSelector(state => state.cars);
    // console.log(errors)
    const dispatch = useDispatch();
    const [query, setQuery] = useSearchParams({page: '1'});

    useEffect(() => {
        dispatch(carActions.getAll({page: query.get('page')}))
    }, [query])

    const prevPage = () => {
        const page = +query.get('page')-1;
        setQuery({page:`${page}`})
    };

    const nextPage = () => {
        const page = +query.get('page')+1;
        setQuery({page:`${page}`})
    };

    // console.log(cars)
    return (
        <div className={'cars-wrap'}>
            <button disabled={!prev} onClick={prevPage}>prev</button>
            <button disabled={!next} onClick={nextPage}>next</button>
            <CarForm/>
            <h1>hello world</h1>
            {isLoading && !errors && <h2>Loading.....</h2>}
            {errors && <h2>:( server Error</h2>}
            {cars.map(car => <Car key={car.id} car={car}/>)}
        </div>
    );
}

export {Cars};
