import { BrowserRouter, Link } from 'react-router-dom'
import { routes } from '@app/Router/routes'
import { Router } from '@app/Router'
import { MenuContainerStyled, MenuStyled } from './styles';

let isHomeActive = true;
let isProjectsActive = false;
let isAccountabilityActive = false;
let isContributeActive = false;
let isContactActive = false;

export function Menu() {

	function changeActiveOption(optionSelected: string) {
		switch (optionSelected) {
			case routes.home.label:
				isHomeActive = true;
				isProjectsActive = false;
				isAccountabilityActive = false;
				isContributeActive = false;
				isContactActive = false;
				break;
			case routes.projects.label:
				isHomeActive = false;
				isProjectsActive = true;
				isAccountabilityActive = false;
				isContributeActive = false;
				isContactActive = false;
				break;
			case routes.accountability.label:
				isHomeActive = false;
				isProjectsActive = false;
				isAccountabilityActive = true;
				isContributeActive = false;
				isContactActive = false;
				break;
			case routes.contribute.label:
				isHomeActive = false;
				isProjectsActive = false;
				isAccountabilityActive = false;
				isContributeActive = true;
				isContactActive = false;
				break;
			case routes.contact.label:
				isHomeActive = false;
				isProjectsActive = false;
				isAccountabilityActive = false;
				isContributeActive = false;
				isContactActive = true;
				break;
			default:
				isHomeActive = true;
				isProjectsActive = false;
				isAccountabilityActive = false;
				isContributeActive = false;
				isContactActive = false;
				break;
		}
	}

	function handleclick(node: any) {
		const optionSelected = node.target.innerText
		changeActiveOption(optionSelected);
	}

	return (
		<>
			<BrowserRouter>
				<MenuContainerStyled className='container'>
					<MenuStyled className='structure-desktop'>
						<Link
							className={isHomeActive ? 'active': 'default'}
							onClick={handleclick}
							to={routes.home.path}>
								{routes.home.label}
						</Link>
						<Link
							className={isProjectsActive ? 'active': 'default'}
							onClick={handleclick}
							to={routes.projects.path}>
								{routes.projects.label}
						</Link>
						<Link
							className={isAccountabilityActive ? 'active': 'default'}
							onClick={handleclick}
							to={routes.accountability.path}>
								{routes.accountability.label}
						</Link>
						<Link
							className={isContributeActive ? 'active': 'default'}
							onClick={handleclick}
							to={routes.contribute.path}>
								{routes.contribute.label}
						</Link>
						<Link
							className={isContactActive ? 'active': 'default'}
							onClick={handleclick}
							to={routes.contact.path}>
								{routes.contact.label}
						</Link>
					</MenuStyled>
				</MenuContainerStyled>
				<Router />
			</BrowserRouter>
		</>
	);
}
