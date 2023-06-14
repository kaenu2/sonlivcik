import { Dispatch } from 'redux';

import { ESearchActionType, TSearchAction } from '../../types/search';

export const changeTerm = (str: string) => {
	return (dispatch: Dispatch<TSearchAction>) => {
		dispatch({ type: ESearchActionType.UPDATE_TERM, payload: str });
	};
};
