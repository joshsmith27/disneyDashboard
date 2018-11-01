import {
    GET_WAIT_TIMES, 
    UPDATE_PARKS, 
    UPDATE_BEST_PARK, 
    UPDATE_MAGIC_KINGDOM, 
    UPDATE_EPCOT,
    UPDATE_HOLLYWOOD_STUDIOS,
    UPDATE_ANIMAL_KINGDOM,
} from '../constraints';

import { combineReducers } from 'redux';

const details = (state={}, action) => {
    switch(action.type){
        case `${GET_WAIT_TIMES}_PENDING`:
            return state;
        case `${GET_WAIT_TIMES}_FULFILLED`:
            return action.payload.data;
        case `${GET_WAIT_TIMES}_REJECTED`:
            return state;
        default:
            return state;
    }
}

const Parks = (state=[], action) => {
    switch(action.type){
        case `${UPDATE_PARKS}`:
            return action.payload;
        default:
            return state;
    }
}

const BestPark = (state={}, action) => {
    switch(action.type){
        case `${UPDATE_BEST_PARK}`:
            return action.payload;
        default:
            return state;
    }
}

const disneyMagicKingdom = (state={}, action) => {
    switch(action.type){
        case `${UPDATE_MAGIC_KINGDOM}`:
            return action.payload;
        default:
            return state;
    }
}

const disneyEpcot = (state={}, action) => {
    switch(action.type){
        case `${UPDATE_EPCOT}`:
            return action.payload;
        default:
            return state;
    }
}

const disneyHollywoodStudios = (state={}, action) => {
    switch(action.type){
        case `${UPDATE_HOLLYWOOD_STUDIOS}`:
            return action.payload;
        default:
            return state;
    }
}

const disneyAnimalKingdom  = (state={}, action) => {

    switch(action.type){
        case `${UPDATE_ANIMAL_KINGDOM}`:
            return action.payload;
        default:
            return state;
    }
}

export default combineReducers({
        details, 
        Parks, 
        disneyHollywoodStudios, 
        disneyAnimalKingdom, 
        disneyEpcot, 
        disneyMagicKingdom,
        BestPark
    });
