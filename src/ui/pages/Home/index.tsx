import { useEffect, useState } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { Pages } from '@app/model/Pages'
import { PageStyled } from './styles';
import { Project } from '@app/types/Project';
import { getHighlightProjects } from '@app/services/ProjectService';
import Card from '@app/components/Card';
import { features } from '@app/model/Features';

interface Highlight {
	isCenter: boolean;
	project: Project;
}

export default function Home() {

	const [ highlights, setHighlights ] = useState<Highlight[]>(buildHighlights(getHighlightProjects()));
	const [ isMobile, setIsMobile ] = useState<boolean>();

	useEffect(() => {
		console.log('Start Home');

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.home
			}
		});

		document.dispatchEvent(event);

		const device = navigator.userAgent;
		setIsMobile(device.includes('Android') || device.includes('iPhone'));

		let interval: NodeJS.Timeout;

		if (!isMobile) {
			setTimeout(() => {
				interval = setInterval(() => {
					handleNext();
				}, 5000);
			}, 5000);

		}

		return () => {
			clearInterval(interval);
			console.log('Exit Home');
		}
	}, [highlights]);

	function buildHighlights(projects: Project[]): Highlight[] {
		const highlights: Highlight[] = [];
		const posCenter = Math.round(projects.length/2)-1;

		for (let index = 0; index < projects.length; index++) {

			if (posCenter === index) {
				highlights.push(buildHighlight(true, projects[index]));
			} else {
				highlights.push(buildHighlight(false, projects[index]));
			}
		}
		return highlights;
	}

	function buildHighlight(isCenter: boolean, project: Project): Highlight {
		return {
			isCenter,
			project
		}
	}

	function handleNext() {
		const newStateAux = [...highlights];
		const newState = [];

		const getNextIndex = (index: number) => {
			return index + 1 === newStateAux.length ? 0 : index + 1;
		}

		for (let index = 0; index < newStateAux.length; index++) {
			const nextIndex = getNextIndex(index);
			newState.push(newStateAux[nextIndex]);
		}

		for (let index = 0; index < newState.length; index++) {
			if (newState[index].isCenter) {
				newState[index].isCenter = false;
				const nextIndex = getNextIndex(index);
				newState[nextIndex].isCenter = true;
				break;
			}
		}
		setHighlights(newState);
	}

	return (
		<ContainerStyled className='container container-bg'>
			<ContentStyled className='content-responsive'>
				<PageStyled>
					<section>
						<div className='section-title'>
							<h1>Ações em destaque</h1>
						</div>
						<div className='section-content actions flex-center'>
							<div className='carousel flex-center'>
								<ul className='carousel-itens flex-center'>
									{highlights.map(highlight => (
										<li
											key={highlight.project.id}
											className={highlight.isCenter ? 'carousel-item highlight': 'carousel-item suppressed'}>
											<Card
												id={highlight.project.id}
												image={highlight.project.image}
												title={highlight.project.title}
												summary={highlight.project.summary}
												tags={highlight.project.tags}
												knowMore={features.projects.knowMore} >
											</Card>
										</li>
									))}
								</ul>
							</div>
						</div>
					</section>
					<section>
						<div className='section-title'>
							<h1>Sobre nós</h1>
						</div>
						<div className='section-content about'>
							<div className='row'>
								<div className='col-w40 padding-20 flex-center'>
									<div className='small-topic first-topic'></div>
								</div>
								<div className='col-w60 padding-20'>
									<p>Somos o Rotary Club de Osório Bons Ventos, um grupo de pessoas em ação que une talentos, amizade e propósito para transformar realidades. Acreditamos na força do companheirismo, no poder do servir e no impacto de projetos que fortalecem comunidades.</p>
									<p>Com base nos princípios do Rotary Internacional, atuamos com ética, liderança e responsabilidade social, buscando soluções para desafios locais e globais. Nosso clube é uma engrenagem em movimento, onde cada associado contribui com o que tem de melhor — sempre guiados pelo lema: Dar de Si Antes de Pensar em Si.</p>
								</div>
							</div>
						</div>
						<div className='section-title' id='story'>
							<h1>Nossa história</h1>
						</div>
						<div className='section-content about'>
						<div className='row'>
								<div className='col-w60 padding-20'>
									<p>Nossa trajetória começou em 2021, quando oito integrantes do Rotaract Club de Osório decidiram seguir contribuindo com a família rotária de forma ainda mais ativa. Foi assim que nasceu nosso clube como um satélite do Rotary Club de Osório — o formato ideal naquele momento para dar continuidade à nossa missão de servir.</p>
									<p>Um clube satélite, assim como qualquer Rotary Club, realiza reuniões regulares, possui diretoria, regimento interno e desenvolve projetos humanitários com impacto real na comunidade. Seus membros são rotarianos comprometidos e atuantes, mesmo estando, oficialmente, vinculados ao clube padrinho — no nosso caso, o Rotary Club de Osório, que nos apoiou desde o início com parceria, confiança e inspiração.</p>
									<p>Com dedicação e espírito de equipe, crescemos. Em apenas um ano, dobramos nosso quadro de associados. E finalmente em 2024, alcançamos um marco importante: nos tornamos oficialmente um Rotary Club tradicional, agora com 26 associados — pessoas que acreditam na força do companheirismo, da ética e do servir.</p>
								</div>
								<div className='col-w40 padding-20 flex-center'>
									<div className='small-topic second-topic'></div>
								</div>
							</div>
							<div className='row'>
								<div className='col-w40 padding-20 flex-center'>
									<div className='small-topic third-topic'></div>
								</div>
								<div className='col-w60 padding-20'>
									<p>Nosso clube é resultado da união entre responsabilidade e amizade, valores que conduzem cada passo da nossa jornada. Somos movidos pelo ideal de servir e inspirados pelo lema: Dar de Si Antes de Pensar em Si.</p>
									<p>Somos o Rotary Club de Osório Bons Ventos — um grupo de pessoas em ação, que colocam seus talentos e aspirações a serviço da construção de um mundo melhor. Juntos, criamos oportunidades, fortalecemos comunidades e buscamos soluções para os desafios mais complexos da sociedade.</p>
									<p>Seguimos como uma engrenagem em constante movimento, onde cada peça se encaixa com propósito, sempre na direção de um futuro mais justo, solidário e transformador.</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-w100 flex-center bold'>
									{/* <p>Aqui pode ter um texto finalizando a apresentação do clube</p> */}
								</div>
							</div>
							<div className='row'>
								<div className='col-w100 flex-center'>
									<div className='whide-topic fourth-topic'></div>
								</div>
							</div>
						</div>
					</section>
				</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
