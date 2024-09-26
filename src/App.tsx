import { Header } from '@ui/components/Header'
import { Footer } from '@ui/components/Footer'
import { GlobalStyles } from '@ui/styles/GlobalStyles'
import { Menu } from '@ui/components/Menu'
import { useState, createContext } from 'react';

export const PageDescriptionContext = createContext<{}>({});

export function App() {

	const [ pageDescription, setPageDescription ] = useState<String>('Início');

	function updatePageDescription(description: String) {
		setPageDescription(description);
	}

	console.log('pageDescription inicial:',pageDescription);

  return (
		<>
			<GlobalStyles />
			<PageDescriptionContext.Provider
				value={{
					pageDescription,
					onchangeDescription: updatePageDescription
				}}
			>
				<Header pageDescription={pageDescription} />
				<Menu />
			</PageDescriptionContext.Provider>
			<Footer/>
		</>
  )
}
