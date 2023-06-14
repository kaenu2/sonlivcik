import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import {
	ProductList,
	TheError,
	TheFooter,
	TheLoading,
	TheTitle
} from '../../components';
import { Breadcrumbs, Container, Pagination, Typography } from '@mui/material/';
import { ActivePanel, SiteBart } from './components';

import { useTypedSelector } from '../../hooks/useTypedSelector';

import { IMattresses } from '../../types/mattresses';

import './CategoriesPage.scss';

export const CategoriesPage = ({ str = null }: { str?: string | null }) => {
	const [activeSort, setActiveSort] = useState(0);

	const [visable, setVisable] = useState(false); // state

	const [value, setValue] = useState('all');

	const [currentPage, setCurrentPage] = useState(1); // state
	const [mattressesPerPage] = useState(6); // state

	const { term } = useTypedSelector(state => state.search);

	const { error, isLoading, mattresses } = useTypedSelector(
		state => state.mattresses
	);

	if (error) {
		return <TheError />;
	}

	const lastMattressesIndex = currentPage * mattressesPerPage;
	const firstMattressesIndex = lastMattressesIndex - mattressesPerPage;

	const visbaleMattresses = mattresses.filter(elem =>
		value === 'all' ? elem : elem.rigidity === value
	);

	const products = (str: string | null): IMattresses[] => {
		switch (str) {
			case 'elit':
				const arr = visbaleMattresses.filter(elem => elem.categorie === 'Elit');
				return arr;
			case 'komfort':
				const arr2 = visbaleMattresses.filter(
					elem => elem.categorie === 'Komfort'
				);
				return arr2;
			case 'springless':
				const arr3 = visbaleMattresses.filter(
					elem => elem.categorie === 'Springless'
				);
				return arr3;
			case 'children':
				const arr4 = visbaleMattresses.filter(
					elem => elem.categorie === 'Children'
				);
				return arr4;
			case 'ekonom':
				const arr5 = visbaleMattresses.filter(
					elem => elem.categorie === 'Ekonom'
				);
				return arr5;
			case 'premium':
				const arr6 = visbaleMattresses.filter(
					elem => elem.categorie === 'Premium'
				);
				return arr6;
			default:
				return visbaleMattresses;
		}
	};

	const search = (product: IMattresses[], term: string): IMattresses[] => {
		if (!term.length) {
			return product;
		}
		console.log(1);

		return product.filter(
			item =>
				item.name.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
				item.categorie.toLowerCase().indexOf(term.toLowerCase()) > -1 ||
				item.base.toLowerCase().indexOf(term.toLowerCase()) > -1
		);
	};

	const sortMattresses = (id: number, mattresses: IMattresses[]) => {
		switch (id) {
			case 1:
				return mattresses.sort((a, b) => {
					return b.price[0] - a.price[0];
				});
			default:
				return mattresses.sort((a, b) => {
					console.log(a.price[0] - b.price[0]);
					return a.price[0] - b.price[0];
				});
		}
	};

	const currentMattresses = sortMattresses(
		activeSort,
		search(products(str), term)
	).slice(firstMattressesIndex, lastMattressesIndex);

	return (
		<>
			<main className='page page__categories categories-page'>
				<TheTitle>Каталог</TheTitle>
				<Container maxWidth='xl'>
					<Breadcrumbs
						aria-label='breadcrumb'
						className='categories-page__nav nav'
					>
						<Link to='/'>Сонливчик</Link>
						{str !== null ? <Link to='/categories/'>Каталог</Link> : ''}
						<Typography color='text.primary'>
							{str === null ? 'Каталог' : str}
						</Typography>
					</Breadcrumbs>
					<ActivePanel
						visable={visable}
						activeSort={activeSort}
						setVisable={setVisable}
						setActiveSort={setActiveSort}
					/>
					<div className='categories-page__group'>
						<SiteBart
							setValue={setValue}
							value={value}
							setCurrentPage={setCurrentPage}
						/>
						{isLoading ? (
							<TheLoading />
						) : (
							<div className='categories-page__content'>
								<ProductList
									mattresses={currentMattresses}
									visable={visable}
								/>
								{Math.ceil(search(products(str), term).length / 6) <= 1 ? (
									''
								) : (
									<Pagination
										count={Math.ceil(search(products(str), term).length / 6)}
										page={currentPage}
										onChange={(_, num) => setCurrentPage(num)}
										className='categories-page__pagination'
									/>
								)}
							</div>
						)}
					</div>
				</Container>
			</main>
			<TheFooter />
		</>
	);
};
