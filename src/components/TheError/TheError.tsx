import React from 'react';

import './TheError.scss';

const errorMessage = 'Упс... Что-то пошло не так!';

export const TheError = ({ str = errorMessage }: { str?: string }) => {
	return (
		<main className='page page-error'>
			<section className='page-error__sect'>
				<h1>{str}</h1>
			</section>
		</main>
	);
};
