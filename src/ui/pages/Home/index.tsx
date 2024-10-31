import { useEffect, useState } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { Pages } from '@app/model/Pages'
import { PageStyled } from './styles';
import { Project } from '@app/types/Project';
import { getHighlightProjects } from '@app/services/ProjectService';
import Card from '@app/components/Card';

export default function Home() {

	const [ highlightProjects, setHighlightProjects ] = useState<Project[]>([]);

	useEffect(() => {
		console.log('Start Home');

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.home
			}
		});

		document.dispatchEvent(event);

		setHighlightProjects(getHighlightProjects());

		console.log('projetos em destaque:',highlightProjects);

		return () => {
			console.log('Exit Home');
		}
	}, []);

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
								<button className='carousel-button-prev'></button>
								<div className='carousel-list flex-center'>
									{highlightProjects.map(project => (
										<Card
											key={project.id}
											id={project.id}
											image={project.image}
											title={project.title}
											summary={project.summary}
											tags={project.tags}
											knowMore={true} >
										</Card>
									))}
								</div>
								<button className='carousel-button-next'></button>
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
					<section>
						<div className='section-title'>
							<h1>Novidades</h1>
						</div>
						<div className='section-content news'>
							etc etc
						</div>
					</section>
				</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
