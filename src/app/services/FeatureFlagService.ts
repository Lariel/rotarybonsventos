import { routes } from '@app/Router/routes';
import { features } from '@app/model/Features';

export function validateFeature(featureIsActive: boolean) {
	if (!featureIsActive) {
		window.location.assign(routes.notFound.path);
	}
}

export function getFeatures() {
	return features;
}
