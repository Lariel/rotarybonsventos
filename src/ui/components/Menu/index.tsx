import { BrowserRouter, Link } from 'react-router-dom'
import { routes } from '@app/Router/routes'
import { Router } from '@app/Router'
import { MenuContainerStyled, MenuStyled } from './styles';

export function Menu() {
	return (
		<>
			<BrowserRouter>
				<MenuContainerStyled className='container-desktop'>
					<MenuStyled className='content-desktop'>
						<Link to={routes.home}>Home</Link>
						<Link to={routes.projects}>Projetos</Link>
						<Link to={routes.accountability}>Transparência</Link>
						<Link to={routes.contribute}>Contribua</Link>
						<Link to={routes.contact}>Contato</Link>
					</MenuStyled>
				</MenuContainerStyled>
				<Router />
			</BrowserRouter>
		</>
	);
}
