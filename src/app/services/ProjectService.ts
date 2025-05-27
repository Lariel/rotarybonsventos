import { projMap } from '@app/model/Projects';
import { Project } from '@app/types/Project';

export function getProjects(): Project[] {
	const projectsList = Array.from(projMap, ([, value]) => ({...value}));
	return projectsList.sort((a, b) => a.id - b.id);
}

export function getProjectDetails(id: number): Project | undefined {
	return projMap.get(id);
}

export function getHighlightProjects(): Project[] {
	const projectsList = Array.from(projMap, ([, value]) => ({...value}));
	return projectsList.filter(project => project.highlight).sort((a, b) => a.id - b.id);
}

