import { useContext, useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles'
import { PageDescriptionContext } from '../../../App';

export default function Contribute() {

	const { onchangeDescription } = useContext(PageDescriptionContext);

	useEffect(() => {
		console.log('Start Contribute');

		onchangeDescription('Contribua')

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
