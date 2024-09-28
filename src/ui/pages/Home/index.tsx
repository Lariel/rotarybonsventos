import { useContext, useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { PageDescriptionContext } from '../../../App';

export default function Home() {

	const { onchangeDescription } = useContext(PageDescriptionContext);

	useEffect(() => {
		console.log('Start Home');

		onchangeDescription('Sobre nós')

		return () => {
			console.log('Exit Home');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-desktop'>
				Home
			</ContentStyled>
		</ContainerStyled>
	)
}
