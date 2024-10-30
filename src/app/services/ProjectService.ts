import { projects } from '@app/model/Projects';
import { Project } from '@app/types/Project';

export function getProjects(): Project[] {
	return projects;
}

export function getHighlightProjects(): Project[] {
	return projects.filter(project => project.highlight);
}

