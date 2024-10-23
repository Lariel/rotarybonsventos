import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import PageIntro from '@app/components/PageIntro';
import { Pages } from '@app/model/Pages'

export default function Home() {

	useEffect(() => {
		console.log('Start Home');

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.home
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Home');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
			<PageIntro
					intro='Página inicial do site'
				 	info='Colocar mais informações sobre o clube, etc'/>
			</ContentStyled>
		</ContainerStyled>
	)
}
