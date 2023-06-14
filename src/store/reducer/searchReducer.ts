import {
	ESearchActionType,
	ISearchState,
	TSearchAction
} from '../../types/search';

const initialState: ISearchState = {
	term: ''
};

export const searchReducer = (
	state = initialState,
	action: TSearchAction
): ISearchState => {
	switch (action.type) {
		case ESearchActionType.UPDATE_TERM:
			return { ...state, term: action.payload };
		default:
			return state;
	}
};
