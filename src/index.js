import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux';
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

const store = createStore(rootReducer, applyMiddleware(logger2));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
