import * as MattressesActionCreator from './mattresses';
import * as SearchActionCreator from './search';

export default {
	...MattressesActionCreator,
	...SearchActionCreator
};
