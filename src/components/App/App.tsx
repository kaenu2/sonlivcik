import React, { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

import { useActions } from '../../hooks/useActions';

import {
	CategoriePage,
	CategoriesPage,
	HomePage,
	NotFound,
	ProductPage
} from '../../pages';

import { TheHeader } from '../';

import './App.scss';

export const App = () => {
	const { fetchMattresses } = useActions();

	useEffect(() => {
		fetchMattresses();
	}, []);

	return (
		<>
			<TheHeader />
			<Routes>
				<Route
					path='x'
					element={<HomePage />}
				/>
				<Route
					path='/categories'
					element={<CategoriesPage />}
				/>
				<Route
					path='/categories/:name'
					element={<CategoriePage />}
				/>
				<Route
					path='/categories/:name/:id'
					element={<ProductPage />}
				/>
				<Route
					path='*'
					element={<NotFound />}
				/>
			</Routes>
		</>
	);
};
