import React from 'react';
import { Advantages, Categories, Promo } from './sections';
import { TheFooter } from '../../components';

export const HomePage = () => {
	return (
		<>
			<main className='page page__home home-page'>
				<Promo />
				<Categories />
				<Advantages />
			</main>
			<TheFooter />
		</>
	);
};
