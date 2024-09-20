import { HeaderContainerStyled, HeaderContentStyled } from './styles';
import logo_regular from '../../../assets/logo_regular.png';

export function Header() {
	return (
			<HeaderContainerStyled>
				<HeaderContentStyled className='content-desktop'>
					<img src={logo_regular} alt='Logo' />
				</HeaderContentStyled>
			</HeaderContainerStyled>
	);
}
