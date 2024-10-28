import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import PageIntro from '@app/components/PageIntro';
import { Pages } from '@app/model/Pages'
import { PageStyled } from './styles';

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
				<PageStyled>
					<PageIntro
							intro='Página inicial do site'
							info='Colocar mais informações sobre o clube, algum texto introdutório genérico, etc'/>
					<section className='about'>
						<div className='section-title'>
							<h2>Sobre nós</h2>
						</div>
						<div className='section-content'>
							etc etc
						</div>
					</section>
					<section className='news'>
						<div className='section-title'>
							<h2>Novidades</h2>
						</div>
						<div className='section-content'>
							etc etc
						</div>
					</section>
					<section className='actions'>
						<div className='section-title'>
							<h2>Ações em destaque</h2>
						</div>
						<div className='section-content'>
						etc etc
						</div>
					</section>

				</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
