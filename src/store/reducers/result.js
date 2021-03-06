import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    results: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT:
            // change data
            return updateObject(state, { results: state.results.concat({ id: new Date(), val: action.result * 2 }) });
        case actionTypes.DELETE_RESULT:
            // const id = 2;
            // newArray = [...state.results];
            // newArray.splice(id, 1); 
            const updatedArray = state.results.filter((result) => result.id !== action.resultElId);
            return updateObject(state, { results: updatedArray });
    }
    return state;
}

export default reducer;
