import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { Pages } from '@app/model/Pages';
import { ContactPageStyled } from './styles';
import PageIntro from '@app/components/PageIntro';

export default function Contact() {

	useEffect(() => {
		console.log('Start Contact');

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
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
			<PageIntro intro='Aqui você encontra nossas redes sociais, canais de contato e endereço físico'/>
			<ContactPageStyled>
				<div className='contacts-grid'>
					<div className='vertical-rigth'></div>
					<div className='first-square-left'>
						<div className='contact-channel'>Instagram</div>
					</div>
					<div className='second-square-left'>
						<div className='contact-channel'>LinkedIn</div>
					</div>
					<div className='third-square-left'>
						<div className='contact-channel'>Email</div>
					</div>
					<div className='fourth-square-left'>
						<div className='contact-channel'>Sede</div>
					</div>
				</div>
			</ContactPageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
