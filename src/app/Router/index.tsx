import { Route, Routes } from 'react-router-dom';
import { lazy, Suspense } from 'react';

import { routes } from './routes';
import { Loader } from '@ui/components/Loader';
import ProjectDetails from '@ui/pages/Projects/ProjectDetails';

const Home = lazy(() => import('@ui/pages/Home'));
const Projects = lazy(() => import('@ui/pages/Projects'));
const Accountability = lazy(() => import('@ui/pages/Accountability'));
const Contribute = lazy(() => import('@ui/pages/Contribute'));
const Contact = lazy(() => import('@ui/pages/Contact'));
const About = lazy(() => import('@ui/pages/About'));
const Links = lazy(() => import('@ui/pages/Links'));
const NotFound = lazy(() => import('@ui/pages/NotFound'));

export function Router() {
	return (
		<Suspense fallback={<Loader />}>
			<Routes>
				<Route path={routes.home.path} element={<Home />} />
				<Route path={routes.projects.path} element={<Projects />} />
				<Route path={routes.projectDetails.path} element={<ProjectDetails />} />
				<Route path={routes.accountability.path} element={<Accountability />} />
				<Route path={routes.contribute.path} element={<Contribute />} />
				<Route path={routes.contact.path} element={<Contact />} />
				<Route path={routes.about.path} element={<About />} />
				<Route path={routes.links.path} element={<Links />} />
				<Route path={routes.notFound.path} element={<NotFound />} />
			</Routes>
		</Suspense>
	);
}
