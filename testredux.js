
const redux = require('redux');

const initialState = {
    counter: 0
}

const rootReducer = (state = initialState, action) => {
    let counter = state.counter;
    if (action.type === 'INC_COUNTER') {
        counter = counter + 1;
    }
    if (action.type === 'ADD_COUNTER') {
        counter = counter + action.value;
    }
    return { ...state, counter };
}

const createStore = redux.createStore;

const store = createStore(rootReducer);

store.subscribe(() => {
    console.log('[Subscription]', store.getState());
});

console.log(store.getState());
store.dispatch({ type: 'INC_COUNTER' });
store.dispatch({ type: 'ADD_COUNTER', value: 10 });
console.log(store.getState());

