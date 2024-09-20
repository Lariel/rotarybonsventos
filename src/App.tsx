import { Header } from '@ui/components/Header'
import { Footer } from '@ui/components/Footer'
import { GlobalStyles } from '@ui/styles/GlobalStyles'
import { Menu } from '@ui/components/Menu'

export function App() {
  return (
		<>
			<GlobalStyles />
			<Header />
			<Menu />
			<Footer/>
		</>
  )
}
