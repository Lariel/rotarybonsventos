import { useContext, useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { PageDescriptionContext } from '../../../App';

export default function Projects() {

	const { onchangeDescription } = useContext(PageDescriptionContext);

	useEffect(() => {
		console.log('Start Projects');

		onchangeDescription('Nossos projetos')

		return () => {
			console.log('Exit Projects');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-desktop'>
				Projetos do clube
			</ContentStyled>
		</ContainerStyled>
	)
}
