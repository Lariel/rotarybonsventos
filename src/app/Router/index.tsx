import { Route, Routes } from "react-router-dom";
import { Home } from "../../ui/pages/Home";

export function Router() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	);
}
