import { ImageStyled } from './styles';
import proj_default_cover from '@assets/projects/proj-default-cover.jpg';

export default function ImageWrapper(props: any) {
	return (
		<ImageStyled>
			<img src={ props?.imageSrc ?? proj_default_cover }></img>
		</ImageStyled>
	)
}
