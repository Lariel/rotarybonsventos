import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { PageDescriptionContext } from '../../../App';
import { useContext, useEffect } from 'react';

export default function NotFound() {
	const { onchangeDescription } = useContext(PageDescriptionContext);

	useEffect(() => {
		console.log('Start NotFound');

		onchangeDescription('Página não encontrada')

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
