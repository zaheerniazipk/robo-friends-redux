import { CHANGE_SEARCH_FIELD } from './constants';

const initialState = {
    SearchField: ''
}

// Reducer for Search Robots
export const searchRobots = (state = initialState, action = {}) => {
    // console.log(action.type);
    switch (action.type) {
        case CHANGE_SEARCH_FIELD:
            return Object.assign({}, state, { SearchField: action.payload });
        default:
            return state;
    }
}