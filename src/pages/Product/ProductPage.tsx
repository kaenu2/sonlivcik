import React from 'react';
import { Link, useParams } from 'react-router-dom';

import { Container, Typography, Breadcrumbs } from '@mui/material';
import { TabsBlock } from './components';

import './ProductPage.scss';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { TheError, TheLoading } from '../../components';

export const ProductPage = () => {
	const { id: param, name: paramName } = useParams();
	const { error, isLoading, mattresses } = useTypedSelector(
		state => state.mattresses
	);

	if (error) {
		return <TheError />;
	}

	if (isLoading) {
		return <TheLoading />;
	} else {
		const elem = mattresses.filter(elem => elem.id === Number(param))[0];
		return (
			<main className='page page__product product-page'>
				<section>
					<Container maxWidth='xl'>
						<Breadcrumbs
							aria-label='breadcrumb'
							className='product-page__nav nav'
						>
							<Link to='/'>Сонливчик</Link>
							<Link to='/categories/'>Каталог</Link>
							<Link to={`/categories/${paramName}`}>{paramName}</Link>
							<Typography color='text.primary'>{elem.name}</Typography>
						</Breadcrumbs>
						<div className='product-page__group'>
							<div className='product-page__img'>
								<img
									src={process.env.PUBLIC_URL + elem.src}
									alt={''}
								/>
							</div>
							<TabsBlock elem={elem} />
						</div>
					</Container>
				</section>
			</main>
		);
	}
};
