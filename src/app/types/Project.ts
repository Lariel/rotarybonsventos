import { Tag } from './Tag';

export interface Project {
	id: number,
	image: string,
	title: string,
	summary: string,
	info: string,
	highlight: boolean,
	sponsors?: string,
	tags: Tag[]
}
