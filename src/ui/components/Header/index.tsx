import { HeaderContainerStyled, HeaderContentStyled } from './styles';
import logo_regular from '@assets/logo_regular.png';

const pageDescription = 'Projetos do clube';

export function Header() {
	return (
			<HeaderContainerStyled className='container-desktop'>
				<HeaderContentStyled className='content-desktop'>
					<div className='logo-header'>
						<img src={logo_regular} alt='Logo Rotary Bons Ventos Header' />
					</div>
					<div className='page-description'>
						{pageDescription}
					</div>
				</HeaderContentStyled>
			</HeaderContainerStyled>
	);
}
