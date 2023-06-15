import React, { useState } from 'react';

import './Tabs.scss';
import { IMattresses } from '../../../../types/mattresses';
import { Button, ButtonGroup } from '@mui/material';

export const TabsBlock = ({ elem }: { elem: IMattresses }) => {
	const [tab, setTab] = useState(1);
	const [value, setValue] = useState(0);
	const {
		base,
		case: caseElem,
		categorie,
		descr,
		height,
		load,
		name,
		price,
		rigidity,
		size
	} = elem;

	const changeNumber = (num: number) => {
		if (num <= 10000) {
			return num - 200;
		}
		if (num > 10000 && num <= 20000) {
			return num - 500;
		}
		if (num > 20000) {
			return num - 1000;
		}
	};

	const onTab = (id: number) => {
		setTab(id);
	};

	return (
		<div className='tabs'>
			<div className='tabs__header'>
				<ul>
					<li
						onClick={() => onTab(1)}
						className={tab === 1 ? 'tabs__item _active' : 'tabs__item'}
					>
						О товаре
					</li>
					<li
						onClick={() => onTab(2)}
						className={tab === 2 ? 'tabs__item _active' : 'tabs__item'}
					>
						Описание
					</li>
				</ul>
			</div>
			<div className='tabs__content'>
				<div className={tab === 1 ? 'tabs__info _active' : 'tabs__info'}>
					<div className='tabs__text'>
						<p>
							Матрас <strong>{name}</strong>
						</p>
					</div>
					<div className='tabs__text'>
						<p>
							Категория <strong>{categorie}</strong>
						</p>
					</div>
					<div className='tabs__text'>
						<p>
							Высота матраса <strong>{height}</strong>
						</p>
					</div>
					<div className='tabs__text'>
						<p>
							Оптимальная нагрузка на одно спальное место мах нагрузка{' '}
							<strong>{load + 'кг'}</strong>.
						</p>
					</div>
					<div className='tabs__text'>
						<p>
							Стандартный чехол матраса <strong>{caseElem}</strong>
						</p>
					</div>
					<div className='tabs__text'>
						<p>
							Основание матраса
							<strong>{base}</strong>
						</p>
					</div>
					<div className='tabs__text btn-container'>
						<p>Размеры</p>
						<ButtonGroup
							variant='text'
							aria-label='outlined primary button group'
							className='btn-container__btns'
						>
							{size.map((btn, i) => {
								if (i === value) {
									return (
										<Button
											variant='contained'
											key={btn}
											onClick={() => setValue(i)}
										>
											{btn}
										</Button>
									);
								} else {
									return (
										<Button
											variant='outlined'
											key={btn}
											onClick={() => setValue(i)}
										>
											{btn}
										</Button>
									);
								}
							})}
						</ButtonGroup>
					</div>
					<div className='tabs__text'>
						<p>
							Жесткость <strong>{rigidity}</strong>
						</p>
					</div>
					<div className='tabs__text text__price'>
						<p>
							<strong>{changeNumber(price[value])}</strong> &#8381;
						</p>
					</div>
				</div>
				<div
					className={
						tab === 2
							? 'tabs__info _active text__desc'
							: 'tabs__info text__desc'
					}
				>
					<p>{descr}</p>
				</div>
			</div>
		</div>
	);
};
