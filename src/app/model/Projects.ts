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
		title: 'Volta às Aulas com o Rotary Bons Ventos',
		summary: 'Iniciativa anual que tem como objetivo promover um início de ano letivo mais digno e motivador para crianças em situação de vulnerabilidade social.',
		info: `O Projeto Volta às Aulas é uma das iniciativas anuais do Rotary Club de Osório Bons Ventos, que tem como objetivo promover um início de ano letivo mais digno e motivador para crianças em situação de vulnerabilidade social.
					Por meio da arrecadação de materiais escolares — como cadernos, lápis, mochilas, estojos, entre outros — o clube mobiliza a comunidade e parceiros para garantir que mais crianças tenham acesso aos recursos básicos para estudar com mais qualidade e autoestima.
					Na edição de 2025, o projeto arrecadou mais de 3 mil itens escolares, beneficiando diretamente mais de 250 crianças de mais de 13 escolas da rede municipal. Um gesto de solidariedade que reflete o compromisso do clube com a educação, a equidade e o desenvolvimento da nossa comunidade.
				`,
		highlight: true,
		tags: [tag2, tag4]
	},
	{
		id: 2,
		image: `${education}`,
		title: 'Dia da Saúde',
		summary: 'Breve descrição do segundo projeto a ser mostrado na página',
		info: `O Projeto Dia da Saúde foi uma ação comunitária promovida pelo Rotary Club dos Bons Ventos em parceria com a Unicnec e a Prefeitura Municipal de Osório. Seu objetivo era oferecer, de forma gratuita, serviços e informações essenciais sobre cuidados primários de saúde à população.
					Durante o evento, a comunidade teve acesso a atendimentos em diversas áreas da saúde, como, testes de acuidade visual e motricidade ocular, atendimento odontológico, psicologia, fisioterapia, farmácia, nutrição e enfermagem.
					A iniciativa reforça nosso compromisso com a prevenção, a promoção da saúde e o cuidado com o bem-estar coletivo. Para nós, rotarianos, servir é transformar — e cuidar da saúde é um dos caminhos mais importantes para fortalecer comunidades e garantir qualidade de vida
				`,
		highlight: false,
		tags: [tag3, tag4]
	},
	{
		id: 3,
		image: `${health}`,
		title: 'Arrecadação de Alimentos',
		summary: 'Breve descrição do terceiro projeto a ser mostrado na página',
		info: `Durante dois anos consecutivos, o Rotary Club dos Bons Ventos promoveu uma ação solidária durante a Semana Farroupilha, arrecadando alimentos para apoiar entidades que prestam assistência à comunidade. As doações foram entregues à Pastoral da Criança, ao Centro Espírita e ao Lar dos Idosos de Osório, fortalecendo laços e levando acolhimento a quem mais precisa.`,
		highlight: true,
		tags: [tag3, tag4, tag5]
	},
	{
		id: 4,
		image: `${peace}`,
		title: 'Campanha do agasalho',
		summary: 'Breve descrição do quarto projeto a ser mostrado na página',
		info: `Em parceria com o Rotaract Club de Osório, promovemos uma campanha do agasalho com foco em organização e impacto. Todas as doações foram cuidadosamente triadas, classificadas e destinadas às vítimas de um ciclone extratropical que atingiu a região. Um gesto de empatia que aqueceu tanto os corpos quanto os corações.`,
		highlight: true,
		tags: [tag3, tag4, tag5]
	},
	{
		id: 5,
		image: `${nature}`,
		title: 'Blitz da Pólio',
		summary: 'Breve descrição do quinto projeto a ser mostrado na página',
		info: `Com o compromisso de contribuir para um mundo livre da pólio, realizamos uma blitz informativa com distribuição de panfletos, reforçando a importância da vacinação infantil. A ação teve como foco conscientizar pais e responsáveis sobre a necessidade da imunização e o papel vital que ela desempenha na erradicação da doença.`,
		highlight: true,
		tags: [tag2, tag3, tag4, tag5]
	},
	{
		id: 6,
		image: `${development}`,
		title: 'SOS Chuvas – Apoio às Vítimas das Enchentes no RS',
		summary: 'Breve descrição do sexto projeto a ser mostrado na página',
		info: `Diante das fortes enchentes que atingiram o Rio Grande do Sul, o Rotary Club de Osório Bons Ventos se mobilizou intensamente em uma corrente de solidariedade. Arrecadamos, separamos e distribuímos doações vindas de diferentes partes do Brasil, incluindo São Paulo e Santa Catarina. Foram mais de 5 caminhões carregados com mantimentos, água potável, roupas, colchões e kits de higiene, enviados diretamente para as áreas afetadas. Um esforço coletivo movido pelo nosso compromisso de estar presente onde a ajuda é mais urgente.`,
		highlight: false,
		tags: [tag3, tag4]
	},
	{
		id: 7,
		image: `${education}`,
		title: 'Galeto do Bons Ventos',
		summary: 'Breve descrição do sétimo projeto a ser mostrado na página',
		info: `O Galeto do Bons Ventos é uma ação financeira do nosso clube, que une sabor e solidariedade. Através da venda de galetos assados, arrecadamos fundos para manter e viabilizar nossos projetos sociais ao longo do ano rotário. Cada refeição vendida representa um gesto de apoio à nossa missão de servir e transformar realidades na comunidade.
Na última edição vendemos mais de 350 ingressos que davam direito a 4 pedaços de frango, maionese, arroz e salada. Conseguimos arrecadar mais de 10 mil reais e assim manter nossas ações e projetos ativos.
`,
		highlight: true,
		tags: [tag4]
	},
	{
		id: 8,
		image: `${health}`,
		title: 'Dia das Crianças',
		summary: 'Breve descrição do oitavo projeto a ser mostrado na página',
		info: `Em comemoração ao Dia das Crianças, promovemos uma ação especial em um bairro que raramente recebe iniciativas voltadas ao público infantil. Alugamos brinquedos infláveis e distribuímos cachorro-quente, refrigerante e pipoca, criando um momento de alegria, cuidado e diversão para as crianças da comunidade. Um gesto simples, mas cheio de significado, que reforça o nosso compromisso com o bem-estar e o desenvolvimento infantil.`,
		highlight: false,
		tags: []
	},
	{
		id: 9,
		image: `${peace}`,
		title: 'Conexão Natal do Bem',
		summary: 'Breve descrição do nono projeto a ser mostrado na página',
		info: `Conexão Natal do Bem é um projeto realizado em parceria com o Rotaract Club de Osório, com o objetivo de levar esperança e alegria no fim de ano. Reformamos a praça Pedro Farias e organizamos um dia mágico com brinquedos infláveis, cachorro-quente, pipoca, refrigerante e entrega de presentes. A ação promove um Natal mais digno para as crianças do bairro, proporcionando não apenas diversão, mas também afeto e inclusão.`,
		highlight: false,
		tags: [tag4, tag5, tag1]
	}
]
