import { BrowserRouter, Link } from 'react-router-dom'
import { routes } from '@app/Router/routes'
import { Router } from '@app/Router'
import { PageStyled, MenuStyled, MenuToggleStyled } from './styles';
import { useEffect, useState } from 'react';
import { getFeatures } from '@app/services/FeatureFlagService';

export function Menu(props: any) {
	const [ isHomeActive, setHomeActive ] = useState<boolean>(true);
	const [ isProjectsActive, setProjectsActive ] = useState<boolean>(false);
	const [ isAccountabilityActive, setAccountabilityActive ] = useState<boolean>(false);
	const [ isContributeActive, setcontributeActive ] = useState<boolean>(false);
	const [ isContactActive, setContactActive ] = useState<boolean>(false);
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
				setHomeActive(true);
				setProjectsActive(false);
				setAccountabilityActive(false);
				setcontributeActive(false);
				setContactActive(false);
				break;
			case routes.projects.label:
				setHomeActive(false);
				setProjectsActive(true);
				setAccountabilityActive(false);
				setcontributeActive(false);
				setContactActive(false);
				break;
			case routes.accountability.label:
				setHomeActive(false);
				setProjectsActive(false);
				setAccountabilityActive(true);
				setcontributeActive(false);
				setContactActive(false);
				break;
			case routes.contribute.label:
				setHomeActive(false);
				setProjectsActive(false);
				setAccountabilityActive(false);
				setcontributeActive(true);
				setContactActive(false);
				break;
			case routes.contact.label:
				setHomeActive(false);
				setProjectsActive(false);
				setAccountabilityActive(false);
				setcontributeActive(false);
				setContactActive(true);
				break;
			default:
				setHomeActive(false);
				setProjectsActive(false);
				setAccountabilityActive(false);
				setcontributeActive(false);
				setContactActive(false);
				break;
		}
	}

	function handleclick(node: any) {
		const optionSelected = node.target.innerText
		handleToggle();
		changeActiveOption(optionSelected);
	}

	function handleToggle() {
		console.log('handleToggle');
		toggleMenuMobile(!isMenuMobileOpen);
	}

	return (
		<>
			<BrowserRouter>
				{ props.isMobile && <MenuToggleStyled>
					<div className='menuToggle' onClick={handleToggle}>
						<input type='checkbox'
						checked={isMenuMobileOpen} />
						<span></span>
						<span></span>
						<span></span>
					</div>
				</MenuToggleStyled> }
				<PageStyled className='container'
					ismenuopen={isMenuMobileOpen}>
					<MenuStyled className={props?.isMobile ? 'structure-mobile' : 'structure-desktop'}
						ismobile={props.isMobile}>
						<Link
							className={isHomeActive ? 'active': 'default'}
							onClick={handleclick}
							to={routes.home.path}>
								{routes.home.label}
						</Link>
						{getFeatures().projects.menu && <Link
							className={isProjectsActive ? 'active': 'default'}
							onClick={handleclick}
							to={routes.projects.path}>
								{routes.projects.label}
						</Link>}
						{getFeatures().accountability.menu && <Link
							className={isAccountabilityActive ? 'active': 'default'}
							onClick={handleclick}
							to={routes.accountability.path}>
								{routes.accountability.label}
						</Link>}
						{getFeatures().contribute.menu && <Link
							className={isContributeActive ? 'active': 'default'}
							onClick={handleclick}
							to={routes.contribute.path}>
								{routes.contribute.label}
						</Link>}
						{getFeatures().contact.menu && <Link
							className={isContactActive ? 'active': 'default'}
							onClick={handleclick}
							to={routes.contact.path}>
								{routes.contact.label}
						</Link>}
					</MenuStyled>
				</PageStyled>
				<Router />
			</BrowserRouter>
		</>
	);
}
