import React from 'react';
import { Link } from 'react-router-dom';

import { Button, Container, SvgIcon } from '@mui/material';
import { NumberColor } from '../../../../components';

import './Promo.scss';

export const Promo = () => {
	return (
		<section className='home-page__promo promo-home'>
			<Container maxWidth='xl'>
				<div className='promo-home__group'>
					<div className='promo-home__info'>
						<h1>Промо</h1>
						<h2>
							<span>Сонливчик</span> - мы знаем все о матрасах и поможем тебе
							выбрать идеальную модель.
						</h2>
						<Link
							className='promo-home__button'
							to={'/categories'}
						>
							Каталог
						</Link>
					</div>
					<div className='promo-home__img'>
						<img
							className='img-bed'
							src={process.env.PUBLIC_URL + '/images/home/promo/bed.png'}
							alt='Задний фон кровать'
						/>
					</div>
					<NumberColor />
				</div>
			</Container>
		</section>
	);
};
