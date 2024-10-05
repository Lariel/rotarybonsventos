import { useState, useEffect } from 'react';
import { Header } from '@ui/components/Header'
import { Footer } from '@ui/components/Footer'
import { GlobalStyles } from '@ui/styles/GlobalStyles'
import { Menu } from '@ui/components/Menu'

export function App() {
	const [ pageDescription, setPageDescription ] = useState<String>('Início');
	const [ isFooterVisible, setFooterVisible ] = useState<boolean>(true);

	useEffect(() => {
		console.log('Start App');
		updateFooterVisibility(!window.location.href.includes('links'));

		function handleChangePage(event: any) {
			updatePageDescription(event.detail.text);
			updateFooterVisibility(!window.location.href.includes('links'));
		}

		document.addEventListener('changePage', handleChangePage);

		return () => {
			document.removeEventListener('changePage', handleChangePage);
			console.log('Exit App');
		}
	}, []);

	function updatePageDescription(description: String) {
		setPageDescription(description);
	}

	function updateFooterVisibility(isVisible: boolean) {
		setFooterVisible(isVisible)
	}

  return (
		<>
			<GlobalStyles />
			<Header pageDescription={pageDescription} />
			<Menu />
			{ isFooterVisible && <Footer/>}
		</>
  )
}
