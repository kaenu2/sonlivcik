import React, { useState, ChangeEvent } from 'react';

import {
	FormControl,
	FormLabel,
	RadioGroup,
	FormControlLabel,
	Radio
} from '@mui/material/';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import ViewListIcon from '@mui/icons-material/ViewList';

import './ActivePanel.scss';

export const ActivePanel = ({
	visable,
	activeSort,
	setVisable,
	setActiveSort
}: {
	visable: boolean;
	activeSort: number;
	setVisable: Function;
	setActiveSort: Function;
}) => {
	const data = [
		{ id: 1, teg: 'min', label: 'Сначала недорогие' },
		{ id: 2, teg: 'max', label: 'Сначала дорогие' }
	];
	const [open, setOpen] = useState(false);
	return (
		<div className='active-panel'>
			<FormControl>
				<FormLabel
					id='demo-radio-buttons-group-label'
					className='active-panel__info'
					onClick={() => setOpen(prev => !prev)}
				>
					<p className='active-panel__modal'>
						Сортировка:
						<span>
							{data[activeSort].label} <KeyboardArrowDownIcon />
						</span>
					</p>
				</FormLabel>
				<RadioGroup
					aria-labelledby='demo-radio-buttons-group-label'
					defaultValue='Сначала недорогие'
					name='radio-buttons-group'
					className={
						open
							? 'active-panel__modal-dialog _active'
							: 'active-panel__modal-dialog'
					}
				>
					{data.map((elem, i) => {
						const { id, label } = elem;
						return (
							<FormControlLabel
								key={id}
								control={<Radio />}
								label={label}
								value={label}
								onClick={() => setActiveSort(i)}
							/>
						);
					})}
				</RadioGroup>
			</FormControl>
			<div className='active-panel__visable'>
				<ViewModuleIcon
					className={visable ? '' : '_active'}
					onClick={() => setVisable(false)}
				/>
				<ViewListIcon
					className={visable ? '_active' : ''}
					onClick={() => setVisable(true)}
				/>
			</div>
		</div>
	);
};
