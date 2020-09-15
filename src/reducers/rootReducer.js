import { combineReducers } from 'redux';
import { newReducer } from './newReducer';

export const rootReducer = combineReducers({
	new: newReducer,
});
