import React from 'react';

import { SvgIcon } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

import './NumberColor.scss';

export const NumberColor = () => {
	return (
		<a
			href='tel:+79209195600'
			className='number'
		>
			<SvgIcon>
				<LocalPhoneIcon />
			</SvgIcon>
			+7 920 919-56-00
		</a>
	);
};
