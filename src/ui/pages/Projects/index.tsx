import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';

export default function Projects() {

	useEffect(() => {
		console.log('Start Projects');

		const event = new CustomEvent('changePage',{
			detail: {
				text: 'Nossos projetos'
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Projects');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
				Projetos do clube
			</ContentStyled>
		</ContainerStyled>
	)
}
