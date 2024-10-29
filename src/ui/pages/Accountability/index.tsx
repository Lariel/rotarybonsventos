import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import PageIntro from '@app/components/PageIntro';
import relatorio from '@assets/finance_report_10-2024.pdf';
import { Pages } from '@app/model/Pages';
import { PageStyled } from './styles';

export default function Accountability() {

	useEffect(() => {
		console.log('Start Accountability');

		const event = new CustomEvent('changePage',{
			detail: {
				pageSelected: Pages.accountability
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Accountability');
		}
	}, []);

	return (
		<ContainerStyled className='container container-bg'>
			<ContentStyled className='content-responsive'>
				<PageStyled>
					<PageIntro intro='Aqui você encontra a prestação de contas do clube'/>
					<p>Acreditamos que a transparência é fundamental para fortalecer a confiança e o compromisso entre nossos membros, apoiadores e a comunidade.</p>
					<p>Nesta página, disponibilizamos as informações financeiras do clube de maneira clara e acessível.</p>
					<object data={relatorio}
									type='application/pdf'
									width='950'
									height='1190'>
									<p> Falha ao carregar o preview do documeto, clique <a href={relatorio}>aqui</a> para baixar o relatório.</p>

					</object>
				</PageStyled>
			</ContentStyled>
		</ContainerStyled>
	);
}
