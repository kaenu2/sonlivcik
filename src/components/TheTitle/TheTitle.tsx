import React from 'react';
import { Container } from '@mui/material';

import './TheTitle.scss';

export const TheTitle = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className='title'>
			<Container maxWidth='xl'>
			<h1>{children}</h1>
			</Container>
		</div>
	);
};
