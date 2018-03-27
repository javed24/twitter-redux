import logger from './logger';
import thunk from 'redux-thunk'; //takes care of action creators that return function instead of objects.
import {applyMiddleware} from 'redux';

export default applyMiddleware(thunk, logger)
