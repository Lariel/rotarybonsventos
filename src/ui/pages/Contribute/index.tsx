import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles'
import PageIntro from '@app/components/PageIntro';
import { routes } from '@app/Router/routes';
import { social } from '@app/constants/constants'
import { ContributeStyled, HowDonateGridStyled } from './styles';
import pix_rotary from '@assets/qrcode-pix.png';

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
					intro='Sua contribuição faz a diferença!'
					info=''/>
				<ContributeStyled>
					<p>Ao doar, você nos ajuda a continuar promovendo projetos e ações, impactando positivamente a comunidade.</p>
					<p>Cada doação, independentemente do valor, nos permite:</p>
					<ul>
						<li>Financiar projetos sociais de forma sustentável e de longo prazo</li>
						<li>Manter a infra estrutura do clube pronta para apoiar as demandas</li>
						<li>Outro texto aqui</li>
						<li>Mais outro texto aqui</li>
					</ul>
					<p>Conheça nossos projetos acessando a página <a href={routes.projects} >Projetos</a>, e veja o resultado da sua contribuição.</p>
					<p>Veja nosso relatório financeiro mensal acessando a página <a href={routes.accountability}>Transparência</a>.</p>
				</ContributeStyled>
				<PageIntro intro='Como doar'/>
				<ContributeStyled>
					<HowDonateGridStyled>
						<p className='grid-how-donate'>Sua doação pode ser feita via pix, utilizando nosso qr-code, ou com a chave <b>{social.email}</b>.</p>
						<img className='grid-qr-donate' src={pix_rotary}></img>
					</HowDonateGridStyled>
				</ContributeStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
