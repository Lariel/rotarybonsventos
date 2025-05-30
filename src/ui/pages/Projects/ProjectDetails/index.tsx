import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import PageIntro from '@app/components/PageIntro';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { Pages } from '@app/model/Pages';
import { PageStyled } from './styles';
import { getFeatures, validateFeature } from '@app/services/FeatureFlagService';
import { Project } from '@app/types/Project';
import { getProjectDetails } from '@app/services/ProjectService';
import { routes } from '@app/Router/routes';
import parse from 'html-react-parser';
import ImageWrapper from '@app/components/ImageWrapper';

export default function ProjectDetails() {

	const [ projectSelected, setProject ] = useState<Project>();
	const { id } = useParams();

	useEffect(() => {
		console.log('Start Projects details');

		validateFeature(getFeatures().projects.knowMore);

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.projectDetails
			}
		});

		document.dispatchEvent(event);

		if (id) {
			const projectDetails = getProjectDetails(Number.parseInt(id))
			if (projectDetails) {
				setProject(projectDetails);
			} else {
				window.location.assign(routes.notFound.path);
			}
		}

		return () => {
			console.log('Exit Project details');
		}
	}, []);

	return(
		<ContainerStyled className='container container-bg'>
			<ContentStyled className='content-responsive'>
				<PageStyled>
					<PageIntro intro={ projectSelected?.title } />

					{ parse(projectSelected?.info ?? '') }

					{ projectSelected?.sponsors && ( <p><b>Empresas parceiras deste projeto:</b> { projectSelected?.sponsors }</p> )}

					<div className='project-image-wrapper'>
						<ImageWrapper imageSrc = { projectSelected?.image } />
					</div>
				</PageStyled>
			</ContentStyled>
		</ContainerStyled>

	)

}
