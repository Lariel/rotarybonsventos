import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { Pages } from '@app/model/Pages';
import { PageStyled } from './styles';

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
				<PageStyled>
					Página não encontrada!!
				</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
