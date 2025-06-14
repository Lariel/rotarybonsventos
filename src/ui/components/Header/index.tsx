import { routes } from '@app/Router/routes';
import { HeaderContainerStyled, HeaderContentMobileStyled, HeaderContentStyled } from './styles';
import logo_regular from '@assets/logo_regular.png';
import logo_white from '@assets/logo_white.png';

export function Header(props: any) {

	function handleClick() {
		window.location.assign(routes.home.path);
	}

	return (
			<HeaderContainerStyled className='container'>
				<HeaderContentStyled className='structure-desktop'>
					<div className='logo-header-desktop'>
						<img src={logo_regular} alt='Logo Rotary Bons Ventos Header' onClick={ handleClick }/>
					</div>
					<div className='page-description'>
						{ props?.pageSelected?.description }
					</div>
				</HeaderContentStyled>
				<HeaderContentMobileStyled className='structure-mobile'>
					<img src={logo_white} alt='Logo Rotary Bons Ventos Header'/>
				</HeaderContentMobileStyled>
			</HeaderContainerStyled>
	);
}
