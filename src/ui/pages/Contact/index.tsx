import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import PageIntro from '@app/components/PageIntro';
import { Pages } from '@app/model/Pages';

export default function Contact() {

	useEffect(() => {
		console.log('Start Contact');

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.contact
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Contact');
		}
	}, []);
	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
				<PageIntro
					intro='Nesta página colocar informações de contado do clube'
				 	info='Colocar aqui mais informações sobre o conteúdo desta página.
								Aqui a ideia é ter um texto maior, explicando de uma forma mais geral o conteúdo que ficará disponível na página.
								Talvez também possamos colocar aqui alguma explicação sobre como navegar na página ou algo nesse sentido.'/>
			</ContentStyled>
		</ContainerStyled>
	)
}
