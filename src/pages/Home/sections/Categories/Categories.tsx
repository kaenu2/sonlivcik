import { Link } from 'react-router-dom';

import { Container } from '@mui/material';
import { TheTitle } from '../../../../components';

import './Categories.scss';

export const Categories = () => {
	return (
		<section className='categories'>
			<TheTitle>Каталог наших изделий</TheTitle>
			<Container maxWidth='xl'>
				<div className='categories__list'>
					<Link
						to={'/categories/elit'}
						className='categories__item1 item'
					>
						<img
							src={process.env.PUBLIC_URL + '/images/home/categories/elit.jpg'}
							alt='Элит'
						/>
						<h2>Серия Элит</h2>
					</Link>
					<Link
						to={'/categories/komfort'}
						className='categories__item2 item'
					>
						<img
							src={
								process.env.PUBLIC_URL + '/images/home/categories/komfort.jpg'
							}
							alt='Комфорт'
						/>
						<h2>Серия Комфорт</h2>
					</Link>
					<Link
						to={'/categories/springless'}
						className='categories__item3 item'
					>
						<img
							src={
								process.env.PUBLIC_URL +
								'/images/home/categories/springless.jpg'
							}
							alt='Беспружинные'
						/>
						<h2>Серия Беспружинные</h2>
					</Link>
					<Link
						to={'/categories/children'}
						className='categories__item4 item'
					>
						<img
							src={
								process.env.PUBLIC_URL + '/images/home/categories/children.jpg'
							}
							alt='Детские'
						/>
						<h2>Детские</h2>
					</Link>
					<Link
						to={'/categories/ekonom'}
						className='categories__item5 item'
					>
						<img
							src={
								process.env.PUBLIC_URL + '/images/home/categories/ekonom.jpg'
							}
							alt='Эконом'
						/>
						<h2>Серия Эконом</h2>
					</Link>
					<Link
						to={'/categories/premium'}
						className='categories__item6 item'
					>
						<img
							src={
								process.env.PUBLIC_URL + '/images/home/categories/premium.jpg'
							}
							alt='Премиум'
						/>
						<h2>Серия Премиум</h2>
					</Link>
				</div>
			</Container>
		</section>
	);
};
