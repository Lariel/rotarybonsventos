import development from '@assets/development.jpg';
import education from '@assets/education.jpg';
import health from '@assets/health.jpg';
import peace from '@assets/peace.jpg';
import nature from '@assets/nature.jpg';
import { Tag } from '@app/types/Tag';
import { Project } from '@app/types/Project';

const tag1: Tag = { id: 1, text: 'ambiental'};
const tag2: Tag = { id: 2, text: 'educação'};
const tag3: Tag = { id: 3, text: 'saúde'};
const tag4: Tag = { id: 4, text: 'desenvolvimento'};
const tag5: Tag = { id: 5, text: 'paz'};


export const projects: Project[] = [
	{
		id: 1,
		image: `${development}`,
		title: 'título projeto1',
		summary: 'Breve descrição do primeiro projeto a ser mostrado',
		info: '',
		highlight: true,
		tags: [tag1, tag3]
	},
	{
		id: 2,
		image: `${education}`,
		title: 'título projeto2',
		summary: 'Breve descrição do segundo projeto a ser mostrado na página',
		info: '',
		highlight: true,
		tags: [tag1, tag2, tag3, tag4, tag5]
	},
	{
		id: 3,
		image: `${health}`,
		title: 'título projeto3',
		summary: 'Breve descrição do terceiro projeto a ser mostrado na página',
		info: '',
		highlight: true,
		tags: [tag1, tag4, tag3]
	},
	{
		id: 4,
		image: `${peace}`,
		title: 'título projeto4',
		summary: 'Breve descrição do quarto projeto a ser mostrado na página',
		info: '',
		highlight: true,
		tags: [tag2, tag5]
	},
	{
		id: 5,
		image: `${nature}`,
		title: 'título projeto5',
		summary: 'Breve descrição do quinto projeto a ser mostrado na página',
		info: '',
		highlight: true,
		tags: [tag4, tag3, tag5, tag1]
	},
	{
		id: 6,
		image: `${development}`,
		title: 'título projeto6',
		summary: 'Breve descrição do sexto projeto a ser mostrado na página',
		info: '',
		highlight: false,
		tags: [tag2, tag5]
	},
	{
		id: 7,
		image: `${education}`,
		title: 'título projeto7',
		summary: 'Breve descrição do sétimo projeto a ser mostrado na página',
		info: '',
		highlight: false,
		tags: [tag4, tag3, tag5, tag1]
	},
	{
		id: 8,
		image: `${health}`,
		title: 'título projeto8',
		summary: 'Breve descrição do oitavo projeto a ser mostrado na página',
		info: '',
		highlight: false,
		tags: []
	},
	{
		id: 9,
		image: `${peace}`,
		title: 'título projeto9',
		summary: 'Breve descrição do nono projeto a ser mostrado na página',
		info: '',
		highlight: false,
		tags: [tag4, tag3, tag5, tag1]
	}
]
