import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import { CustomLoader } from './styles';

export function Loader() {
	return (
		<ContainerStyled className='container'>
			<ContentStyled>
				<CustomLoader/>
			</ContentStyled>
		</ContainerStyled>
	);
}
