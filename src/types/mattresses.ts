export interface IMattressesState {
	mattresses: IMattresses[];
	isLoading: boolean;
	error: null | string;
}

export interface IMattresses {
	id: number;
	categorie: string;
	name: string;
	src: string;
	price: number[];
	height: number;
	load: number;
	case: string;
	internal: string;
	base: string;
	size: string[];
	rigidity: string;
	descr: string;
}

export enum EMattressesActionType {
	FETCH_MATTRESSES = 'FETCH_MATTRESSES',
	FETCH_MATTRESSES_SUCCESS = 'FETCH_MATTRESSES_SUCCESS',
	FETCH_MATTRESSES_ERROR = 'FETCH_MATTRESSES_ERROR'
}
interface IFetchMattressesAction {
	type: EMattressesActionType.FETCH_MATTRESSES;
}
interface IFetchMattressesSuccessAction {
	type: EMattressesActionType.FETCH_MATTRESSES_SUCCESS;
	payload: [];
}
interface IFetchMattressesErrorAction {
	type: EMattressesActionType.FETCH_MATTRESSES_ERROR;
	payload: string;
}

export type TMattressesAction =
	| IFetchMattressesAction
	| IFetchMattressesSuccessAction
	| IFetchMattressesErrorAction;
