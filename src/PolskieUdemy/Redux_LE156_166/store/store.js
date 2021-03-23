import {applyMiddleware, createStore } from 'redux';
import {validateAuthorMiddleware} from '../middleware/validateAuthorMiddleware'
import {rootReducer} from '../Reducers/rootReducer'


const store = createStore(
    rootReducer,
    applyMiddleware(validateAuthorMiddleware)
    );

export default store;