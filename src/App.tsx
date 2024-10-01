import { useState, useEffect } from 'react';
import { Header } from '@ui/components/Header'
import { Footer } from '@ui/components/Footer'
import { GlobalStyles } from '@ui/styles/GlobalStyles'
import { Menu } from '@ui/components/Menu'

export function App() {

	const [ pageDescription, setPageDescription ] = useState<String>('Início');

	useEffect(() => {
		console.log('Start App');

		document.addEventListener('changePageDescription', (event: any) => {
			updatePageDescription(event.detail.text);
		});

		return () => {
			console.log('Exit App');
		}
	}, []);

	function updatePageDescription(description: String) {
		setPageDescription(description);
	}

  return (
		<>
			<GlobalStyles />
			<Header pageDescription={pageDescription} />
			<Menu />
			<Footer/>
		</>
  )
}
