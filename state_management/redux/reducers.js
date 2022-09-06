import { SET_ITEM, SET_NAME } from './actions';

const initialState = {
    items: [],
    name: '',
}

function useReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ITEM : return {...state, item: action.payload};
        case SET_NAME : return {...state, name: action.payload};
        default: return state;
    }
}

export default useReducer;