import { Pages } from '@app/model/Pages'

export const routes = {
	home: {
		path: Pages.home.path,
		label: Pages.home.label
	},
	projects: {
		path: Pages.projects.path,
		label: Pages.projects.label,
	},
	projectDetails: {
		path: Pages.projectDetails.path,
		label: Pages.projectDetails.label
	},
	accountability: {
		path: Pages.accountability.path,
		label: Pages.accountability.label
	},
	contribute: {
		path: Pages.contribute.path,
		label: Pages.contribute.label
	},
	contact: {
		path: Pages.contact.path,
		label: Pages.contact.label
	},
	about: {
		path: Pages.about.path,
		label: Pages.about.label
	},
	links: {
		path: Pages.links.path,
		label: Pages.links.label
	},
	notFound: {
		path: Pages.notFound.path,
		label: Pages.notFound.label
	}
}
