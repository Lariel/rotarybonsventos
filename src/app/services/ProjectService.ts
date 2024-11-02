import { projects } from '@app/model/Projects';
import { Project } from '@app/types/Project';

export function getProjects(): Project[] {
	return projects.sort((a, b) => a.id - b.id);
}

export function getHighlightProjects(): Project[] {
	return projects.filter(project => project.highlight).sort((a, b) => a.id - b.id);
}

