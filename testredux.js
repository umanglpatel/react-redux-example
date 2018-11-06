
const redux = require('redux');

const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    return state;
}

const createStore = redux.createStore;

const store = createStore(rootReducer);

console.log(store.getState());


