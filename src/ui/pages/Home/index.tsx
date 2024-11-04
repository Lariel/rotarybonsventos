import { useEffect, useState } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { Pages } from '@app/model/Pages'
import { PageStyled } from './styles';
import { Project } from '@app/types/Project';
import { getHighlightProjects } from '@app/services/ProjectService';
import Card from '@app/components/Card';
import arrow from '@assets/arrow.svg';

interface Highlight {
	isCenter: boolean;
	project: Project;
}

export default function Home() {

	const [ highlights, setHighlights ] = useState<Highlight[]>([]);

	useEffect(() => {
		console.log('Start Home');

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.home
			}
		});

		document.dispatchEvent(event);

		setHighlights(buildHighlights(getHighlightProjects()));

		return () => {
			console.log('Exit Home');
		}
	}, []);

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

	function handlePrev() {
		const newStateAux = [...highlights];
		const newState = [];

		const getNextIndex = (index: number) => {
			return index ===  0 ? newStateAux.length - 1 : index - 1;
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
								<button
									className='btn-prev'
									onClick={handlePrev}>
										<img src={arrow}/>
								</button>
								<div className='carousel-itens flex-center'>
									{highlights.map(highlight => (
										<div
											key={highlight.project.id}
											className={highlight.isCenter ? 'carousel-item highlight': 'carousel-item suppressed'}>
											<Card
												id={highlight.project.id}
												image={highlight.project.image}
												title={highlight.project.title}
												summary={highlight.project.summary}
												tags={highlight.project.tags}
												knowMore={true} >
											</Card>
										</div>
									))}
								</div>
								<button
									className='btn-next'
									onClick={handleNext}>
										<img src={arrow}/>
								</button>
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
									<p>Casamentiss faiz malandris se pirulitá. Quem manda na minha terra sou euzis! Interagi no mé, cursus quis, vehicula ac nisi. Delegadis gente finis, bibendum egestas augue arcu ut est.</p>
									<p>Paisis, filhis, espiritis santis. In elementis mé pra quem é amistosis quis leo. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</p>
									<p>Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Quem manda na minha terra sou euzis!</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-w60 padding-20'>
									<p>Si num tem leite então bota uma pinga aí cumpadi! Copo furadis é disculpa de bebadis, arcu quam euismod magna. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Bota 1 metro de cachacis aí pra viagem!</p>
									<p>Manduma pindureta quium dia nois paga. Copo furadis é disculpa de bebadis, arcu quam euismod magna. A ordem dos tratores não altera o pão duris. Interagi no mé, cursus quis, vehicula ac nisi.</p>
									<p>Paisis, filhis, espiritis santis. In elementis mé pra quem é amistosis quis leo. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Nec orci ornare consequat. Praesent lacinia ultrices consectetur. Sed non ipsum felis.</p>
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
									<p>Praesent vel viverra nisi. Mauris aliquet nunc non turpis scelerisque, eget. Morbi viverra placerat justo, vel pharetra turpis. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Posuere libero varius. Nullam a nisl ut ante blandit hendrerit. Aenean sit amet nisi.</p>
									<p>Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Admodum accumsan disputationi eu sit. Vide electram sadipscing et per. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Bota 1 metro de cachacis aí pra viagem!</p>
									<p>Diuretics paradis num copo é motivis de denguis. Pellentesque nec nulla ligula. Donec gravida turpis a vulputate ultricies. Negão é teu passadis, eu sou faxa pretis. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.</p>
								</div>
							</div>
							<div className='row'>
								<div className='col-w100 flex-center bold'>
									<p>Aqui pode ter um texto finalizando a apresentação do clube</p>
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
