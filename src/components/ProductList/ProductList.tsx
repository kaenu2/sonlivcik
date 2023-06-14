import React from 'react';

import { IMattresses } from '../../types/mattresses';
import { ProductItem } from '../ProductItem/ProductItem';

import './ProductList.scss';

export const ProductList = ({
	mattresses,
	visable = false
}: {
	mattresses: IMattresses[];
	visable?: boolean;
}) => {
	return (
		<div className='categories-page__list'>
			{mattresses.map((elem, i) => {
				return (
					<ProductItem
						delay={i}
						key={elem.id}
						elem={elem}
						visable={visable}
					/>
				);
			})}
		</div>
	);
};
