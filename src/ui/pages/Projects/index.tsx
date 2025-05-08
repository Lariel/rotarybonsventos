import { useEffect, useState } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import Card from '@app/components/Card';
import PageIntro from '@app/components/PageIntro';
import { Pages } from '@app/model/Pages';
import { PageStyled } from './styles';
import { Project } from '@app/types/Project';
import { getProjects } from '@app/services/ProjectService';
import { features } from '@app/model/Features';

export default function Projects() {

	const [ projects, setProjects ] = useState<Project[]>([]);

	useEffect(() => {
		console.log('Start Projects');

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.projects
			}
		});

		document.dispatchEvent(event);

		setProjects(getProjects());

		return () => {
			console.log('Exit Projects');
		}
	}, []);

	return (
		<ContainerStyled className='container container-bg'>
			<ContentStyled className='content-responsive'>
				<PageStyled>
					<PageIntro intro='Conheça nossos projetos e ações'/>
					<div className='text-content'>
						<p>No Rotary Bons Ventos, temos o compromisso de server à comunidade, promovendo mudanças positivas e sustentáveis.</p>
						<p>Ao longo dos anos, realizamos uma série de projetos e ações alinhadas com as causas do Rotary Internacional: <strong>Promoção da paz</strong>, <strong>Combate a doenças</strong>, <strong>Água limpa e saneamento</strong>, <strong>Saúde de mães e filhos</strong>, <strong>Apoio à educação</strong>, <strong>Desenvolvimento econômico</strong> e <strong>Proteção do meio ambiente</strong>.</p>
						<p>Cada projeto é uma oportunidade de fazer a diferença, e é um reflexo do trabalho colaborativo de nossos membros e parceiros, que compartilham uma visão comum de um mundo melhor.</p>
						<p>Continuamos a buscar novas formas de servir à comunidade e fazer a diferença de maneira significativa.</p>
					</div>

					{projects.map(project => (
						<Card
							key={project.id}
							id={project.id}
							image={project.image}
							title={project.title}
							summary={project.summary}
							tags={project.tags}
							knowMore={features.projects.knowMore} >
						</Card>
					))}
				</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
