import React from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesPage } from '../Categories/CategoriesPage';

export const CategoriePage = () => {
	const { name } = useParams();

	return <CategoriesPage str={name} />;
};
