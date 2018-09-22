import { GET_WAIT_TIMES } from '../constraints';
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

export default combineReducers({details});
