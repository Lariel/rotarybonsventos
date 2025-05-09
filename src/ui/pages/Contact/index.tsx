import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { Pages } from '@app/model/Pages';
import { PageStyled } from './styles';
import { social } from '@app/constants/constants';
import icon_instagram from '@assets/icon_instagram.svg';
import icon_linkedin from '@assets/icon_linkedin.svg';
import icon_mail from '@assets/icon_mail.svg';
import { validateFeature } from '@app/services/FeatureFlagService';
import { features } from '@app/model/Features';

export default function Contact() {

	useEffect(() => {
		console.log('Start Contact');

		validateFeature(features.contact.menu);

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.contact
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Contact');
		}
	}, []);
	return (
		<ContainerStyled className='container container-bg'>
			<ContentStyled className='content-responsive'>
			<PageStyled>
				<div className='contacts-grid'>
					<div className='vertical-rigth'>
						<div className='banner-rigth'></div>
					</div>
					<div className='first-square-left'>
						<div className='contact-channel'>
							<a href={social.instagram} target='_blank'>
								<img
									className='contact-icon'
									src={icon_instagram}
									alt='Acesse nosso Instagram' />
									@rotarybonsventos
							</a>
						</div>
					</div>
					<div className='second-square-left'>
						<div className='contact-channel'>
							<a href={social.linkedin} target='_blank'>
								<img
									className='contact-icon'
									src={icon_linkedin}
									alt='Acesse nosso LinkedIn' />
									rotary-club-de-osorio-bons-ventos
							</a>
						</div>
					</div>
					<div className='third-square-left'>
						<div className='contact-channel'>
							<a href={'mailto:'+social.email}>
								<img
									className='contact-icon'
									src={icon_mail}
									alt='Envie um e-mail' />
									rotarybonsventos@gmail.com
							</a>
						</div>
					</div>
					<div className='fourth-square-left'>
						<div className='contact-channel'>Rua Marechal Deodoro, nº 166. Osório - RS</div>
					</div>
				</div>
			</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
