export const SET_ITEM = 'SET_ITEM';
export const SET_NAME = 'SET_NAME';


export const setItems = items => dispatch => {
    dispatch({
        type: SET_ITEM,
        payload: items,
    });
}
export const setName = name => dispatch => {
    dispatch({
        type: SET_NAME,
        payload: items,
    });
}

