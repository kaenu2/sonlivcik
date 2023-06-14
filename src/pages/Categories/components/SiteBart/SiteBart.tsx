import React, { useState, ChangeEvent } from 'react';

import {
	Radio,
	FormControlLabel,
	RadioGroup,
	FormLabel,
	FormControl
} from '@mui/material/';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';

import './SiteBart.scss';
import { useActions } from '../../../../hooks/useActions';

export const SiteBart = ({
	value,
	setValue,
	setCurrentPage
}: {
	value: string;
	setValue: Function;
	setCurrentPage: Function;
}) => {
	const [open, setOpen] = useState(false);
	const { changeTerm } = useActions();

	const handleChange = (
		event: ChangeEvent<HTMLInputElement>,
		setValue: Function
	) => {
		setValue((event.target as HTMLInputElement).value);
	};

	return (
		<div className='site-bar'>
			<div className='site-bar__input'>
				<input
					type='search'
					placeholder='Поиск...'
					onChange={e => changeTerm(e.target.value)}
				/>
				<SearchIcon />
			</div>
			<div className='site-bar__list'>
				<FormControl className='site-bar__item'>
					<FormLabel
						onClick={() => setOpen(prev => !prev)}
						id='demo-controlled-radio-buttons-group'
						className='site-bar__label'
					>
						Жесткость{' '}
						<KeyboardArrowDownIcon
							style={
								open
									? { transform: 'rotate(180deg)' }
									: { transform: 'rotate(0)' }
							}
						/>
					</FormLabel>
					<RadioGroup
						aria-labelledby='demo-controlled-radio-buttons-group'
						name='controlled-radio-buttons-group'
						value={value}
						onChange={e => handleChange(e, setValue)}
						className={open ? '' : '_d-none'}
					>
						<FormControlLabel
							value='all'
							control={<Radio />}
							label='Все'
							onClick={() => setCurrentPage(1)}
						/>
						<FormControlLabel
							value='Мягкие'
							control={<Radio />}
							label='Мягкие'
							onClick={() => setCurrentPage(1)}
						/>
						<FormControlLabel
							value='Жесткие'
							control={<Radio />}
							label='Жесткие'
							onClick={() => setCurrentPage(1)}
						/>
						<FormControlLabel
							value='Средней жесткости'
							control={<Radio />}
							label='Средней жесткости'
							onClick={() => setCurrentPage(1)}
						/>
					</RadioGroup>
				</FormControl>
			</div>
		</div>
	);
};
