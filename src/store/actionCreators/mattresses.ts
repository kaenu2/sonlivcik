import { Dispatch } from 'redux';
import axios from 'axios';

import {
	EMattressesActionType,
	TMattressesAction
} from '../../types/mattresses';

export const fetchMattresses = () => {
	return async (dispatch: Dispatch<TMattressesAction>) => {
		try {
			dispatch({ type: EMattressesActionType.FETCH_MATTRESSES });
			const response = await axios.get(
				'https://6481142b29fa1c5c50311e14.mockapi.io/sleepy'
			);
			dispatch({
				type: EMattressesActionType.FETCH_MATTRESSES_SUCCESS,
				payload: response.data
			});
		} catch (e) {
			dispatch({
				type: EMattressesActionType.FETCH_MATTRESSES_ERROR,
				payload: 'text error'
			});
		}
	};
};
