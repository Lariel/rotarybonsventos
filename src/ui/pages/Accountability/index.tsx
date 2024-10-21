import { useEffect } from 'react';
import { ContainerStyled, ContentStyled } from '@ui/styles/GlobalStyles';
import PageIntro from '@app/components/PageIntro';
import Paragraph from '@app/components/Paragraph';
import relatorio from '@assets/finance_report_10-2024.pdf';

export default function Accountability() {

	useEffect(() => {
		console.log('Start Accountability');

		const event = new CustomEvent('changePage',{
			detail: {
				text: 'Prestação de contas'
			}
		});

		document.dispatchEvent(event);

		return () => {
			console.log('Exit Accountability');
		}
	}, []);

	return (
		<ContainerStyled className='container'>
			<ContentStyled className='content-responsive'>
				<PageIntro intro='Aqui você encontra a prestação de contas do clube'/>
				<Paragraph text='Acreditamos que a transparência é fundamental para fortalecer a confiança e o compromisso entre nossos membros, apoiadores e a comunidade.'/>
				<Paragraph text='Nesta página, disponibilizamos as informações financeiras do clube de maneira clara e acessível.'/>
				<Paragraph text='iframe'/>
				<iframe src={relatorio}
								width="950"
								height="800">
				</iframe>
				<Paragraph text='object'/>
				<object data={relatorio}
								type="application/pdf"
								width="950"
								height="800">
				</object>
			</ContentStyled>
		</ContainerStyled>
	);
}
