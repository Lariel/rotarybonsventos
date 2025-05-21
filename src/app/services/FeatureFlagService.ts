import { fetchAndActivate, getValue } from 'firebase/remote-config';
import { remoteConfig } from '@app/config/firebaseRemoteConfig';
import { routes } from '@app/Router/routes';
import { features } from '@app/model/Features';

export function validateFeature(featureIsActive: boolean) {
	if (!featureIsActive) {
		window.location.assign(routes.notFound.path);
	}
}

export async function fetchRemoteConfig() {

	try {
		console.log('Fetching remote config...', remoteConfig);
		const fetched = await fetchAndActivate(remoteConfig);
		if (fetched) {
			console.log('Remote config fetched and activated.');
			// Agora você pode obter os valores
			const featuresFetched = JSON.parse(getValue(remoteConfig, 'features').asString());
			console.log('value:', featuresFetched);
			features.about = featuresFetched.about;
			features.accountability = featuresFetched.accountability;
			features.contact = featuresFetched.contact;
			features.contribute = featuresFetched.contribute;
			features.home = featuresFetched.home;
			features.links = featuresFetched.links;
			features.projects = featuresFetched.projects;
			console.log('features:', features);
		} else {
			console.log('Remote config data is not new.');
			const value: any = getValue(remoteConfig, 'features');
			const featuresRemote = JSON.parse(value._value);
			features.about = featuresRemote.about;
			features.accountability = featuresRemote.accountability;
			features.contact = featuresRemote.contact;
			features.contribute = featuresRemote.contribute;
			features.home = featuresRemote.home;
			features.links = featuresRemote.links;
			features.projects = featuresRemote.projects;
			console.log('featuresRemote:', featuresRemote);
		}
	} catch (err) {
		console.error('Error fetching remote config:', err);
	}
}

export function getFeatures() {
	return features;
}
