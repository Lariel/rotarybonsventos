import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import Card from '@app/components/Card';
import { Tag } from '@app/types/Tag';
import development from '@assets/development.jpg';
import education from '@assets/education.jpg';
import health from '@assets/health.jpg';
import peace from '@assets/peace.jpg';
import nature from '@assets/nature.jpg';

export default function Projects() {

	const tag1: Tag = { id: 1, text: 'ambiental'};
	const tag2: Tag = { id: 2, text: 'educação'};
	const tag3: Tag = { id: 3, text: 'saúde'};
	const tag4: Tag = { id: 4, text: 'desenvolvimento'};
	const tag5: Tag = { id: 5, text: 'paz'};

	const projects = [
		{
			id: 1,
			image: `${development}`,
			title: 'título projeto1',
			description: 'Breve descrição do primeiro projeto a ser mostrado',
			tags: [tag1, tag3]
		},
		{
			id: 2,
			image: `${education}`,
			title: 'título projeto2',
			description: 'Breve descrição do segundo projeto a ser mostrado na página',
			tags: [tag1, tag2, tag3, tag4, tag5]
		},
		{
			id: 3,
			image: `${health}`,
			title: 'título projeto3',
			description: 'Breve descrição do terceiro projeto a ser mostrado na página',
			tags: [tag1, tag4, tag3]
		},
		{
			id: 4,
			image: `${peace}`,
			title: 'título projeto4',
			description: 'Breve descrição do quarto projeto a ser mostrado na página',
			tags: [tag2, tag5]
		},
		{
			id: 5,
			image: `${nature}`,
			title: 'título projeto5',
			description: 'Breve descrição do quinto projeto a ser mostrado na página',
			tags: [tag4, tag3, tag5, tag1]
		},
		{
			id: 6,
			image: `${development}`,
			title: 'título projeto6',
			description: 'Breve descrição do sexto projeto a ser mostrado na página',
			tags: [tag2, tag5]
		},
		{
			id: 7,
			image: `${education}`,
			title: 'título projeto7',
			description: 'Breve descrição do sétimo projeto a ser mostrado na página',
			tags: [tag4, tag3, tag5, tag1]
		},
		{
			id: 8,
			image: `${health}`,
			title: 'título projeto8',
			description: 'Breve descrição do oitavo projeto a ser mostrado na página',
			tags: [tag2, tag5]
		},
		{
			id: 9,
			image: `${peace}`,
			title: 'título projeto9',
			description: 'Breve descrição do nono projeto a ser mostrado na página',
			tags: [tag4, tag3, tag5, tag1]
		}
	]

	useEffect(() => {
		console.log('Start Projects');

		const event = new CustomEvent('changePage',{
			detail: {
				text: 'Nossos projetos'
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Projects');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
				{projects.map(project => (
					<Card
						key={project.id}
						image={project.image}
						title={project.title}
						description={project.description} >
					</Card>
				))}
			</ContentStyled>
		</ContainerStyled>
	)
}
