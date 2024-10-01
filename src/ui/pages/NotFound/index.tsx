import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';

export default function NotFound() {

	useEffect(() => {
		console.log('Start NotFound');

		const event = new CustomEvent('changePage',{
			detail: {
				text: 'Página não encontrada'
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit NotFound');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
				Página não encontrada!!
			</ContentStyled>
		</ContainerStyled>
	)
}
