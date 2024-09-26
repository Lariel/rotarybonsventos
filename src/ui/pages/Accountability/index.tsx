import { useContext, useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { PageDescriptionContext } from '../../../App';

export default function Accountability() {

	const { onchangeDescription } = useContext(PageDescriptionContext);

	useEffect(() => {
		console.log('Start Accountability');

		onchangeDescription('Prestação de contas')

		return () => {
			console.log('Exit Accountability');
		}
	}, []);

	return (
		<ContainerStyled className='container-desktop'>
			<ContentStyled className='content-desktop'>
				Conteúdo da página de prestação de contas
			</ContentStyled>
		</ContainerStyled>
	);
}
