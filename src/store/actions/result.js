import * as actionTypes from './actionTypes';

export const storeResult = (result) => {
    return (dispatch, getState) => {
        setTimeout(() => {
            // can get state here and use it but recommended not to.
            // pass data needed from components i.e. just as result is being passed here
            // const oldCounter = getState().ctr.counter;
            // console.log(oldCounter);
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
