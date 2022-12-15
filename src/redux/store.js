import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {carReducer} from "./slice/car.slice";
import {authReducer} from "./slice";

const rootReducer = combineReducers({
    cars: carReducer,
    auth: authReducer
});

const setupStore = () => configureStore({
    reducer: rootReducer
});

export {setupStore}