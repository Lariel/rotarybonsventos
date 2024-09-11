import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { routes } from './routes';

const Home = lazy(() => import('@ui/pages/Home'));
const Projects = lazy(() => import('@ui/pages/Projects'));
const Accountability = lazy(() => import('@ui/pages/Accountability'));
const Contribute = lazy(() => import('@ui/pages/Contribute'));
const Contact = lazy(() => import('@ui/pages/Contact'));
const About = lazy(() => import('@ui/pages/About'));
const Links = lazy(() => import('@ui/pages/Links'));

export function Router() {
	return (
		<Suspense fallback={<div>Carregando</div>}>
			<Routes>
				<Route path={routes.home} element={<Home />} />
				<Route path={routes.projects} element={<Projects />} />
				<Route path={routes.accountability} element={<Accountability />} />
				<Route path={routes.contribute} element={<Contribute />} />
				<Route path={routes.contact} element={<Contact />} />
				<Route path={routes.about} element={<About />} />
				<Route path={routes.links} element={<Links />} />
			</Routes>
		</Suspense>
	);
}
