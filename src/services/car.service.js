import {axiosService} from "./axios.service";

import {urls} from "../constants";
import {authService} from "./auth.service";

const carService = {
    getAll: (page=1) => axiosService.get(urls.cars, {params:{page}}/*, {
        headers: {
            Authorization: `Bearer ${authService.getAccessToken()}`
        }
    }*/),
    updateById: (id, data)=> axiosService.put(`${urls.cars}/${id}`, data    ),
    // create:(car)=> axiosService.post(urls.cars, car),
    // update:(id, car)=> axiosService.put(`${urls.cars}/${id}`, car),
    deleteById: (id) => axiosService.delete(urls.cars + '/' + id)
}

export {carService}