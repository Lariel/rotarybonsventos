import proj1_cover from '@assets/projects/proj-volta-aulas-cover-min.jpg';
import proj2_cover from '@assets/projects/proj-dia-saude-cover-min.jpg';
import proj3_cover from '@assets/projects/proj-arrecada-alimentos-cover-min.jpg';
import proj4_cover from '@assets/projects/proj-campanha-agasalho-cover-min.jpg';
import proj5_cover from '@assets/projects/proj-default-cover.jpg';
import proj6_cover from '@assets/projects/proj-sos-chuvas-cover-min.jpg';
import proj7_cover from '@assets/projects/proj-galeto-cover-min.jpg';
import proj8_cover from '@assets/projects/proj-dia-crianca-cover-min.jpeg';
import proj9_cover from '@assets/projects/proj-natal-cover-min.jpg';

import { Tag } from '@app/types/Tag';
import { Project } from '@app/types/Project';

const t_promoting_peace: Tag = { id: 1, text: 'paz'};
const t_fighting_disease: Tag = { id: 2, text: 'combate a doenças'};
const t_providing_clean_water: Tag = { id: 3, text: 'saneamento'};
const t_saving_mothers_and_children: Tag = { id: 4, text: 'saúde mães e filhos'};
const t_supporting_education: Tag = { id: 5, text: 'educação'};
const t_growing_local_economies: Tag = { id: 6, text: 'desenvolvimento'};
const t_protecting_environment: Tag = { id: 7, text: 'ambiental'};

