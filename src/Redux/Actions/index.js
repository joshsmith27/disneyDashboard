import {
    GET_WAIT_TIMES, 
    UPDATE_PARKS, 
    UPDATE_BEST_PARK, 
    UPDATE_MAGIC_KINGDOM, 
    UPDATE_EPCOT,
    UPDATE_HOLLYWOOD_STUDIOS,
    UPDATE_ANIMAL_KINGDOM,
} from '../constraints';

import axios from 'axios';

const BaseUrl = 'https://disneydashboardapi.herokuapp.com/api/'

export const getWaitTimes = (name) => {
    const request = axios.get(`${BaseUrl}wait_times/${name}`)
    return {
        type:GET_WAIT_TIMES,
        payload: request
    }
}

export const setWaitTimes = (name, payload) => {
    switch(name){
        case 'disneyEpcot':
            return{
                type: UPDATE_EPCOT,
                payload,
            }
        case 'disneyMagicKingdom':
            return{
                type: UPDATE_MAGIC_KINGDOM,
                payload,
            }
        case 'disneyAnimalKingdom':
            return{
                type: UPDATE_ANIMAL_KINGDOM,
                payload,
            }
        case 'disneyHollywoodStudios':
            return{
                type: UPDATE_HOLLYWOOD_STUDIOS,
                payload,
            }
        default:
        break;
    }
}

export const updateParks = (payload) => {
    return{
        type:UPDATE_PARKS,
        payload,
    }
}

export const updateBestPark = (payload) => {
    return{
        type:UPDATE_BEST_PARK,
        payload,
    }
}

export const updateMagicKingdom = (payload) => {
    return{
        type:UPDATE_MAGIC_KINGDOM,
        payload,
    }
}

export const updateEpcot = (payload) => {
    return{
        type:UPDATE_EPCOT,
        payload,
    }
}

export const updateAnimalKingdom = (payload) => {
    return{
        type:UPDATE_HOLLYWOOD_STUDIOS,
        payload,
    }
}

export const updateHollywoodStudios = (payload) => {
    return{
        type:UPDATE_ANIMAL_KINGDOM,
        payload,
    }
}