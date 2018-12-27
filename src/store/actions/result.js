import * as actionTypes from './actionTypes';

export const storeResult = (result) => {
    return dispatch => {
        setTimeout(() => {
            dispatch(postStoreResult(result));
        }, 2000);
    }
};
const postStoreResult = result => {
    // can update or transform data here but recommended to update/transform in reducer.
    // "reducer updates the state"
    // const updatedResult = result*2;
    return {
        type: actionTypes.STORE_RESULT,
        result: result
    }
};
export const deleteResult = (id) => {
    return {
        type: actionTypes.DELETE_RESULT,
        resultElId: id
    }
};
