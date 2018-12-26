import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';

import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import counterReducer from './store/reducers/counter';
import resultReducer from './store/reducers/result';

const rootReducer = combineReducers({
    ctr: counterReducer,
    res: resultReducer
})

const logger = store => {
    return next => {
        return action => {
            console.log('[Middleware] dispatching : ', action, 'state before ', store.getState());
            const result = next(action);
            console.log('[Middleware] dispatched : ', action, 'state after ', store.getState());
            return result;
        }
    }
}

// alternate way ols js
const logger2 = function (store) {
    return function (next) {
        return function (action) {
            console.log('[Middleware] dispatching : ', action, 'state before ', store.getState());
            const result = next(action);
            console.log('[Middleware] dispatched : ', action, 'state after ', store.getState());
            return result;
        }
    }
}

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(rootReducer, composeEnhancer(applyMiddleware(logger)));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
