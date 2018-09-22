import {GET_WAIT_TIMES} from '../constraints';
import axios from 'axios';

const BaseUrl = 'https://disneydashboardapi.herokuapp.com/api/'

export const getWaitTimes = (name) => {
    const request = axios.get(`${BaseUrl}wait_times/${name}`)
    return {
        type:GET_WAIT_TIMES,
        payload: request
    }
}

