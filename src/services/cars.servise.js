import {axiosService} from "./axios.service";
import {urls} from "../constants";

const carsService = {
    getInfo:()=> axiosService.get(urls.cars),
    create:(car)=> axiosService.post(urls.cars, car),
    update:(id, car)=> axiosService.put(`${urls.cars}/${id}`, car),
    deleteById:(id)=> axiosService.delete(urls.cars + '/' + id)
}

export {carsService}