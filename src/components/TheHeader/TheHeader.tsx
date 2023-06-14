import { Link } from 'react-router-dom';
import { Container } from '@mui/material';

import './TheHeader.scss';

export const TheHeader = () => {
	return (
		<header className='header'>
			<Container maxWidth='xl'>
				<div className='header__group'>
					<Link
						to={'/'}
						className='header__logo'
					>
						Сонливчик
					</Link>
					<a
						href='tel:+79209195600'
						className='header__tel'
					>
						<strong>+7 920 919-56-00</strong>
						<p>прямая консультация с менедежером продаж</p>
					</a>
				</div>
			</Container>
		</header>
	);
};
