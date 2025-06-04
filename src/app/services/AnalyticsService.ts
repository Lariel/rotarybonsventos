import ReactGA from 'react-ga4';

export function iniGA() {
	ReactGA.initialize('G-BM9B7NM0LC');
}

export function registerEvent(event: string) {
	ReactGA.event({
		category: 'Click',
		action: `Open_${event}`,
		label: event, // optional
		value: 99, // optional, must be a number
		nonInteraction: false, // optional, true/false
		transport: "xhr", // optional, beacon/xhr/image
	});
}

export function registerPageView(title: string, page: string) {
	ReactGA.send({
		hitType: "pageview",
		page,
		title
	});
}
