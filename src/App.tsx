import { useState, useEffect } from 'react';
import { Header } from '@ui/components/Header'
import { Footer } from '@ui/components/Footer'
import { GlobalStyles } from '@ui/styles/GlobalStyles'
import { Menu } from '@ui/components/Menu'
import { iniGA } from '@app/services/AnalyticsService';

export function App() {
	const [ pageSelected, setPageSelected ] = useState<any>();
	const [ isFooterVisible, setFooterVisible ] = useState<boolean>(true);
	const [ isMobile, setIsMobile ] = useState<boolean>();

	useEffect(() => {
		console.log('Start App');
		updateFooterVisibility(!window.location.href.includes('links'));

		function handleChangePage(event: any) {
			console.log('handleChangePage', event);
			updatePageSelected(event.detail.pageSelected);
			updateFooterVisibility(!window.location.href.includes('links'));
		}

		document.addEventListener('changePage', handleChangePage);

		const device = navigator.userAgent;
		setIsMobile(device.includes('Android') || device.includes('iPhone'));

		iniGA();

		return () => {
			document.removeEventListener('changePage', handleChangePage);
			console.log('Exit App');
		}
	}, []);

	function updatePageSelected(page: any) {
		setPageSelected(page);
	}

	function updateFooterVisibility(isVisible: boolean) {
		setFooterVisible(isVisible)
	}

  return (
		<>
			<GlobalStyles />
			<Header pageSelected={pageSelected} />
			<Menu isMobile={isMobile} />
			{ isFooterVisible && <Footer/>}
		</>
  )
}
