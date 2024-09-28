import { HeaderContainerStyled, HeaderContentMobileStyled, HeaderContentStyled } from './styles';
import logo_regular from '@assets/logo_regular.png';
import logo_white from '@assets/logo_white.png';

export function Header(props: any) {
	return (
			<HeaderContainerStyled className='container'>
				<HeaderContentStyled className='content-desktop'>
					<div className='logo-header-desktop'>
						<img src={logo_regular} alt='Logo Rotary Bons Ventos Header' />
					</div>
					<div className='page-description'>
						{props.pageDescription}
					</div>
				</HeaderContentStyled>
				<HeaderContentMobileStyled className='content-mobile'>
					<img src={logo_white} alt='Logo Rotary Bons Ventos Header' />
				</HeaderContentMobileStyled>
			</HeaderContainerStyled>
	);
}
