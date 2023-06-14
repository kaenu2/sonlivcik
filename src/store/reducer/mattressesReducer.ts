import {
	EMattressesActionType,
	IMattressesState,
	TMattressesAction
} from '../../types/mattresses';

const initialState: IMattressesState = {
	mattresses: [],
	error: null,
	isLoading: true
};

export const mattressesReducer = (
	state = initialState,
	action: TMattressesAction
): IMattressesState => {
	switch (action.type) {
		case EMattressesActionType.FETCH_MATTRESSES:
			return { ...state, isLoading: true };
		case EMattressesActionType.FETCH_MATTRESSES_SUCCESS:
			return {
				...state,
				isLoading: false,
				mattresses: action.payload,
				error: null
			};
		case EMattressesActionType.FETCH_MATTRESSES_ERROR:
			return { ...state, isLoading: false, error: action.payload };
		default:
			return state;
	}
};
