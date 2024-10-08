import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles'
import PageIntro from '@app/components/PageIntro';

export default function Contribute() {

	useEffect(() => {
		console.log('Start Contribute');

		const event = new CustomEvent('changePage',{
			detail: {
				text: 'Contribua'
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Contribute');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
			<PageIntro
					intro='Saiba como contribuir com o clube'
				 	info='Colocar aqui mais informações sobre o conteúdo desta página.
								Aqui a ideia é ter um texto maior, explicando de uma forma mais geral o conteúdo que ficará disponível na página.
								Talvez também possamos colocar aqui alguma explicação sobre como navegar na página ou algo nesse sentido.'/>
			</ContentStyled>
		</ContainerStyled>
	)
}
