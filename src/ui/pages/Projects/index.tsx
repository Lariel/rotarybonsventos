import { useEffect, useState } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import Card from '@app/components/Card';
import PageIntro from '@app/components/PageIntro';
import { Pages } from '@app/model/Pages';
import { PageStyled } from './styles';
import { Project } from '@app/types/Project';
import { getProjects } from '@app/services/ProjectService';

export default function Projects() {

	const [ projects, setProjects ] = useState<Project[]>(getProjects());

	useEffect(() => {
		console.log('Start Projects');

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.projects
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Projects');
		}
	}, []);

	return (
		<ContainerStyled className='container container-bg'>
			<ContentStyled className='content-responsive'>
				<PageStyled>
					<PageIntro
						intro='Conheça nossos projetos e ações'
						info='Colocar aqui mais informações sobre o conteúdo desta página.
									Aqui a ideia é ter um texto maior, explicando de uma forma mais geral o conteúdo que ficará disponível na página.
									Talvez também possamos colocar aqui alguma explicação sobre como navegar na página ou algo nesse sentido.'/>
					{projects.map(project => (
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
				</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	)
}
