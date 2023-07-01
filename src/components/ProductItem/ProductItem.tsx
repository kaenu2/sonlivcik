import React from 'react';
import { Link } from 'react-router-dom';

import { IMattresses } from '../../types/mattresses';

import './ProductItem.scss';

export const ProductItem = ({
	visable,
	elem,
	delay
}: {
	visable: boolean;
	elem: IMattresses;
	delay: number;
}) => {
	const changeNumber = (num: number) => {
		if (num >= 20000) {
			return num - 500;
		}
	};

	const { categorie, height, id, internal, name, price, rigidity, src } = elem;
	return (
		<div
			className={visable ? 'product-visable-list' : 'product'}
			style={{ animationDelay: `${delay / 10}s` }}
		>
			<Link
				to={`/categories/${categorie}/${id}`}
				className='product__img'
			>
				<img
					src={process.env.PUBLIC_URL + src}
					alt={name}
					height={190}
				/>
			</Link>
			<div className='product__info'>
				<Link
					to={`/categories/${categorie}/${id}`}
					className='product__name'
				>
					{name}
				</Link>
				<p className='product__des product__text'>{internal}</p>
				<div className='product__height product__text'>
					<p>
						Высота матраса: <strong>{height}</strong>
					</p>
				</div>
				<div className='product__rigidity product__text'>
					<p>
						Жесткость: <strong>{rigidity}</strong>
					</p>
				</div>
				<div className={visable ? 'd-none' : 'product__price product__text'}>
					<p>
						<strong>{price[0]}</strong> &#8381;
					</p>
					<Link to={`/categories/${categorie}/${id}`}>Подробнее</Link>
				</div>
			</div>
			{visable ? (
				<div className='product__price product__text visable-list'>
					<p>
						<strong>{price[0]}</strong> &#8381;
					</p>
					<Link to={`/categories/${categorie}/${id}`}>Подробнее</Link>
				</div>
			) : (
				''
			)}
		</div>
	);
};
