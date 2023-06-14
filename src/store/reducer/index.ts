import { combineReducers } from 'redux';
import { mattressesReducer } from './mattressesReducer';
import { searchReducer } from './searchReducer';

export const rootReducer = combineReducers({
	mattresses: mattressesReducer,
	search: searchReducer
});

export type RootState = ReturnType<typeof rootReducer>;
