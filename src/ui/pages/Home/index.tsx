import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
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
		<ContainerStyled className='container container-bg'>
			<ContentStyled className='content-responsive'>
				<PageStyled>
					<section className=''>
						<div className='section-title'>
							<h1>Sobre nós</h1>
						</div>
						<div className='section-content about'>
							etc etc
						</div>
					</section>
					<section className=''>
						<div className='section-title'>
							<h1>Novidades</h1>
						</div>
						<div className='section-content news'>
							etc etc
						</div>
					</section>
					<section className=''>
						<div className='section-title'>
							<h1>Ações em destaque</h1>
						</div>
						<div className='section-content actions'>
						etc etc
						</div>
					</section>

				</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
