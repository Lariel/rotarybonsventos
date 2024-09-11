import { BrowserRouter, Link } from 'react-router-dom'
import { routes } from '@app/Router/routes'
import { Router } from '@app/Router'
import { Header } from '@ui/components/Header'
import { Footer } from '@ui/components/Footer'

export function App() {
  return (
		<>
			<Header />
			<BrowserRouter>
				<Link to={routes.home}>Home</Link>
				<br />
				<Link to={routes.projects}>Projetos</Link>
				<br />
				<Link to={routes.accountability}>Transparência</Link>
				<br />
				<Link to={routes.contribute}>Contribua</Link>
				<br />
				<Link to={routes.contact}>Contato</Link>
				<br />
				<Link to={routes.links}>Links</Link>
				<Router />
			</BrowserRouter>
			<Footer/>
		</>

  )
}
