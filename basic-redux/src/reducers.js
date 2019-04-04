import { COLLAPSE_MENU } from './constants';

// create reducer with initial state
const initialState =  {
    menuCollapsed: false
}

export const homeReducer = (state=initialState, action={}) => {
    switch(action.type) {
        // receive an action
        case COLLAPSE_MENU:
            // return new state
            // like this
            return Object.assign({}, state, {menuCollapsed: action.payload})
            // or
            // return {...state, menuCollapsed: action.payload}
        default:
            return state
    }
 }