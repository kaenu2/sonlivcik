import React, { useState } from 'react';
import { TheTitle } from '../../../../components';

import {
	Typography,
	AccordionDetails,
	AccordionSummary,
	Accordion,
	Container
} from '@mui/material/';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import './Advantages.scss';

export const Advantages = () => {
	const [expanded, setExpanded] = useState<string | false>(false);

	const handleChange =
		(panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
			setExpanded(isExpanded ? panel : false);
		};

	return (
		<section className='home-page__advantages advantages-home'>
			<TheTitle>Почему выбирают нас</TheTitle>
			<Container maxWidth='xl'>
				<div className='advantages-home__acardion'>
					<Accordion
						expanded={expanded === 'panel1'}
						onChange={handleChange('panel1')}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1bh-content'
							id='panel1bh-header'
						>
							<Typography
								sx={{ color: 'text.secondary' }}
								className='advantages-home__name'
							>
								Бесплатная и быстрая доставка
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography className='advantages-home__info'>
								Бесплатная и быстрая доставка по Москве и Санк-Петербургу за 10
								дней до вашего адреса осуществляется бесплатно.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === 'panel2'}
						onChange={handleChange('panel2')}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1bh-content'
							id='panel1bh-header'
						>
							<Typography
								sx={{ color: 'text.secondary' }}
								className='advantages-home__name'
							>
								Качество
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography className='advantages-home__info'>
								Все наши материалы сертифицированы и имеют сертификаты качества.
							</Typography>
						</AccordionDetails>
					</Accordion>
					<Accordion
						expanded={expanded === 'panel3'}
						onChange={handleChange('panel3')}
					>
						<AccordionSummary
							expandIcon={<ExpandMoreIcon />}
							aria-controls='panel1bh-content'
							id='panel1bh-header'
						>
							<Typography
								sx={{ color: 'text.secondary' }}
								className='advantages-home__name'
							>
								Цены от производителя
							</Typography>
						</AccordionSummary>
						<AccordionDetails>
							<Typography className='advantages-home__info'>
								Вам не придется переплачивать. Вы получите самую хорошую цену в
								Москве и Санк-Петербурге. Цены от производителя.
							</Typography>
						</AccordionDetails>
					</Accordion>
				</div>
			</Container>
		</section>
	);
};
