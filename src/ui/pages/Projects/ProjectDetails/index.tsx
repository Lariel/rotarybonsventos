import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageIntro from '@app/components/PageIntro';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { Pages } from '@app/model/Pages';
import { PageStyled } from './styles';

export default function ProjectDetails() {

	useEffect(() => {
		console.log('Start Projects details');

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.projectDetails
			}
		});

		setTimeout(() => {
			// TODO: Remover essa gambiarra após buscar os detalhes do projeto
			document.dispatchEvent(event);
		}, 100)

		return () => {
			console.log('Exit Project details');
		}
	}, []);

	const params = useParams();

	console.log('paras:', params);

	return(
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
				<PageStyled>
					<PageIntro
						intro={'Detalhes do projeto ' + params.id}
						info={'WIP'}
					/>
				</PageStyled>
			</ContentStyled>
		</ContainerStyled>

	)

}
