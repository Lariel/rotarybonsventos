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
							<div className='row'>
								<div className='col-w40 padding-20 center'>
									<div className='round-topic first-topic'></div>
								</div>
								<div className='col-w60 padding-20'>
									<p>Texto primeira linha</p>
									<p>Texto primeira linha</p>
									<p>Texto primeira linha</p>
									<p>Texto primeira linha</p>
									<p>Texto primeira linha</p>
									<p>Texto primeira linha</p>
									<p>Texto primeira linha</p>
									<p>Texto primeira linha</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-w60'>
									<p>Texto segunda linha</p>
									<p>Texto segunda linha</p>
									<p>Texto segunda linha</p>
									<p>Texto segunda linha</p>
									<p>Texto segunda linha</p>
									<p>Texto segunda linha</p>
									<p>Texto segunda linha</p>
									<p>Texto segunda linha</p>
								</div>
								<div className='col-w40 padding-20 center'>
									<div className='round-topic second-topic'></div>
								</div>
							</div>
							<div className='row'>
								<div className='col-w40 padding-20 center'>
									<div className='round-topic third-topic'></div>
								</div>
								<div className='col-w60'>
									<p>Texto terceira linha</p>
									<p>Texto terceira linha</p>
									<p>Texto terceira linha</p>
									<p>Texto terceira linha</p>
									<p>Texto terceira linha</p>
									<p>Texto terceira linha</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-w100 center'>
									<p>Aqu pode ter um texto finalizando a apresentação do clube</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-w100 center'>
									<div className='square-topic fourth-topic'></div>
								</div>
							</div>
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
							<div className='row'>
								<div className='col-w20'>
									primeira linha
								</div>
								<div className='col-w80'>
									primeira linha
								</div>
							</div>
						</div>
					</section>

				</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
