import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { Pages } from '@app/model/Pages';

export default function NotFound() {

	useEffect(() => {
		console.log('Start NotFound');

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.notFound
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
