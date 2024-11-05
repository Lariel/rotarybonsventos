import { BrowserRouter, Link } from 'react-router-dom'
import { routes } from '@app/Router/routes'
import { Router } from '@app/Router'
import { PageStyled, MenuStyled, MenuToggleStyled } from './styles';
import { useEffect, useState } from 'react';

let isHomeActive = true;
let isProjectsActive = false;
let isAccountabilityActive = false;
let isContributeActive = false;
let isContactActive = false;

export function Menu(props: any) {
	const [ isMenuMobileOpen, toggleMenuMobile ] = useState<boolean>(false);

	useEffect(() => {
		console.log('Start Menu');

		function handleChangePage(event: any) {
			changeActiveOption(event.detail.pageSelected.label);
		}

		document.addEventListener('changePage', handleChangePage);

		return () => {
			document.removeEventListener('changePage', handleChangePage);
			console.log('Exit Menu');
		}
	}, []);

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
				isHomeActive = false;
				isProjectsActive = false;
				isAccountabilityActive = false;
				isContributeActive = false;
				isContactActive = false;
				break;
		}
	}

	function handleclick(node: any) {
		const optionSelected = node.target.innerText
		toggleMenuMobile(false);
		changeActiveOption(optionSelected);
	}

	function handleToggle() {
		console.log('handleToggle');
		toggleMenuMobile(!isMenuMobileOpen);
	}

	return (
		<>
			<BrowserRouter>
				{ props.isMobile && <MenuToggleStyled onClick={handleToggle}>
					<div className='menuToggle'>
						<input type="checkbox" />
						<span></span>
						<span></span>
						<span></span>
					</div>
				</MenuToggleStyled> }
				<PageStyled className='container'
					isMobile={props.isMobile}
					isMenuOpen={isMenuMobileOpen}>
					<MenuStyled className={props?.isMobile ? 'structure-mobile' : 'structure-desktop'}
						isMobile={props.isMobile}
						isMenuOpen={isMenuMobileOpen}
						>
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
				</PageStyled>
				<Router />
			</BrowserRouter>
		</>
	);
}
