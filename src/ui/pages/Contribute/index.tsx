import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles'

export default function Contribute() {

	useEffect(() => {
		console.log('Start Contribute');

		const event = new CustomEvent('changePageDescription',{
			detail: {
				text: 'Contribua'
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Contribute');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
				Conteúdo da página Contribua
			</ContentStyled>
		</ContainerStyled>
	)
}
