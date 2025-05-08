import { routes } from '@app/Router/routes';

export function validateFeature(feature: boolean) {
	if (!feature) {
		window.location.assign(routes.notFound.path);
	}
}
