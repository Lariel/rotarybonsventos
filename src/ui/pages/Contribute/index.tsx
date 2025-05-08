import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles'
import { routes } from '@app/Router/routes';
import { social } from '@app/constants/constants'
import { PageStyled, HowDonateGridStyled } from './styles';
import pix_rotary from '@assets/qrcode-pix.png';
import { Pages } from '@app/model/Pages';

export default function Contribute() {

	useEffect(() => {
		console.log('Start Contribute');

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.contribute
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Contribute');
		}
	}, []);

	return (
		<ContainerStyled className='container container-bg'>
			<ContentStyled className='content-responsive'>
				<PageStyled>
				<div className='page-grid'>
					<div className='col-rigth'>
						<div className='banner-rigth'></div>
					</div>
					<div className='first-square-left'>
						<h1>Sua contribuição faz a diferença!</h1>
						<p>Ao doar, você nos ajuda a continuar promovendo projetos e ações, impactando positivamente a comunidade.</p>
						<p>Cada doação, independentemente do valor, nos permite:</p>
						<ul>
							<li>Financiar projetos sociais de forma sustentável e de longo prazo;</li>
							<li>Manter a infraestrutura do clube pronta para apoiar as demandas;</li>
						</ul>
						<p>Conheça nossos projetos acessando a página <a href={routes.projects.path} >Projetos</a>, e veja o resultado da sua contribuição.</p>
						<p>Veja nosso relatório financeiro mensal acessando a página <a href={routes.accountability.path}>Transparência</a>.</p>
					</div>
					<div className='second-square-left'>
						<HowDonateGridStyled>
							<p className='grid-how-donate'>Sua doação pode ser feita via pix, utilizando nosso qr-code, ou com a chave CNPJ: <b>59780382000166</b>.</p>
							<img className='grid-qr-donate' src={pix_rotary}></img>
						</HowDonateGridStyled>
					</div>
				</div>
				</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
