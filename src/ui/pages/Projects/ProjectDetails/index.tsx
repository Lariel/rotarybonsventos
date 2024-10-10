import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PageIntro from '@app/components/PageIntro';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';

export default function ProjectDetails(props: any) {

	useEffect(() => {
		console.log('Start ProjectDetails: ', props);

		return () => {
			console.log('Exit ProjectDetails');
		}
	}, []);

	const params = useParams();

	console.log('paras:', params);

	return(
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
				<PageIntro
					intro={'Detalhes do projeto ' + params.id}
					info={'WIP'}
				/>
			</ContentStyled>
		</ContainerStyled>

	)

}
