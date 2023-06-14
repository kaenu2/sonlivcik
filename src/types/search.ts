export interface ISearchState {
	term: string;
}

export enum ESearchActionType {
	UPDATE_TERM = 'UPDATE_TERM'
}

interface IUpdateTerm {
	type: ESearchActionType.UPDATE_TERM;
	payload: string;
}

export type TSearchAction = IUpdateTerm;