const projects: Project[] = [
	{
		id: 1,
		image: `${proj1_cover}`,
		title: 'Volta às Aulas com o Rotary Bons Ventos',
		summary: 'Iniciativa anual que tem como objetivo promover um início de ano letivo mais digno e motivador para crianças em situação de vulnerabilidade social.',
		info: `O Projeto Volta às Aulas é uma das iniciativas anuais do Rotary Club de Osório Bons Ventos, que tem como objetivo promover um início de ano letivo mais digno e motivador para crianças em situação de vulnerabilidade social.
					Por meio da arrecadação de materiais escolares — como cadernos, lápis, mochilas, estojos, entre outros — o clube mobiliza a comunidade e parceiros para garantir que mais crianças tenham acesso aos recursos básicos para estudar com mais qualidade e autoestima.
					Na edição de 2025, o projeto arrecadou mais de 3 mil itens escolares, beneficiando diretamente mais de 250 crianças de mais de 13 escolas da rede municipal. Um gesto de solidariedade que reflete o compromisso do clube com a educação, a equidade e o desenvolvimento da nossa comunidade.
				`,
		highlight: true,
		sponsors: '',
		tags: [t_supporting_education, t_growing_local_economies]
	},
	{
		id: 2,
		image: `${proj2_cover}`,
		title: 'Dia da Saúde',
		summary: 'O Dia da Saúde ofereceu serviços gratuitos de saúde à comunidade, promovendo prevenção e bem-estar',
		info: `O Projeto Dia da Saúde foi uma ação comunitária promovida pelo Rotary Club dos Bons Ventos em parceria com a Unicnec e a Prefeitura Municipal de Osório. Seu objetivo era oferecer, de forma gratuita, serviços e informações essenciais sobre cuidados primários de saúde à população.
					Durante o evento, a comunidade teve acesso a atendimentos em diversas áreas da saúde, como, testes de acuidade visual e motricidade ocular, atendimento odontológico, psicologia, fisioterapia, farmácia, nutrição e enfermagem.
					A iniciativa reforça nosso compromisso com a prevenção, a promoção da saúde e o cuidado com o bem-estar coletivo. Para nós, rotarianos, servir é transformar — e cuidar da saúde é um dos caminhos mais importantes para fortalecer comunidades e garantir qualidade de vida.
				`,
		highlight: false,
		tags: [t_fighting_disease, t_growing_local_economies, t_saving_mothers_and_children]
	},
	{
		id: 3,
		image: `${proj3_cover}`,
		title: 'Arrecadação de Alimentos',
		summary: 'Arrecadação de alimentos na Semana Farroupilha para apoiar entidades assistenciais de Osório',
		info: `Durante dois anos consecutivos, o Rotary Club dos Bons Ventos promoveu uma ação solidária durante a Semana Farroupilha, arrecadando alimentos para apoiar entidades que prestam assistência à comunidade. As doações foram entregues à Pastoral da Criança, ao Centro Espírita e ao Lar dos Idosos de Osório, fortalecendo laços e levando acolhimento a quem mais precisa.`,
		highlight: true,
		tags: [t_fighting_disease, t_growing_local_economies, t_promoting_peace]
	},
	{
		id: 4,
		image: `${proj4_cover}`,
		title: 'Campanha do agasalho',
		summary: 'Campanha do agasalho realizada em parceria com o Rotaract, destinada às vítimas de um ciclone na região',
		info: `Em parceria com o Rotaract Club de Osório, promovemos uma campanha do agasalho com foco em organização e impacto. Todas as doações foram cuidadosamente triadas, classificadas e destinadas às vítimas de um ciclone extratropical que atingiu a região. Um gesto de empatia que aqueceu tanto os corpos quanto os corações.`,
		highlight: false,
		tags: [t_fighting_disease, t_growing_local_economies, t_promoting_peace]
	},
	{
		id: 5,
		image: `${proj5_cover}`,
		title: 'Blitz da Pólio',
		summary: 'Campanha e distribuição de panfletos para conscientizar sobre a importância da vacinação infantil na erradicação da pólio',
		info: `Com o compromisso de contribuir para um mundo livre da pólio, realizamos uma blitz informativa com distribuição de panfletos, reforçando a importância da vacinação infantil. A ação teve como foco conscientizar pais e responsáveis sobre a necessidade da imunização e o papel vital que ela desempenha na erradicação da doença.`,
		highlight: false,
		tags: [t_supporting_education, t_fighting_disease, t_growing_local_economies, t_saving_mothers_and_children]
	},
	{
		id: 6,
		image: `${proj6_cover}`,
		title: 'SOS Chuvas – Apoio às Vítimas das Enchentes no RS',
		summary: 'Diante das enchentes no RS, o Rotary Bons Ventos mobilizou doações de todo o Brasil, enviando mais de 5 caminhões com itens essenciais às áreas afetadas',
		info: `Diante das fortes enchentes que atingiram o Rio Grande do Sul, o Rotary Club de Osório Bons Ventos se mobilizou intensamente em uma corrente de solidariedade. Arrecadamos, separamos e distribuímos doações vindas de diferentes partes do Brasil, incluindo São Paulo e Santa Catarina. Foram mais de 5 caminhões carregados com mantimentos, água potável, roupas, colchões e kits de higiene, enviados diretamente para as áreas afetadas. Um esforço coletivo movido pelo nosso compromisso de estar presente onde a ajuda é mais urgente.`,
		highlight: true,
		tags: [t_fighting_disease, t_growing_local_economies, t_providing_clean_water]
	},
	{
		id: 7,
		image: `${proj7_cover}`,
		title: 'Galeto do Bons Ventos',
		summary: 'O Galeto do Bons Ventos é uma ação solidária que arrecada fundos para projetos sociais. Na última edição, foram vendidos mais de 350 ingressos, gerando mais de R$10 mil em recursos',
		info: `O Galeto do Bons Ventos é uma ação financeira do nosso clube, que une sabor e solidariedade. Através da venda de galetos assados, arrecadamos fundos para manter e viabilizar nossos projetos sociais ao longo do ano rotário. Cada refeição vendida representa um gesto de apoio à nossa missão de servir e transformar realidades na comunidade.
Na última edição vendemos mais de 350 ingressos que davam direito a 4 pedaços de frango, maionese, arroz e salada. Conseguimos arrecadar mais de 10 mil reais e assim manter nossas ações e projetos ativos.
`,
		highlight: false,
		tags: [t_growing_local_economies]
	},
	{
		id: 8,
		image: `${proj8_cover}`,
		title: 'Dia das Crianças',
		summary: 'No Dia das Crianças, levamos brinquedos e lanches a um bairro carente, promovendo um dia de alegria e inclusão para as crianças',
		info: `Em comemoração ao Dia das Crianças, promovemos uma ação especial em um bairro que raramente recebe iniciativas voltadas ao público infantil. Alugamos brinquedos infláveis e distribuímos cachorro-quente, refrigerante e pipoca, criando um momento de alegria, cuidado e diversão para as crianças da comunidade. Um gesto simples, mas cheio de significado, que reforça o nosso compromisso com o bem-estar e o desenvolvimento infantil.`,
		highlight: true,
		tags: [t_promoting_peace]
	},
	{
		id: 9,
		image: `${proj9_cover}`,
		title: 'Conexão Natal do Bem',
		summary: 'O Conexão Natal do Bem levou alegria e inclusão às crianças com festa, presentes e praça revitalizada, em parceria com o Rotaract de Osório',
		info: `Conexão Natal do Bem é um projeto realizado em parceria com o Rotaract Club de Osório, com o objetivo de levar esperança e alegria no fim de ano. Reformamos a praça Pedro Farias e organizamos um dia mágico com brinquedos infláveis, cachorro-quente, pipoca, refrigerante e entrega de presentes. A ação promove um Natal mais digno para as crianças do bairro, proporcionando não apenas diversão, mas também afeto e inclusão.`,
		highlight: true,
		tags: [t_growing_local_economies, t_promoting_peace, t_protecting_environment]
	}
]

export const projMap: Map<number, Project> = new Map();

projMap.set(projects[0].id, projects[0])
projMap.set(projects[1].id, projects[1])
projMap.set(projects[2].id, projects[2])
projMap.set(projects[3].id, projects[3])
projMap.set(projects[4].id, projects[4])
projMap.set(projects[5].id, projects[5])
projMap.set(projects[6].id, projects[6])
projMap.set(projects[7].id, projects[7])
projMap.set(projects[8].id, projects[8])
