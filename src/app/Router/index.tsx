import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "@ui/pages/Home";
import { Projects } from "@ui/pages/Projects";
import { Accountability } from "@ui/pages/Accountability";
import { Contribute } from "@ui/pages/Contribute";
import { Contact } from "@ui/pages/Contact";
import { About } from "@ui/pages/About";
import { Links } from "@ui/pages/Links";

export function Router() {
	return (
		<Routes>
			<Route path={routes.home} element={<Home />} />
			<Route path={routes.projects} element={<Projects />} />
			<Route path={routes.accountability} element={<Accountability />} />
			<Route path={routes.contribute} element={<Contribute />} />
			<Route path={routes.contact} element={<Contact />} />
			<Route path={routes.about} element={<About />} />
			<Route path={routes.links} element={<Links />} />
		</Routes>
	);
}
