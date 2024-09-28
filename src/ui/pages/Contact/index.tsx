import { useContext, useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { PageDescriptionContext } from '../../../App';

export default function Contact() {

	const { onchangeDescription } = useContext(PageDescriptionContext);

	useEffect(() => {
		console.log('Start Contact');

		onchangeDescription('Nossos Contatos')

		return () => {
			console.log('Exit Contact');
		}
	}, []);
	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-desktop'>
				Informações de contado do clube
			</ContentStyled>
		</ContainerStyled>
	)
}
