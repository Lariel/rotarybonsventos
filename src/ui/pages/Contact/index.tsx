import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';

export default function Contact() {

	useEffect(() => {
		console.log('Start Contact');

		const event = new CustomEvent('changePage',{
			detail: {
				text: 'Nossos contatos'
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
				Informações de contado do clube
			</ContentStyled>
		</ContainerStyled>
	)
}
