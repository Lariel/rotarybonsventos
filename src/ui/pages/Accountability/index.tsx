import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import PageIntro from '@app/components/PageIntro';

export default function Accountability() {

	useEffect(() => {
		console.log('Start Accountability');

		const event = new CustomEvent('changePage',{
			detail: {
				text: 'Prestação de contas'
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Accountability');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
				<PageIntro
					intro='Aqui você encontra a prestação de contas do clube'
				 	info='Colocar aqui mais informações sobre o conteúdo desta página.
								Aqui a ideia é ter um texto maior, explicando de uma forma mais geral o conteúdo que ficará disponível na página.
								Talvez também possamos colocar aqui alguma explicação sobre como navegar na página ou algo nesse sentido.'/>
			</ContentStyled>
		</ContainerStyled>
	);
}
