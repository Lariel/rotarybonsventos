import { BrowserRouter, Link } from 'react-router-dom'
import { routes } from '@app/Router/routes'
import { Router } from '@app/Router'
import { MenuContainerStyled, MenuStyled } from './styles';

export function Menu() {
	return (
		<>
			<BrowserRouter>
				<MenuContainerStyled className='container'>
					<MenuStyled className='structure-desktop'>
						<Link className={false ? 'active': 'default'} to={routes.home}>Início</Link>
						<Link className={false ? 'active': 'default'} to={routes.projects}>Projetos</Link>
						<Link className={false ? 'active': 'default'} to={routes.accountability}>Transparência</Link>
						<Link className={false ? 'active': 'default'} to={routes.contribute}>Contribua</Link>
						<Link className={false ? 'active': 'default'} to={routes.contact}>Contato</Link>
					</MenuStyled>
				</MenuContainerStyled>
				<Router />
			</BrowserRouter>
		</>
	);
}
